import { useState, useEffect } from "react";
import { Provider, Signer, Wallet } from "zksync-web3";
import { useEthersProvider } from "./useEthersProvider";
import { useEthersSigner } from "../useEthersSigner";
import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { APP_MODALS_ID } from "../features/modals/useModalStore";
import { del, get, set } from "idb-keyval";
import {
  createJSONStorage,
  devtools,
  persist,
  StateStorage,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Web3State = {
  isLoading: boolean;
  error?: Error;
  signer?: Signer;
  provider?: Provider;
};

/**
 * Create random wallet and store private key in local storage.
 * onload read private key from local storage and create wallet. if no private key in local storage, create random wallet.
 */
export function useZkSyncAccount() {
  return useQuery({
    queryKey: ["useZkSyncAccount"],
    queryFn: async () => {
      const provider = new Provider("https://testnet.era.zksync.dev");
      const emptyWallet = Wallet.createRandom().connect(provider);
      return emptyWallet;
    },
  });
}

export interface IPrivateKeyStore {
  setKey: (key: string) => void;
  getKey: () => string | null;
  clearKey: () => void;
  key?: string;
}

export const usePrivatKeyStore = create<IPrivateKeyStore>()(
  devtools(
    persist(
      immer((set) => ({
        key: undefined,
        setKey: (key) => {
          set((state) => {
            state.key = key;
          });
        },
        getKey: () => {
          return localStorage.getItem("privateKey");
        },
        clearKey: () => {
          localStorage.removeItem("privateKey");
        },
      })),
      {
        name: "privateKey",
        storage: createJSONStorage(() => IDBStorage),
      }
    )
  )
);

export const IDBStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};
