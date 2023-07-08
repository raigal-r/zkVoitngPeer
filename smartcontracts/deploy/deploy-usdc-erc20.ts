import { Wallet, Provider } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");

  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingToken = await hre.artifacts.readArtifact("PeerUSDC");
  const deployVotingTokenArtifact = await deployer.loadArtifact("PeerUSDC");
  const deployGovernorArtifact = await deployer.loadArtifact("PeerGovernor");

  // deploy contract
  const votingTokenContract = await deployer.deploy(
    deployVotingTokenArtifact,
    []
  );

  console.log(`// USDC contract address ${votingTokenContract.address}`);
}
