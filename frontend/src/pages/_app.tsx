import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { zkSync } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { zkSyncTestnet } from "viem/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { chains, publicClient } = configureChains(
  [zkSync, zkSyncTestnet],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "PeerVote",
  projectId: "b769195d525fcd74f9ac88723ad1b8c5",
  chains,
});

const queryClient = new QueryClient();
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  queryClient,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
