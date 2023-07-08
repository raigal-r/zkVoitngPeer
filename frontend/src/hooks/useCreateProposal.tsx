import { useEthersSigner } from "../useEthersSigner";
import { useMutation } from "@tanstack/react-query";
import { Governor__factory } from "../types";

const PROPOSALS = {
  VoteForSendingMoney: {
    values: [],
    calldatas: [],
    targets: [],
  },
};

export type ProposalType = keyof typeof PROPOSALS;

export const useCreateProposal = () => {
  const signer = useEthersSigner();

  return useMutation({
    mutationKey: ["createProposal"],
    mutationFn: async (variables: {
      proposalType: ProposalType;
      description: string;
    }) => {
      const governor = Governor__factory.connect(
        "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
        signer
      );
      const proposal = PROPOSALS[variables.proposalType];
      const tx = await governor.propose(
        proposal.targets,
        proposal.values,
        proposal.calldatas,
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
