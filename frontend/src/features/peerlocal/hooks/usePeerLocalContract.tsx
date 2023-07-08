import { useMutation } from "@tanstack/react-query";
import { useNetwork } from "wagmi";
import { PeerLocal__factory } from "../../../typechain";
import { Network, PeerLocalConfig } from "../config";

const getPeerLocal = (props: { network: Network; signer: Signer }) => {
  const address = PeerLocalConfig[props.network].peerlocal.address;
  if (!address)
    throw new Error("getPeerLocal contract not deployed on this network");
  return PeerLocal__factory.connect(address, props.signer);
};

export const usePeerLocalContract = () => {
  const network = useNetwork();
  const signer = useSigner();
  const createCommunity = useMutation({
    mutationFn: async (variables: {
      ipfs: string;
      stakingToken: string;
      stakingReq: number;
    }) => {
      if (!signer.data || !network.chain?.id) return null;
      const peerLocal = getPeerLocal({
        network: network.chain?.id as Network,
        signer: signer.data,
      });
      return await peerLocal.createCommunity(
        variables.ipfs,
        variables.stakingToken,
        variables.stakingReq
      );
    },
  });
  const joinCommunity = useMutation({
    mutationFn: async (variables: {
      communityId: string;
      ownerSignature: string;
    }) => {
      if (!signer.data || !network.chain?.id) return null;
      const peerLocal = getPeerLocal({
        network: network.chain?.id as Network,
        signer: signer.data,
      });
      return await peerLocal.joinCommunity(
        variables.communityId,
        variables.ownerSignature
      );
    },
  });
  const createOffer = useMutation({
    mutationFn: async (variables: {
      communityId: string;
      metadata: string;
      reputationReq: number;
      stakingReq: number;
    }) => {
      if (!signer.data || !network.chain?.id) return null;
      const peerLocal = getPeerLocal({
        network: network.chain?.id as Network,
        signer: signer.data,
      });
      return await peerLocal.createOffer(
        variables.communityId,
        variables.metadata,
        variables.reputationReq,
        variables.stakingReq
      );
    },
  });
  const acceptOffer = useMutation({
    mutationFn: async (variables: { communityId: string; offerId: string }) => {
      if (!signer.data || !network.chain?.id) return null;
      const peerLocal = getPeerLocal({
        network: network.chain?.id as Network,
        signer: signer.data,
      });
      const tx = await peerLocal.acceptOffer(
        variables.communityId,
        variables.offerId
      );
      return tx.wait();
    },
  });
  const endOffer = useMutation({
    mutationFn: async (variables: {
      communityId: string;
      offerId: string;
      result: boolean;
    }) => {
      if (!signer.data || !network.chain?.id) return null;
      const peerLocal = getPeerLocal({
        network: network.chain?.id as Network,
        signer: signer.data,
      });
      return await peerLocal.endOffer(
        variables.communityId,
        variables.offerId,
        variables.result
      );
    },
  });
  return {
    createCommunity,
    joinCommunity,
    createOffer,
    acceptOffer,
    endOffer,
  };
};
