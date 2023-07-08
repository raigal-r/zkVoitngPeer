import { Wallet, utils, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  
  const wallet1 = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact("PeerVoteToken");
  const GovernorReadArtifact = await hre.artifacts.readArtifact("PeerGovernor");
  
  // deploy contract
//   const votingTokenContract = await deployer.deploy(deployVotingTokenArtifact,[]);

//   console.log(`// VotingToken contract address ${votingTokenContract.address}`)
  
//   const governorContract = await deployer.deploy(deployGovernorArtifact,[votingTokenContract.address]);

//   console.log(`// VotingToken contract address ${governorContract.address}`)

  const votingokenInterface = new ethers.utils.Interface(VotingTokenReadArtifact.abi);

  const teamAddress = wallet1.address;
  const grantAmount = 101;
  const transferCalldata = votingokenInterface.encodeFunctionData("transfer", [teamAddress, grantAmount]);

  const governor = new ethers.Contract(
    "0xe9567E29E59F103Bd89c40DDB1E95603231bed6b",
    GovernorReadArtifact.abi,
    wallet1
  );

  await governor.propose(
    ["0x2AE8a8abc98d5b714608225Bac7c68Bc75cDec38"],
    [0],
    [transferCalldata],
    "funding for Barcelona public gardens",
  );
}