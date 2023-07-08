import { Wallet, utils, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Governor } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");

  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );
  const GovernorReadArtifact = await hre.artifacts.readArtifact("PeerGovernor");

  const governor = new ethers.Contract(
    "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
    GovernorReadArtifact.abi,
    wallet1
  ) as Governor;

  const proposalTx = await governor.castVote(
    ethers.BigNumber.from("79962949918601016327557759576923146270178233114978289851025418173003015207999"),
    1
  );

  const proposalReceipt = await proposalTx.wait();

  // get emmited event
  console.log(
    proposalReceipt.events?.map((e) => ({
      name: e.event,
      args: e.args?.map((a) => a.toString()),
    }))
  );
}
