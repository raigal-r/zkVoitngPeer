import { utils } from "zksync-web3";
import { useEthersSigner } from "../useEthersSigner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ERC20__factory } from "../types";
import { Address } from "viem";
import { BigNumber } from "ethers";
import { useZkSyncAccount } from "./useZkSyncAccount";
import { toast } from "react-toastify";
import { getBuiltGraphSDK } from "../../.graphclient";
import { useQueryClient } from "wagmi";
import { PeerGovernorV2__factory } from "../types/types";

const PROPOSAL_DATA = {
  values: [0],
};

export const GOVERNOR_ADDRESS = "0xb9DD4F87d26F67F2c7072A04542627D7f2a4141A";
export const PAYMASTER_ADDRESS = "0x57525f9A9f19960F4c531b8cB6a60cce6cfe7638";

export const useCreateProposal = () => {
  const signer = useEthersSigner();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createProposal"],
    onSettled: () => queryClient.invalidateQueries(),
    mutationFn: async (variables: {
      description: string;
      recipient: Address;
      amount: BigNumber;
      erc20Address: Address;
    }) => {
      if (!signer) throw new Error("No signer");
      const governor = PeerGovernorV2__factory.connect(
        GOVERNOR_ADDRESS,
        signer
      );
      const transferCalldata =
        ERC20__factory.createInterface().encodeFunctionData("transfer", [
          variables.recipient,
          variables.amount,
        ]);
      const tx = await governor.propose(
        [variables.erc20Address],
        PROPOSAL_DATA.values,
        [transferCalldata],
        variables.description
      );
      toast.info(
        <div>
          Transaction sent, waiting for confirmation...
          <a
            href={`https://zksync2-testnet.zkscan.io/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on explorer
          </a>
        </div>
      );
      const receipt = await tx.wait(2);
      const proposalId = receipt.events?.find(
        (event) => event.event === "ProposalCreated"
      )?.args?.id;
      if (!proposalId) {
        throw new Error("No proposal id found");
      }
      return proposalId;
    },
  });
};

export const ProposalStatusMap = {
  0: "Pending",
  1: "Active",
  2: "Canceled",
  3: "Defeated",
  4: "Succeeded",
  5: "Queued",
  6: "Expired",
  7: "Executed",
};

export type ProposalStatus = keyof typeof ProposalStatusMap;

export const useGetProposalState = (props: { proposalId: string }) => {
  const signer = useEthersSigner();
  return useQuery({
    queryKey: ["proposalState", props.proposalId],
    enabled: !!props.proposalId,
    queryFn: async () => {
      if (!signer) throw new Error("No signer");
      const governor = PeerGovernorV2__factory.connect(
        GOVERNOR_ADDRESS,
        signer
      );
      const state = await governor.state(props.proposalId);
      return ProposalStatusMap[state as ProposalStatus];
    },
  });
};

// 0 = no ?
// 1 = yes ?
export const useCastVote = () => {
  const signer = useEthersSigner();
  const queryClient = useQueryClient();
  return useMutation({
    onSettled: () => queryClient.invalidateQueries(),
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      if (!signer) throw new Error("No signer");
      const governor = PeerGovernorV2__factory.connect(
        GOVERNOR_ADDRESS,
        signer
      );
      const tx = await governor.castVote(props.proposalId, props.vote);
      const receipt = await tx.wait(2);
      return receipt;
    },
  });
};

export const useCastVotePaymasterWallet = () => {
  const signer = useEthersSigner();
  const queryClient = useQueryClient();
  return useMutation({
    onSettled: () => queryClient.invalidateQueries(),
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      if (!signer) throw new Error("No signer");
      const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
        type: "General",
        innerInput: new Uint8Array(),
      });
      const governor = PeerGovernorV2__factory.connect(
        GOVERNOR_ADDRESS,
        signer
      );

      const proposalReceipt = await (
        await governor.castVote(props.proposalId, props.vote, {
          // paymaster info
          customData: {
            paymasterParams: paymasterParams,
            gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          },
        })
      ).wait();

      // get emmited event
      console.log(
        proposalReceipt.events?.map((e) => ({
          name: e.event,
          args: e.args?.map((a) => a.toString()),
        }))
      );
    },
  });
};

export const useCastVotePaymaster = () => {
  const { data: signer } = useZkSyncAccount();
  const queryClient = useQueryClient();
  return useMutation({
    onSettled: () => queryClient.invalidateQueries(),
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      if (!signer) throw new Error("No signer");
      toast.info("Waiting for zkSync transaction to be mined");
      const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
        type: "General",
        innerInput: new Uint8Array(),
      });

      const governor = PeerGovernorV2__factory.connect(
        GOVERNOR_ADDRESS,
        signer
      );

      const proposalReceipt = await (
        await governor.castVote(props.proposalId, props.vote, {
          // paymaster info
          customData: {
            paymasterParams: paymasterParams,
            gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          },
        })
      ).wait(2);

      console.log(`Transaction hash: ${proposalReceipt.transactionHash}`);
      // get emmited event
      console.log(
        proposalReceipt.events?.map((e) => ({
          name: e.event,
          args: e.args?.map((a) => a.toString()),
        }))
      );
      // add link to https://zksync2-testnet.zkscan.io/tx/
      toast.success(
        <a
          href={`https://zksync2-testnet.zkscan.io/tx/${proposalReceipt.transactionHash}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Transaction hash: {proposalReceipt.transactionHash}
        </a>
      );
    },
  });
};

export const useGetVotes = (props: { proposalId: string }) => {
  return useQuery({
    queryKey: ["getVotes", props.proposalId],
    enabled: !!props.proposalId,
    queryFn: async () => {
      const client = await getBuiltGraphSDK();
      const votes = await client.votesByProposal({
        proposalId: props.proposalId,
      });
      let yes = 0;
      let no = 0;
      votes.voteCasts.forEach((vote) => {
        if (vote.support === 1) {
          yes += 1;
        } else {
          no += 1;
        }
      });
      return { yes, no, votes: votes.voteCasts };
    },
  });
};

export const useGetProposal = (props: { proposalId: string }) => {
  return useQuery({
    queryKey: ["getProposal", props.proposalId],
    enabled: !!props.proposalId,
    queryFn: async () => {
      const client = await getBuiltGraphSDK();
      return await client.proposalById({
        proposalId: props.proposalId,
      });
    },
  });
};
