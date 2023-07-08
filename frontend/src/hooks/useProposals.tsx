import { useQuery } from "@tanstack/react-query";
import { getBuiltGraphSDK } from "../../.graphclient";

export const useProposals = () => {
  return useQuery({
    queryKey: ["proposals"],
    queryFn: async () => {
      const client = await getBuiltGraphSDK();
      return await client.proposals();
    },
  });
};
