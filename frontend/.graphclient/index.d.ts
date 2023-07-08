import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { MeshHTTPHandler } from '@graphql-mesh/http';
import { ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import type { ZkvoitingPeerupTypes } from './sources/zkvoiting-peerup/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: any;
    BigInt: any;
    Bytes: any;
    Int8: any;
};
export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};
export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};
export type EIP712DomainChanged = {
    id: Scalars['Bytes'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type EIP712DomainChanged_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<EIP712DomainChanged_filter>>>;
    or?: InputMaybe<Array<InputMaybe<EIP712DomainChanged_filter>>>;
};
export type EIP712DomainChanged_orderBy = 'id' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';
export type ProposalCanceled = {
    id: Scalars['Bytes'];
    proposalId: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type ProposalCanceled_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    proposalId?: InputMaybe<Scalars['BigInt']>;
    proposalId_not?: InputMaybe<Scalars['BigInt']>;
    proposalId_gt?: InputMaybe<Scalars['BigInt']>;
    proposalId_lt?: InputMaybe<Scalars['BigInt']>;
    proposalId_gte?: InputMaybe<Scalars['BigInt']>;
    proposalId_lte?: InputMaybe<Scalars['BigInt']>;
    proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ProposalCanceled_filter>>>;
    or?: InputMaybe<Array<InputMaybe<ProposalCanceled_filter>>>;
};
export type ProposalCanceled_orderBy = 'id' | 'proposalId' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type ProposalCreated = {
    id: Scalars['Bytes'];
    proposalId: Scalars['BigInt'];
    proposer: Scalars['Bytes'];
    targets: Array<Scalars['Bytes']>;
    values: Array<Scalars['BigInt']>;
    signatures: Array<Scalars['String']>;
    calldatas: Array<Scalars['Bytes']>;
    voteStart: Scalars['BigInt'];
    voteEnd: Scalars['BigInt'];
    description: Scalars['String'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type ProposalCreated_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    proposalId?: InputMaybe<Scalars['BigInt']>;
    proposalId_not?: InputMaybe<Scalars['BigInt']>;
    proposalId_gt?: InputMaybe<Scalars['BigInt']>;
    proposalId_lt?: InputMaybe<Scalars['BigInt']>;
    proposalId_gte?: InputMaybe<Scalars['BigInt']>;
    proposalId_lte?: InputMaybe<Scalars['BigInt']>;
    proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    proposer?: InputMaybe<Scalars['Bytes']>;
    proposer_not?: InputMaybe<Scalars['Bytes']>;
    proposer_gt?: InputMaybe<Scalars['Bytes']>;
    proposer_lt?: InputMaybe<Scalars['Bytes']>;
    proposer_gte?: InputMaybe<Scalars['Bytes']>;
    proposer_lte?: InputMaybe<Scalars['Bytes']>;
    proposer_in?: InputMaybe<Array<Scalars['Bytes']>>;
    proposer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    proposer_contains?: InputMaybe<Scalars['Bytes']>;
    proposer_not_contains?: InputMaybe<Scalars['Bytes']>;
    targets?: InputMaybe<Array<Scalars['Bytes']>>;
    targets_not?: InputMaybe<Array<Scalars['Bytes']>>;
    targets_contains?: InputMaybe<Array<Scalars['Bytes']>>;
    targets_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
    targets_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
    targets_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
    values?: InputMaybe<Array<Scalars['BigInt']>>;
    values_not?: InputMaybe<Array<Scalars['BigInt']>>;
    values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
    values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
    signatures?: InputMaybe<Array<Scalars['String']>>;
    signatures_not?: InputMaybe<Array<Scalars['String']>>;
    signatures_contains?: InputMaybe<Array<Scalars['String']>>;
    signatures_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    signatures_not_contains?: InputMaybe<Array<Scalars['String']>>;
    signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
    calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
    calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
    calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
    calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
    calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
    calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
    voteStart?: InputMaybe<Scalars['BigInt']>;
    voteStart_not?: InputMaybe<Scalars['BigInt']>;
    voteStart_gt?: InputMaybe<Scalars['BigInt']>;
    voteStart_lt?: InputMaybe<Scalars['BigInt']>;
    voteStart_gte?: InputMaybe<Scalars['BigInt']>;
    voteStart_lte?: InputMaybe<Scalars['BigInt']>;
    voteStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
    voteStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    voteEnd?: InputMaybe<Scalars['BigInt']>;
    voteEnd_not?: InputMaybe<Scalars['BigInt']>;
    voteEnd_gt?: InputMaybe<Scalars['BigInt']>;
    voteEnd_lt?: InputMaybe<Scalars['BigInt']>;
    voteEnd_gte?: InputMaybe<Scalars['BigInt']>;
    voteEnd_lte?: InputMaybe<Scalars['BigInt']>;
    voteEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
    voteEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    description?: InputMaybe<Scalars['String']>;
    description_not?: InputMaybe<Scalars['String']>;
    description_gt?: InputMaybe<Scalars['String']>;
    description_lt?: InputMaybe<Scalars['String']>;
    description_gte?: InputMaybe<Scalars['String']>;
    description_lte?: InputMaybe<Scalars['String']>;
    description_in?: InputMaybe<Array<Scalars['String']>>;
    description_not_in?: InputMaybe<Array<Scalars['String']>>;
    description_contains?: InputMaybe<Scalars['String']>;
    description_contains_nocase?: InputMaybe<Scalars['String']>;
    description_not_contains?: InputMaybe<Scalars['String']>;
    description_not_contains_nocase?: InputMaybe<Scalars['String']>;
    description_starts_with?: InputMaybe<Scalars['String']>;
    description_starts_with_nocase?: InputMaybe<Scalars['String']>;
    description_not_starts_with?: InputMaybe<Scalars['String']>;
    description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    description_ends_with?: InputMaybe<Scalars['String']>;
    description_ends_with_nocase?: InputMaybe<Scalars['String']>;
    description_not_ends_with?: InputMaybe<Scalars['String']>;
    description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ProposalCreated_filter>>>;
    or?: InputMaybe<Array<InputMaybe<ProposalCreated_filter>>>;
};
export type ProposalCreated_orderBy = 'id' | 'proposalId' | 'proposer' | 'targets' | 'values' | 'signatures' | 'calldatas' | 'voteStart' | 'voteEnd' | 'description' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type ProposalExecuted = {
    id: Scalars['Bytes'];
    proposalId: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type ProposalExecuted_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    proposalId?: InputMaybe<Scalars['BigInt']>;
    proposalId_not?: InputMaybe<Scalars['BigInt']>;
    proposalId_gt?: InputMaybe<Scalars['BigInt']>;
    proposalId_lt?: InputMaybe<Scalars['BigInt']>;
    proposalId_gte?: InputMaybe<Scalars['BigInt']>;
    proposalId_lte?: InputMaybe<Scalars['BigInt']>;
    proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ProposalExecuted_filter>>>;
    or?: InputMaybe<Array<InputMaybe<ProposalExecuted_filter>>>;
};
export type ProposalExecuted_orderBy = 'id' | 'proposalId' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type ProposalThresholdSet = {
    id: Scalars['Bytes'];
    oldProposalThreshold: Scalars['BigInt'];
    newProposalThreshold: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type ProposalThresholdSet_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    oldProposalThreshold?: InputMaybe<Scalars['BigInt']>;
    oldProposalThreshold_not?: InputMaybe<Scalars['BigInt']>;
    oldProposalThreshold_gt?: InputMaybe<Scalars['BigInt']>;
    oldProposalThreshold_lt?: InputMaybe<Scalars['BigInt']>;
    oldProposalThreshold_gte?: InputMaybe<Scalars['BigInt']>;
    oldProposalThreshold_lte?: InputMaybe<Scalars['BigInt']>;
    oldProposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
    oldProposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newProposalThreshold?: InputMaybe<Scalars['BigInt']>;
    newProposalThreshold_not?: InputMaybe<Scalars['BigInt']>;
    newProposalThreshold_gt?: InputMaybe<Scalars['BigInt']>;
    newProposalThreshold_lt?: InputMaybe<Scalars['BigInt']>;
    newProposalThreshold_gte?: InputMaybe<Scalars['BigInt']>;
    newProposalThreshold_lte?: InputMaybe<Scalars['BigInt']>;
    newProposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newProposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<ProposalThresholdSet_filter>>>;
    or?: InputMaybe<Array<InputMaybe<ProposalThresholdSet_filter>>>;
};
export type ProposalThresholdSet_orderBy = 'id' | 'oldProposalThreshold' | 'newProposalThreshold' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type Query = {
    eip712DomainChanged?: Maybe<EIP712DomainChanged>;
    eip712DomainChangeds: Array<EIP712DomainChanged>;
    proposalCanceled?: Maybe<ProposalCanceled>;
    proposalCanceleds: Array<ProposalCanceled>;
    proposalCreated?: Maybe<ProposalCreated>;
    proposalCreateds: Array<ProposalCreated>;
    proposalExecuted?: Maybe<ProposalExecuted>;
    proposalExecuteds: Array<ProposalExecuted>;
    proposalThresholdSet?: Maybe<ProposalThresholdSet>;
    proposalThresholdSets: Array<ProposalThresholdSet>;
    quorumNumeratorUpdated?: Maybe<QuorumNumeratorUpdated>;
    quorumNumeratorUpdateds: Array<QuorumNumeratorUpdated>;
    voteCast?: Maybe<VoteCast>;
    voteCasts: Array<VoteCast>;
    voteCastWithParams: Array<VoteCastWithParams>;
    votingDelaySet?: Maybe<VotingDelaySet>;
    votingDelaySets: Array<VotingDelaySet>;
    votingPeriodSet?: Maybe<VotingPeriodSet>;
    votingPeriodSets: Array<VotingPeriodSet>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type Queryeip712DomainChangedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Queryeip712DomainChangedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<EIP712DomainChanged_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<EIP712DomainChanged_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalCanceledArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalCanceledsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalCanceled_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalCanceled_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalCreatedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalCreatedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalCreated_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalCreated_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalExecutedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalExecutedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalExecuted_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalExecuted_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalThresholdSetArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryproposalThresholdSetsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalThresholdSet_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalThresholdSet_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryquorumNumeratorUpdatedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryquorumNumeratorUpdatedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<QuorumNumeratorUpdated_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<QuorumNumeratorUpdated_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvoteCastArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvoteCastsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VoteCast_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VoteCast_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvoteCastWithParamsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VoteCastWithParams_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VoteCastWithParams_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvotingDelaySetArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvotingDelaySetsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VotingDelaySet_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VotingDelaySet_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvotingPeriodSetArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type QueryvotingPeriodSetsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VotingPeriodSet_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VotingPeriodSet_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type QuorumNumeratorUpdated = {
    id: Scalars['Bytes'];
    oldQuorumNumerator: Scalars['BigInt'];
    newQuorumNumerator: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type QuorumNumeratorUpdated_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    oldQuorumNumerator?: InputMaybe<Scalars['BigInt']>;
    oldQuorumNumerator_not?: InputMaybe<Scalars['BigInt']>;
    oldQuorumNumerator_gt?: InputMaybe<Scalars['BigInt']>;
    oldQuorumNumerator_lt?: InputMaybe<Scalars['BigInt']>;
    oldQuorumNumerator_gte?: InputMaybe<Scalars['BigInt']>;
    oldQuorumNumerator_lte?: InputMaybe<Scalars['BigInt']>;
    oldQuorumNumerator_in?: InputMaybe<Array<Scalars['BigInt']>>;
    oldQuorumNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newQuorumNumerator?: InputMaybe<Scalars['BigInt']>;
    newQuorumNumerator_not?: InputMaybe<Scalars['BigInt']>;
    newQuorumNumerator_gt?: InputMaybe<Scalars['BigInt']>;
    newQuorumNumerator_lt?: InputMaybe<Scalars['BigInt']>;
    newQuorumNumerator_gte?: InputMaybe<Scalars['BigInt']>;
    newQuorumNumerator_lte?: InputMaybe<Scalars['BigInt']>;
    newQuorumNumerator_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newQuorumNumerator_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<QuorumNumeratorUpdated_filter>>>;
    or?: InputMaybe<Array<InputMaybe<QuorumNumeratorUpdated_filter>>>;
};
export type QuorumNumeratorUpdated_orderBy = 'id' | 'oldQuorumNumerator' | 'newQuorumNumerator' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type Subscription = {
    eip712DomainChanged?: Maybe<EIP712DomainChanged>;
    eip712DomainChangeds: Array<EIP712DomainChanged>;
    proposalCanceled?: Maybe<ProposalCanceled>;
    proposalCanceleds: Array<ProposalCanceled>;
    proposalCreated?: Maybe<ProposalCreated>;
    proposalCreateds: Array<ProposalCreated>;
    proposalExecuted?: Maybe<ProposalExecuted>;
    proposalExecuteds: Array<ProposalExecuted>;
    proposalThresholdSet?: Maybe<ProposalThresholdSet>;
    proposalThresholdSets: Array<ProposalThresholdSet>;
    quorumNumeratorUpdated?: Maybe<QuorumNumeratorUpdated>;
    quorumNumeratorUpdateds: Array<QuorumNumeratorUpdated>;
    voteCast?: Maybe<VoteCast>;
    voteCasts: Array<VoteCast>;
    voteCastWithParams: Array<VoteCastWithParams>;
    votingDelaySet?: Maybe<VotingDelaySet>;
    votingDelaySets: Array<VotingDelaySet>;
    votingPeriodSet?: Maybe<VotingPeriodSet>;
    votingPeriodSets: Array<VotingPeriodSet>;
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
};
export type Subscriptioneip712DomainChangedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Subscriptioneip712DomainChangedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<EIP712DomainChanged_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<EIP712DomainChanged_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalCanceledArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalCanceledsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalCanceled_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalCanceled_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalCreatedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalCreatedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalCreated_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalCreated_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalExecutedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalExecutedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalExecuted_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalExecuted_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalThresholdSetArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionproposalThresholdSetsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<ProposalThresholdSet_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<ProposalThresholdSet_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionquorumNumeratorUpdatedArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionquorumNumeratorUpdatedsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<QuorumNumeratorUpdated_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<QuorumNumeratorUpdated_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvoteCastArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvoteCastsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VoteCast_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VoteCast_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvoteCastWithParamsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VoteCastWithParams_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VoteCastWithParams_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvotingDelaySetArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvotingDelaySetsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VotingDelaySet_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VotingDelaySet_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvotingPeriodSetArgs = {
    id: Scalars['ID'];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type SubscriptionvotingPeriodSetsArgs = {
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<VotingPeriodSet_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<VotingPeriodSet_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
};
export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
};
export type VoteCast = {
    id: Scalars['Bytes'];
    voter: Scalars['Bytes'];
    proposalId: Scalars['BigInt'];
    support: Scalars['Int'];
    weight: Scalars['BigInt'];
    reason: Scalars['String'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type VoteCastWithParams = {
    id: Scalars['Bytes'];
    voter: Scalars['Bytes'];
    proposalId: Scalars['BigInt'];
    support: Scalars['Int'];
    weight: Scalars['BigInt'];
    reason: Scalars['String'];
    params: Scalars['Bytes'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type VoteCastWithParams_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    voter?: InputMaybe<Scalars['Bytes']>;
    voter_not?: InputMaybe<Scalars['Bytes']>;
    voter_gt?: InputMaybe<Scalars['Bytes']>;
    voter_lt?: InputMaybe<Scalars['Bytes']>;
    voter_gte?: InputMaybe<Scalars['Bytes']>;
    voter_lte?: InputMaybe<Scalars['Bytes']>;
    voter_in?: InputMaybe<Array<Scalars['Bytes']>>;
    voter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    voter_contains?: InputMaybe<Scalars['Bytes']>;
    voter_not_contains?: InputMaybe<Scalars['Bytes']>;
    proposalId?: InputMaybe<Scalars['BigInt']>;
    proposalId_not?: InputMaybe<Scalars['BigInt']>;
    proposalId_gt?: InputMaybe<Scalars['BigInt']>;
    proposalId_lt?: InputMaybe<Scalars['BigInt']>;
    proposalId_gte?: InputMaybe<Scalars['BigInt']>;
    proposalId_lte?: InputMaybe<Scalars['BigInt']>;
    proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    support?: InputMaybe<Scalars['Int']>;
    support_not?: InputMaybe<Scalars['Int']>;
    support_gt?: InputMaybe<Scalars['Int']>;
    support_lt?: InputMaybe<Scalars['Int']>;
    support_gte?: InputMaybe<Scalars['Int']>;
    support_lte?: InputMaybe<Scalars['Int']>;
    support_in?: InputMaybe<Array<Scalars['Int']>>;
    support_not_in?: InputMaybe<Array<Scalars['Int']>>;
    weight?: InputMaybe<Scalars['BigInt']>;
    weight_not?: InputMaybe<Scalars['BigInt']>;
    weight_gt?: InputMaybe<Scalars['BigInt']>;
    weight_lt?: InputMaybe<Scalars['BigInt']>;
    weight_gte?: InputMaybe<Scalars['BigInt']>;
    weight_lte?: InputMaybe<Scalars['BigInt']>;
    weight_in?: InputMaybe<Array<Scalars['BigInt']>>;
    weight_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    reason?: InputMaybe<Scalars['String']>;
    reason_not?: InputMaybe<Scalars['String']>;
    reason_gt?: InputMaybe<Scalars['String']>;
    reason_lt?: InputMaybe<Scalars['String']>;
    reason_gte?: InputMaybe<Scalars['String']>;
    reason_lte?: InputMaybe<Scalars['String']>;
    reason_in?: InputMaybe<Array<Scalars['String']>>;
    reason_not_in?: InputMaybe<Array<Scalars['String']>>;
    reason_contains?: InputMaybe<Scalars['String']>;
    reason_contains_nocase?: InputMaybe<Scalars['String']>;
    reason_not_contains?: InputMaybe<Scalars['String']>;
    reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
    reason_starts_with?: InputMaybe<Scalars['String']>;
    reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
    reason_not_starts_with?: InputMaybe<Scalars['String']>;
    reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    reason_ends_with?: InputMaybe<Scalars['String']>;
    reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
    reason_not_ends_with?: InputMaybe<Scalars['String']>;
    reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    params?: InputMaybe<Scalars['Bytes']>;
    params_not?: InputMaybe<Scalars['Bytes']>;
    params_gt?: InputMaybe<Scalars['Bytes']>;
    params_lt?: InputMaybe<Scalars['Bytes']>;
    params_gte?: InputMaybe<Scalars['Bytes']>;
    params_lte?: InputMaybe<Scalars['Bytes']>;
    params_in?: InputMaybe<Array<Scalars['Bytes']>>;
    params_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    params_contains?: InputMaybe<Scalars['Bytes']>;
    params_not_contains?: InputMaybe<Scalars['Bytes']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<VoteCastWithParams_filter>>>;
    or?: InputMaybe<Array<InputMaybe<VoteCastWithParams_filter>>>;
};
export type VoteCastWithParams_orderBy = 'id' | 'voter' | 'proposalId' | 'support' | 'weight' | 'reason' | 'params' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type VoteCast_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    voter?: InputMaybe<Scalars['Bytes']>;
    voter_not?: InputMaybe<Scalars['Bytes']>;
    voter_gt?: InputMaybe<Scalars['Bytes']>;
    voter_lt?: InputMaybe<Scalars['Bytes']>;
    voter_gte?: InputMaybe<Scalars['Bytes']>;
    voter_lte?: InputMaybe<Scalars['Bytes']>;
    voter_in?: InputMaybe<Array<Scalars['Bytes']>>;
    voter_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    voter_contains?: InputMaybe<Scalars['Bytes']>;
    voter_not_contains?: InputMaybe<Scalars['Bytes']>;
    proposalId?: InputMaybe<Scalars['BigInt']>;
    proposalId_not?: InputMaybe<Scalars['BigInt']>;
    proposalId_gt?: InputMaybe<Scalars['BigInt']>;
    proposalId_lt?: InputMaybe<Scalars['BigInt']>;
    proposalId_gte?: InputMaybe<Scalars['BigInt']>;
    proposalId_lte?: InputMaybe<Scalars['BigInt']>;
    proposalId_in?: InputMaybe<Array<Scalars['BigInt']>>;
    proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    support?: InputMaybe<Scalars['Int']>;
    support_not?: InputMaybe<Scalars['Int']>;
    support_gt?: InputMaybe<Scalars['Int']>;
    support_lt?: InputMaybe<Scalars['Int']>;
    support_gte?: InputMaybe<Scalars['Int']>;
    support_lte?: InputMaybe<Scalars['Int']>;
    support_in?: InputMaybe<Array<Scalars['Int']>>;
    support_not_in?: InputMaybe<Array<Scalars['Int']>>;
    weight?: InputMaybe<Scalars['BigInt']>;
    weight_not?: InputMaybe<Scalars['BigInt']>;
    weight_gt?: InputMaybe<Scalars['BigInt']>;
    weight_lt?: InputMaybe<Scalars['BigInt']>;
    weight_gte?: InputMaybe<Scalars['BigInt']>;
    weight_lte?: InputMaybe<Scalars['BigInt']>;
    weight_in?: InputMaybe<Array<Scalars['BigInt']>>;
    weight_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    reason?: InputMaybe<Scalars['String']>;
    reason_not?: InputMaybe<Scalars['String']>;
    reason_gt?: InputMaybe<Scalars['String']>;
    reason_lt?: InputMaybe<Scalars['String']>;
    reason_gte?: InputMaybe<Scalars['String']>;
    reason_lte?: InputMaybe<Scalars['String']>;
    reason_in?: InputMaybe<Array<Scalars['String']>>;
    reason_not_in?: InputMaybe<Array<Scalars['String']>>;
    reason_contains?: InputMaybe<Scalars['String']>;
    reason_contains_nocase?: InputMaybe<Scalars['String']>;
    reason_not_contains?: InputMaybe<Scalars['String']>;
    reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
    reason_starts_with?: InputMaybe<Scalars['String']>;
    reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
    reason_not_starts_with?: InputMaybe<Scalars['String']>;
    reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    reason_ends_with?: InputMaybe<Scalars['String']>;
    reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
    reason_not_ends_with?: InputMaybe<Scalars['String']>;
    reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<VoteCast_filter>>>;
    or?: InputMaybe<Array<InputMaybe<VoteCast_filter>>>;
};
export type VoteCast_orderBy = 'id' | 'voter' | 'proposalId' | 'support' | 'weight' | 'reason' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type VotingDelaySet = {
    id: Scalars['Bytes'];
    oldVotingDelay: Scalars['BigInt'];
    newVotingDelay: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type VotingDelaySet_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    oldVotingDelay?: InputMaybe<Scalars['BigInt']>;
    oldVotingDelay_not?: InputMaybe<Scalars['BigInt']>;
    oldVotingDelay_gt?: InputMaybe<Scalars['BigInt']>;
    oldVotingDelay_lt?: InputMaybe<Scalars['BigInt']>;
    oldVotingDelay_gte?: InputMaybe<Scalars['BigInt']>;
    oldVotingDelay_lte?: InputMaybe<Scalars['BigInt']>;
    oldVotingDelay_in?: InputMaybe<Array<Scalars['BigInt']>>;
    oldVotingDelay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newVotingDelay?: InputMaybe<Scalars['BigInt']>;
    newVotingDelay_not?: InputMaybe<Scalars['BigInt']>;
    newVotingDelay_gt?: InputMaybe<Scalars['BigInt']>;
    newVotingDelay_lt?: InputMaybe<Scalars['BigInt']>;
    newVotingDelay_gte?: InputMaybe<Scalars['BigInt']>;
    newVotingDelay_lte?: InputMaybe<Scalars['BigInt']>;
    newVotingDelay_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newVotingDelay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<VotingDelaySet_filter>>>;
    or?: InputMaybe<Array<InputMaybe<VotingDelaySet_filter>>>;
};
export type VotingDelaySet_orderBy = 'id' | 'oldVotingDelay' | 'newVotingDelay' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type VotingPeriodSet = {
    id: Scalars['Bytes'];
    oldVotingPeriod: Scalars['BigInt'];
    newVotingPeriod: Scalars['BigInt'];
    blockNumber: Scalars['BigInt'];
    blockTimestamp: Scalars['BigInt'];
    transactionHash: Scalars['Bytes'];
};
export type VotingPeriodSet_filter = {
    id?: InputMaybe<Scalars['Bytes']>;
    id_not?: InputMaybe<Scalars['Bytes']>;
    id_gt?: InputMaybe<Scalars['Bytes']>;
    id_lt?: InputMaybe<Scalars['Bytes']>;
    id_gte?: InputMaybe<Scalars['Bytes']>;
    id_lte?: InputMaybe<Scalars['Bytes']>;
    id_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    id_contains?: InputMaybe<Scalars['Bytes']>;
    id_not_contains?: InputMaybe<Scalars['Bytes']>;
    oldVotingPeriod?: InputMaybe<Scalars['BigInt']>;
    oldVotingPeriod_not?: InputMaybe<Scalars['BigInt']>;
    oldVotingPeriod_gt?: InputMaybe<Scalars['BigInt']>;
    oldVotingPeriod_lt?: InputMaybe<Scalars['BigInt']>;
    oldVotingPeriod_gte?: InputMaybe<Scalars['BigInt']>;
    oldVotingPeriod_lte?: InputMaybe<Scalars['BigInt']>;
    oldVotingPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
    oldVotingPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newVotingPeriod?: InputMaybe<Scalars['BigInt']>;
    newVotingPeriod_not?: InputMaybe<Scalars['BigInt']>;
    newVotingPeriod_gt?: InputMaybe<Scalars['BigInt']>;
    newVotingPeriod_lt?: InputMaybe<Scalars['BigInt']>;
    newVotingPeriod_gte?: InputMaybe<Scalars['BigInt']>;
    newVotingPeriod_lte?: InputMaybe<Scalars['BigInt']>;
    newVotingPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
    newVotingPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber?: InputMaybe<Scalars['BigInt']>;
    blockNumber_not?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
    blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    transactionHash?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
    transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
    transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
    transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    and?: InputMaybe<Array<InputMaybe<VotingPeriodSet_filter>>>;
    or?: InputMaybe<Array<InputMaybe<VotingPeriodSet_filter>>>;
};
export type VotingPeriodSet_orderBy = 'id' | 'oldVotingPeriod' | 'newVotingPeriod' | 'blockNumber' | 'blockTimestamp' | 'transactionHash';
export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars['Int']>;
};
/** The type for the top-level _meta field */
export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};
export type _SubgraphErrorPolicy_ = 
/** Data will be returned even if the subgraph has indexing errors */
'allow'
/** If the subgraph has indexing errors, data will be omitted. The default. */
 | 'deny';
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;
export type ResolverTypeWrapper<T> = Promise<T> | T;
export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs> | StitchingResolver<TResult, TParent, TContext, TArgs>;
export type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;
export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export type NextResolverFn<T> = () => Promise<T>;
export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
    BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
    EIP712DomainChanged: ResolverTypeWrapper<EIP712DomainChanged>;
    EIP712DomainChanged_filter: EIP712DomainChanged_filter;
    EIP712DomainChanged_orderBy: EIP712DomainChanged_orderBy;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Int8: ResolverTypeWrapper<Scalars['Int8']>;
    OrderDirection: OrderDirection;
    ProposalCanceled: ResolverTypeWrapper<ProposalCanceled>;
    ProposalCanceled_filter: ProposalCanceled_filter;
    ProposalCanceled_orderBy: ProposalCanceled_orderBy;
    ProposalCreated: ResolverTypeWrapper<ProposalCreated>;
    ProposalCreated_filter: ProposalCreated_filter;
    ProposalCreated_orderBy: ProposalCreated_orderBy;
    ProposalExecuted: ResolverTypeWrapper<ProposalExecuted>;
    ProposalExecuted_filter: ProposalExecuted_filter;
    ProposalExecuted_orderBy: ProposalExecuted_orderBy;
    ProposalThresholdSet: ResolverTypeWrapper<ProposalThresholdSet>;
    ProposalThresholdSet_filter: ProposalThresholdSet_filter;
    ProposalThresholdSet_orderBy: ProposalThresholdSet_orderBy;
    Query: ResolverTypeWrapper<{}>;
    QuorumNumeratorUpdated: ResolverTypeWrapper<QuorumNumeratorUpdated>;
    QuorumNumeratorUpdated_filter: QuorumNumeratorUpdated_filter;
    QuorumNumeratorUpdated_orderBy: QuorumNumeratorUpdated_orderBy;
    String: ResolverTypeWrapper<Scalars['String']>;
    Subscription: ResolverTypeWrapper<{}>;
    VoteCast: ResolverTypeWrapper<VoteCast>;
    VoteCastWithParams: ResolverTypeWrapper<VoteCastWithParams>;
    VoteCastWithParams_filter: VoteCastWithParams_filter;
    VoteCastWithParams_orderBy: VoteCastWithParams_orderBy;
    VoteCast_filter: VoteCast_filter;
    VoteCast_orderBy: VoteCast_orderBy;
    VotingDelaySet: ResolverTypeWrapper<VotingDelaySet>;
    VotingDelaySet_filter: VotingDelaySet_filter;
    VotingDelaySet_orderBy: VotingDelaySet_orderBy;
    VotingPeriodSet: ResolverTypeWrapper<VotingPeriodSet>;
    VotingPeriodSet_filter: VotingPeriodSet_filter;
    VotingPeriodSet_orderBy: VotingPeriodSet_orderBy;
    _Block_: ResolverTypeWrapper<_Block_>;
    _Meta_: ResolverTypeWrapper<_Meta_>;
    _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;
/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    BigDecimal: Scalars['BigDecimal'];
    BigInt: Scalars['BigInt'];
    BlockChangedFilter: BlockChangedFilter;
    Block_height: Block_height;
    Boolean: Scalars['Boolean'];
    Bytes: Scalars['Bytes'];
    EIP712DomainChanged: EIP712DomainChanged;
    EIP712DomainChanged_filter: EIP712DomainChanged_filter;
    Float: Scalars['Float'];
    ID: Scalars['ID'];
    Int: Scalars['Int'];
    Int8: Scalars['Int8'];
    ProposalCanceled: ProposalCanceled;
    ProposalCanceled_filter: ProposalCanceled_filter;
    ProposalCreated: ProposalCreated;
    ProposalCreated_filter: ProposalCreated_filter;
    ProposalExecuted: ProposalExecuted;
    ProposalExecuted_filter: ProposalExecuted_filter;
    ProposalThresholdSet: ProposalThresholdSet;
    ProposalThresholdSet_filter: ProposalThresholdSet_filter;
    Query: {};
    QuorumNumeratorUpdated: QuorumNumeratorUpdated;
    QuorumNumeratorUpdated_filter: QuorumNumeratorUpdated_filter;
    String: Scalars['String'];
    Subscription: {};
    VoteCast: VoteCast;
    VoteCastWithParams: VoteCastWithParams;
    VoteCastWithParams_filter: VoteCastWithParams_filter;
    VoteCast_filter: VoteCast_filter;
    VotingDelaySet: VotingDelaySet;
    VotingDelaySet_filter: VotingDelaySet_filter;
    VotingPeriodSet: VotingPeriodSet;
    VotingPeriodSet_filter: VotingPeriodSet_filter;
    _Block_: _Block_;
    _Meta_: _Meta_;
}>;
export type entityDirectiveArgs = {};
export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type subgraphIdDirectiveArgs = {
    id: Scalars['String'];
};
export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export type derivedFromDirectiveArgs = {
    field: Scalars['String'];
};
export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;
export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
    name: 'BigDecimal';
}
export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
    name: 'BigInt';
}
export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
    name: 'Bytes';
}
export type EIP712DomainChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EIP712DomainChanged'] = ResolversParentTypes['EIP712DomainChanged']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
    name: 'Int8';
}
export type ProposalCanceledResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalCanceled'] = ResolversParentTypes['ProposalCanceled']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    proposalId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ProposalCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalCreated'] = ResolversParentTypes['ProposalCreated']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    proposalId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    proposer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    targets?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
    values?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
    signatures?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    calldatas?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
    voteStart?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    voteEnd?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ProposalExecutedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalExecuted'] = ResolversParentTypes['ProposalExecuted']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    proposalId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type ProposalThresholdSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalThresholdSet'] = ResolversParentTypes['ProposalThresholdSet']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    oldProposalThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    newProposalThreshold?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    eip712DomainChanged?: Resolver<Maybe<ResolversTypes['EIP712DomainChanged']>, ParentType, ContextType, RequireFields<Queryeip712DomainChangedArgs, 'id' | 'subgraphError'>>;
    eip712DomainChangeds?: Resolver<Array<ResolversTypes['EIP712DomainChanged']>, ParentType, ContextType, RequireFields<Queryeip712DomainChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalCanceled?: Resolver<Maybe<ResolversTypes['ProposalCanceled']>, ParentType, ContextType, RequireFields<QueryproposalCanceledArgs, 'id' | 'subgraphError'>>;
    proposalCanceleds?: Resolver<Array<ResolversTypes['ProposalCanceled']>, ParentType, ContextType, RequireFields<QueryproposalCanceledsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalCreated?: Resolver<Maybe<ResolversTypes['ProposalCreated']>, ParentType, ContextType, RequireFields<QueryproposalCreatedArgs, 'id' | 'subgraphError'>>;
    proposalCreateds?: Resolver<Array<ResolversTypes['ProposalCreated']>, ParentType, ContextType, RequireFields<QueryproposalCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalExecuted?: Resolver<Maybe<ResolversTypes['ProposalExecuted']>, ParentType, ContextType, RequireFields<QueryproposalExecutedArgs, 'id' | 'subgraphError'>>;
    proposalExecuteds?: Resolver<Array<ResolversTypes['ProposalExecuted']>, ParentType, ContextType, RequireFields<QueryproposalExecutedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalThresholdSet?: Resolver<Maybe<ResolversTypes['ProposalThresholdSet']>, ParentType, ContextType, RequireFields<QueryproposalThresholdSetArgs, 'id' | 'subgraphError'>>;
    proposalThresholdSets?: Resolver<Array<ResolversTypes['ProposalThresholdSet']>, ParentType, ContextType, RequireFields<QueryproposalThresholdSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
    quorumNumeratorUpdated?: Resolver<Maybe<ResolversTypes['QuorumNumeratorUpdated']>, ParentType, ContextType, RequireFields<QueryquorumNumeratorUpdatedArgs, 'id' | 'subgraphError'>>;
    quorumNumeratorUpdateds?: Resolver<Array<ResolversTypes['QuorumNumeratorUpdated']>, ParentType, ContextType, RequireFields<QueryquorumNumeratorUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    voteCast?: Resolver<Maybe<ResolversTypes['VoteCast']>, ParentType, ContextType, RequireFields<QueryvoteCastArgs, 'id' | 'subgraphError'>>;
    voteCasts?: Resolver<Array<ResolversTypes['VoteCast']>, ParentType, ContextType, RequireFields<QueryvoteCastsArgs, 'skip' | 'first' | 'subgraphError'>>;
    voteCastWithParams?: Resolver<Array<ResolversTypes['VoteCastWithParams']>, ParentType, ContextType, RequireFields<QueryvoteCastWithParamsArgs, 'skip' | 'first' | 'subgraphError'>>;
    votingDelaySet?: Resolver<Maybe<ResolversTypes['VotingDelaySet']>, ParentType, ContextType, RequireFields<QueryvotingDelaySetArgs, 'id' | 'subgraphError'>>;
    votingDelaySets?: Resolver<Array<ResolversTypes['VotingDelaySet']>, ParentType, ContextType, RequireFields<QueryvotingDelaySetsArgs, 'skip' | 'first' | 'subgraphError'>>;
    votingPeriodSet?: Resolver<Maybe<ResolversTypes['VotingPeriodSet']>, ParentType, ContextType, RequireFields<QueryvotingPeriodSetArgs, 'id' | 'subgraphError'>>;
    votingPeriodSets?: Resolver<Array<ResolversTypes['VotingPeriodSet']>, ParentType, ContextType, RequireFields<QueryvotingPeriodSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;
export type QuorumNumeratorUpdatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuorumNumeratorUpdated'] = ResolversParentTypes['QuorumNumeratorUpdated']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    oldQuorumNumerator?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    newQuorumNumerator?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
    eip712DomainChanged?: SubscriptionResolver<Maybe<ResolversTypes['EIP712DomainChanged']>, "eip712DomainChanged", ParentType, ContextType, RequireFields<Subscriptioneip712DomainChangedArgs, 'id' | 'subgraphError'>>;
    eip712DomainChangeds?: SubscriptionResolver<Array<ResolversTypes['EIP712DomainChanged']>, "eip712DomainChangeds", ParentType, ContextType, RequireFields<Subscriptioneip712DomainChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalCanceled?: SubscriptionResolver<Maybe<ResolversTypes['ProposalCanceled']>, "proposalCanceled", ParentType, ContextType, RequireFields<SubscriptionproposalCanceledArgs, 'id' | 'subgraphError'>>;
    proposalCanceleds?: SubscriptionResolver<Array<ResolversTypes['ProposalCanceled']>, "proposalCanceleds", ParentType, ContextType, RequireFields<SubscriptionproposalCanceledsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalCreated?: SubscriptionResolver<Maybe<ResolversTypes['ProposalCreated']>, "proposalCreated", ParentType, ContextType, RequireFields<SubscriptionproposalCreatedArgs, 'id' | 'subgraphError'>>;
    proposalCreateds?: SubscriptionResolver<Array<ResolversTypes['ProposalCreated']>, "proposalCreateds", ParentType, ContextType, RequireFields<SubscriptionproposalCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalExecuted?: SubscriptionResolver<Maybe<ResolversTypes['ProposalExecuted']>, "proposalExecuted", ParentType, ContextType, RequireFields<SubscriptionproposalExecutedArgs, 'id' | 'subgraphError'>>;
    proposalExecuteds?: SubscriptionResolver<Array<ResolversTypes['ProposalExecuted']>, "proposalExecuteds", ParentType, ContextType, RequireFields<SubscriptionproposalExecutedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    proposalThresholdSet?: SubscriptionResolver<Maybe<ResolversTypes['ProposalThresholdSet']>, "proposalThresholdSet", ParentType, ContextType, RequireFields<SubscriptionproposalThresholdSetArgs, 'id' | 'subgraphError'>>;
    proposalThresholdSets?: SubscriptionResolver<Array<ResolversTypes['ProposalThresholdSet']>, "proposalThresholdSets", ParentType, ContextType, RequireFields<SubscriptionproposalThresholdSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
    quorumNumeratorUpdated?: SubscriptionResolver<Maybe<ResolversTypes['QuorumNumeratorUpdated']>, "quorumNumeratorUpdated", ParentType, ContextType, RequireFields<SubscriptionquorumNumeratorUpdatedArgs, 'id' | 'subgraphError'>>;
    quorumNumeratorUpdateds?: SubscriptionResolver<Array<ResolversTypes['QuorumNumeratorUpdated']>, "quorumNumeratorUpdateds", ParentType, ContextType, RequireFields<SubscriptionquorumNumeratorUpdatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
    voteCast?: SubscriptionResolver<Maybe<ResolversTypes['VoteCast']>, "voteCast", ParentType, ContextType, RequireFields<SubscriptionvoteCastArgs, 'id' | 'subgraphError'>>;
    voteCasts?: SubscriptionResolver<Array<ResolversTypes['VoteCast']>, "voteCasts", ParentType, ContextType, RequireFields<SubscriptionvoteCastsArgs, 'skip' | 'first' | 'subgraphError'>>;
    voteCastWithParams?: SubscriptionResolver<Array<ResolversTypes['VoteCastWithParams']>, "voteCastWithParams", ParentType, ContextType, RequireFields<SubscriptionvoteCastWithParamsArgs, 'skip' | 'first' | 'subgraphError'>>;
    votingDelaySet?: SubscriptionResolver<Maybe<ResolversTypes['VotingDelaySet']>, "votingDelaySet", ParentType, ContextType, RequireFields<SubscriptionvotingDelaySetArgs, 'id' | 'subgraphError'>>;
    votingDelaySets?: SubscriptionResolver<Array<ResolversTypes['VotingDelaySet']>, "votingDelaySets", ParentType, ContextType, RequireFields<SubscriptionvotingDelaySetsArgs, 'skip' | 'first' | 'subgraphError'>>;
    votingPeriodSet?: SubscriptionResolver<Maybe<ResolversTypes['VotingPeriodSet']>, "votingPeriodSet", ParentType, ContextType, RequireFields<SubscriptionvotingPeriodSetArgs, 'id' | 'subgraphError'>>;
    votingPeriodSets?: SubscriptionResolver<Array<ResolversTypes['VotingPeriodSet']>, "votingPeriodSets", ParentType, ContextType, RequireFields<SubscriptionvotingPeriodSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
    _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;
