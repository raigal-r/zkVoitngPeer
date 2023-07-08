import { Provider, utils, Wallet, Signer, L1Signer } from "zksync-web3";
import { useEthersSigner } from "../useEthersSigner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ERC20__factory, Governor__factory } from "../types";
import { Address } from "viem";
import { BigNumber, ethers } from "ethers";
import { useZkSyncAccount } from "./useZkSyncAccount";
import { toast } from "react-toastify";

const PROPOSAL_DATA = {
  values: [0],
  targets: ["0xB8f59AF10d8C66b92d0539C898854040147f8cFf"],
};

export const GOVERNOR_ADDRESS = "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b";
export const PAYMASTER_ADDRESS = "0xfcd8BCbac5c048878f83Cd5590c32b684515761F";

export const useCreateProposal = () => {
  const signer = useEthersSigner();

  return useMutation({
    mutationKey: ["createProposal"],
    mutationFn: async (variables: {
      description: string;
      recipient: Address;
      amount: BigNumber;
    }) => {
      const governor = Governor__factory.connect(GOVERNOR_ADDRESS, signer);
      const transferCalldata =
        ERC20__factory.createInterface().encodeFunctionData("transfer", [
          variables.recipient,
          variables.amount,
        ]);
      const tx = await governor.propose(
        PROPOSAL_DATA.targets,
        PROPOSAL_DATA.values,
        [transferCalldata],
        variables.description
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
    queryFn: async () => {
      const governor = Governor__factory.connect(GOVERNOR_ADDRESS, signer);
      const state = await governor.state(props.proposalId);
      return ProposalStatusMap[state as ProposalStatus];
    },
  });
};

// 0 = no ?
// 1 = yes ?
export const useCastVote = () => {
  const signer = useEthersSigner();
  return useMutation({
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      const governor = Governor__factory.connect(GOVERNOR_ADDRESS, signer);
      const tx = await governor.castVote(props.proposalId, props.vote);
      const receipt = await tx.wait(2);
      return receipt;
    },
  });
};

export const useCastVotePaymaster = () => {
  const signer = useEthersSigner();
  return useMutation({
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
        type: "General",
        innerInput: new Uint8Array(),
      });
      const governor = Governor__factory.connect(GOVERNOR_ADDRESS, signer);

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

export const useCreateProposalPaymaster = () => {
  const signer = useEthersSigner();

  return useMutation({
    mutationKey: ["createProposal"],
    mutationFn: async (variables: {
      description: string;
      recipient: Address;
      amount: BigNumber;
    }) => {
      const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
        type: "General",
        innerInput: new Uint8Array(),
      });
      const governor = Governor__factory.connect(GOVERNOR_ADDRESS, signer);
      const transferCalldata =
        ERC20__factory.createInterface().encodeFunctionData("transfer", [
          variables.recipient,
          variables.amount,
        ]);
      const tx = await governor.propose(
        PROPOSAL_DATA.targets,
        PROPOSAL_DATA.values,
        [transferCalldata],
        variables.description,
        // paymaster info
        {
          customData: {
            paymasterParams: paymasterParams,
            gasPerPubdata: utils.DEFAULT_GAS_PER_PUBDATA_LIMIT,
          },
        }
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

export const useCastVotePaymaster2 = () => {
  const { data: signer } = useZkSyncAccount();
  return useMutation({
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      toast.info("Waiting for zkSync transaction to be mined");
      const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
        type: "General",
        innerInput: new Uint8Array(),
      });

      const governor = Governor__factory.connect(GOVERNOR_ADDRESS, signer);

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
