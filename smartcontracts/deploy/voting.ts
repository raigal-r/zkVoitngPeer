import { Wallet, utils, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  
  const wallet1 = new Wallet("a41026684b0d1b5616ae4cbb3f386c17ee23457c9d1bee3b4d6c64dbbf83b8c1").connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingToken = await hre.artifacts.readArtifact("PeerVoteToken");
  const deployVotingTokenArtifact = await deployer.loadArtifact("PeerVoteToken");
  const deployGovernorArtifact = await deployer.loadArtifact("PeerGovernor");
  
  // deploy contract
 // const votingTokenContract = await deployer.deploy(deployVotingTokenArtifact,[]);

  //console.log(`// VotingToken contract address ${votingTokenContract.address}`)
  
  const governorContract = await deployer.deploy(deployGovernorArtifact,["0x7b6ae3E78182A1D7fC7c9Ccc36177e00494511cc", 1500000]);

  console.log(`// VotingToken contract address ${governorContract.address}`)
}