import { useQuery } from "@tanstack/react-query";
import { getBuiltGraphSDK } from "../../.graphclient";

const sdk = getBuiltGraphSDK();

export const useProposals = () => {
  return useQuery({
    queryKey: ["proposals"],
    queryFn: async () => sdk.proposals(),
  });
};
