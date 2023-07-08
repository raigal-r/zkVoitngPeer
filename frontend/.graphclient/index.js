import { gql } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';
import GraphqlHandler from "@graphql-mesh/graphql";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import * as importedModule$0 from "./sources/zkvoiting-peerup/introspectionSchema.js";
import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');
const importFn = (moduleId) => {
    const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/zkvoiting-peerup/introspectionSchema.js":
            return Promise.resolve(importedModule$0);
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "js",
}), {
    readonly: true,
    validate: false
});
export const rawServeConfig = undefined;
export async function getMeshOptions() {
    const pubsub = new PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new DefaultLogger("GraphClient");
    const cache = new MeshCache({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const zkvoitingPeerupTransforms = [];
    const additionalTypeDefs = [];
    const zkvoitingPeerupHandler = new GraphqlHandler({
        name: "zkvoiting-peerup",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/grmkris/zkvoiting-peerup" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("zkvoiting-peerup"),
        logger: logger.child("zkvoiting-peerup"),
        importFn,
    });
    sources[0] = {
        name: 'zkvoiting-peerup',
        handler: zkvoitingPeerupHandler,
        transforms: zkvoitingPeerupTransforms
    };
    const additionalResolvers = [];
    const merger = new BareMerger({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
    });
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: ProposalsDocument,
                    get rawSDL() {
                        return printWithCache(ProposalsDocument);
                    },
                    location: 'ProposalsDocument.graphql'
                }, {
                    document: VotesDocument,
                    get rawSDL() {
                        return printWithCache(VotesDocument);
                    },
                    location: 'VotesDocument.graphql'
                }, {
                    document: VotesByProposalDocument,
                    get rawSDL() {
                        return printWithCache(VotesByProposalDocument);
                    },
                    location: 'VotesByProposalDocument.graphql'
                }, {
                    document: ProposalByIdDocument,
                    get rawSDL() {
                        return printWithCache(ProposalByIdDocument);
                    },
                    location: 'ProposalByIdDocument.graphql'
                }
            ];
        },
        fetchFn,
    };
}
export function createBuiltMeshHTTPHandler() {
    return createMeshHTTPHandler({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
let meshInstance$;
export function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
export const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
export const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export const proposalsDocument = gql `
    query proposals {
  proposalCreateds {
    id
    description
    transactionHash
    voteEnd
    voteStart
    proposer
    proposalId
  }
}
    `;
export const votesDocument = gql `
    query votes {
  voteCasts {
    proposalId
    transactionHash
    id
    voter
  }
}
    `;
export const votesByProposalDocument = gql `
    query votesByProposal($proposalId: BigInt!) {
  voteCasts(where: {proposalId: $proposalId}) {
    proposalId
    transactionHash
    id
    voter
    reason
    support
    weight
    id
    transactionHash
    blockNumber
    blockTimestamp
  }
}
    `;
export const proposalByIdDocument = gql `
    query proposalById($proposalId: BigInt!) {
  proposalCreateds(where: {proposalId: $proposalId}) {
    id
    description
    transactionHash
    voteEnd
    voteStart
    proposer
    proposalId
  }
}
    `;
export function getSdk(requester) {
    return {
        proposals(variables, options) {
            return requester(proposalsDocument, variables, options);
        },
        votes(variables, options) {
            return requester(votesDocument, variables, options);
        },
        votesByProposal(variables, options) {
            return requester(votesByProposalDocument, variables, options);
        },
        proposalById(variables, options) {
            return requester(proposalByIdDocument, variables, options);
        }
    };
}
