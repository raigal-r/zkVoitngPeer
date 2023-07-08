import { Wallet, Provider } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { PeerVoteToken } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");

  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );

  const GovernorReadArtifact = await deployer.loadArtifact("PeerGovernorV2");
  console.log("deploying governor");
  const governorContract = await deployer.deploy(GovernorReadArtifact, [
    "0xB8f59AF10d8C66b92d0539C898854040147f8cFf",
  ]);

  console.log(`// governor contract address ${governorContract.address}`);
}