export type VoteCastResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VoteCast'] = ResolversParentTypes['VoteCast']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    voter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    proposalId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    support?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    weight?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type VoteCastWithParamsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VoteCastWithParams'] = ResolversParentTypes['VoteCastWithParams']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    voter?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    proposalId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    support?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    weight?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    params?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type VotingDelaySetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VotingDelaySet'] = ResolversParentTypes['VotingDelaySet']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    oldVotingDelay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    newVotingDelay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type VotingPeriodSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VotingPeriodSet'] = ResolversParentTypes['VotingPeriodSet']> = ResolversObject<{
    id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    oldVotingPeriod?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    newVotingPeriod?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
    transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
    hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
    number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
    block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
    deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export type Resolvers<ContextType = MeshContext> = ResolversObject<{
    BigDecimal?: GraphQLScalarType;
    BigInt?: GraphQLScalarType;
    Bytes?: GraphQLScalarType;
    EIP712DomainChanged?: EIP712DomainChangedResolvers<ContextType>;
    Int8?: GraphQLScalarType;
    ProposalCanceled?: ProposalCanceledResolvers<ContextType>;
    ProposalCreated?: ProposalCreatedResolvers<ContextType>;
    ProposalExecuted?: ProposalExecutedResolvers<ContextType>;
    ProposalThresholdSet?: ProposalThresholdSetResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    QuorumNumeratorUpdated?: QuorumNumeratorUpdatedResolvers<ContextType>;
    Subscription?: SubscriptionResolvers<ContextType>;
    VoteCast?: VoteCastResolvers<ContextType>;
    VoteCastWithParams?: VoteCastWithParamsResolvers<ContextType>;
    VotingDelaySet?: VotingDelaySetResolvers<ContextType>;
    VotingPeriodSet?: VotingPeriodSetResolvers<ContextType>;
    _Block_?: _Block_Resolvers<ContextType>;
    _Meta_?: _Meta_Resolvers<ContextType>;
}>;
export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
    entity?: entityDirectiveResolver<any, any, ContextType>;
    subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
    derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;
export type MeshContext = ZkvoitingPeerupTypes.Context & BaseMeshContext;
export declare const rawServeConfig: YamlConfig.Config['serve'];
export declare function getMeshOptions(): Promise<GetMeshOptions>;
export declare function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext>;
export declare function getBuiltGraphClient(): Promise<MeshInstance>;
export declare const execute: ExecuteMeshFn;
export declare const subscribe: SubscribeMeshFn;
export declare function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext): {
    proposals(variables?: Exact<{
        [key: string]: never;
    }>, options?: TOperationContext): Promise<proposalsQuery>;
    votes(variables?: Exact<{
        [key: string]: never;
    }>, options?: TOperationContext): Promise<votesQuery>;
    votesByProposal(variables: Exact<{
        proposalId: any;
    }>, options?: TOperationContext): Promise<votesByProposalQuery>;
    proposalById(variables: Exact<{
        proposalId: any;
    }>, options?: TOperationContext): Promise<proposalByIdQuery>;
};
export type proposalsQueryVariables = Exact<{
    [key: string]: never;
}>;
export type proposalsQuery = {
    proposalCreateds: Array<Pick<ProposalCreated, 'id' | 'description' | 'transactionHash' | 'voteEnd' | 'voteStart' | 'proposer' | 'proposalId'>>;
};
export type votesQueryVariables = Exact<{
    [key: string]: never;
}>;
export type votesQuery = {
    voteCasts: Array<Pick<VoteCast, 'proposalId' | 'transactionHash' | 'id' | 'voter'>>;
};
export type votesByProposalQueryVariables = Exact<{
    proposalId: Scalars['BigInt'];
}>;
export type votesByProposalQuery = {
    voteCasts: Array<Pick<VoteCast, 'proposalId' | 'transactionHash' | 'id' | 'voter' | 'reason' | 'support' | 'weight' | 'blockNumber' | 'blockTimestamp'>>;
};
export type proposalByIdQueryVariables = Exact<{
    proposalId: Scalars['BigInt'];
}>;
export type proposalByIdQuery = {
    proposalCreateds: Array<Pick<ProposalCreated, 'id' | 'description' | 'transactionHash' | 'voteEnd' | 'voteStart' | 'proposer' | 'proposalId'>>;
};
export declare const proposalsDocument: DocumentNode<proposalsQuery, Exact<{
    [key: string]: never;
}>>;
export declare const votesDocument: DocumentNode<votesQuery, Exact<{
    [key: string]: never;
}>>;
export declare const votesByProposalDocument: DocumentNode<votesByProposalQuery, Exact<{
    proposalId: Scalars['BigInt'];
}>>;
export declare const proposalByIdDocument: DocumentNode<proposalByIdQuery, Exact<{
    proposalId: Scalars['BigInt'];
}>>;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>;
export declare function getSdk<C, E>(requester: Requester<C, E>): {
    proposals(variables?: proposalsQueryVariables, options?: C): Promise<proposalsQuery>;
    votes(variables?: votesQueryVariables, options?: C): Promise<votesQuery>;
    votesByProposal(variables: votesByProposalQueryVariables, options?: C): Promise<votesByProposalQuery>;
    proposalById(variables: proposalByIdQueryVariables, options?: C): Promise<proposalByIdQuery>;
};
export type Sdk = ReturnType<typeof getSdk>;
