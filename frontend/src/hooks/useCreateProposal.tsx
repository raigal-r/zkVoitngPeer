import { useEthersSigner } from "../useEthersSigner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ERC20__factory, Governor__factory } from "../types";
import { Address } from "viem";
import { BigNumber } from "ethers";

const PROPOSAL_DATA = {
  values: [0],
  targets: ["0xB8f59AF10d8C66b92d0539C898854040147f8cFf"],
};

export const useCreateProposal = () => {
  const signer = useEthersSigner();

  return useMutation({
    mutationKey: ["createProposal"],
    mutationFn: async (variables: {
      description: string;
      recipient: Address;
      amount: BigNumber;
    }) => {
      const governor = Governor__factory.connect(
        "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
        signer
      );
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
      const governor = Governor__factory.connect(
        "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
        signer
      );
      const state = await governor.state(props.proposalId);
      return ProposalStatusMap[state as ProposalStatus];
    },
  });
};

export const useCastVote = () => {
  const signer = useEthersSigner();
  return useMutation({
    mutationFn: async (props: { proposalId: string; vote: number }) => {
      const governor = Governor__factory.connect(
        "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
        signer
      );
      const tx = await governor.castVote(props.proposalId, props.vote);
      const receipt = await tx.wait(2);
      return receipt;
    },
  });
};
