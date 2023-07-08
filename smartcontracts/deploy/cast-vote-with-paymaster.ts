import { Wallet, utils, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Governor } from "../src/types";

const PAYMASTER_ADDRESS = "0xfcd8BCbac5c048878f83Cd5590c32b684515761F";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");

  // The wallet that will receive ERC20 tokens
  const emptyWallet = Wallet.createRandom().connect(provider);
  console.log(`Empty wallet's address: ${emptyWallet.address}`);

  let paymasterBalance = await provider.getBalance(PAYMASTER_ADDRESS);
  console.log(`Paymaster ETH balance is ${paymasterBalance.toString()}`);

   // Encoding the "ApprovalBased" paymaster flow's input
   const paymasterParams = utils.getPaymasterParams(PAYMASTER_ADDRESS, {
     type: "General",
     innerInput: new Uint8Array(),
   });

  const GovernorReadArtifact = hre.artifacts.readArtifactSync("PeerGovernor");

  const governor = new ethers.Contract(
    "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
    GovernorReadArtifact.abi,
    emptyWallet
  ) as Governor;

  const proposalReceipt = await (
    await governor.castVote(
      ethers.BigNumber.from("79962949918601016327557759576923146270178233114978289851025418173003015207999"),
      1,
      {
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
}
