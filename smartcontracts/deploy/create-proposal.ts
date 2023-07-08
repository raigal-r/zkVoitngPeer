import { Wallet, utils, Provider, EIP712Signer, types } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import {PeerGovernor} from 'contracts/PeerGovernor.sol'

const provider = new ethers.providers.JsonRpcProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID'); // Replace with your Ethereum network provider
const signer = provider.getSigner();
const governorAddress = '0xGOVERNOR_ADDRESS'; // Replace with the address of the deployed PeerGovernor contract
const governorContract = new ethers.Contract(governorAddress, PeerGovernor.abi, signer);

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  
  const wallet1 = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingToken = await hre.artifacts.readArtifact("PeerVoteToken");
  const deployVotingTokenArtifact = await deployer.loadArtifact("PeerVoteToken");
  const deployGovernorArtifact = await deployer.loadArtifact("PeerGovernor");
  
  // deploy contract
  const votingTokenContract = await deployer.deploy(deployVotingTokenArtifact,[]);

  console.log(`// VotingToken contract address ${votingTokenContract.address}`)
  
  const governorContract = await deployer.deploy(deployGovernorArtifact,[votingTokenContract.address]);

  console.log(`// VotingToken contract address ${governorContract.address}`)

  const token = await ethers.getContractAt(‘ERC20’, tokenAddress);

  const teamAddress = wallet1.address;
  const grantAmount = 101;
  const transferCalldata = VotingToken.interface.encodeFunctionData("transfer", [teamAddress, grantAmount]);

  await governor.propose(
    [tokenAddress],
    [0],
    [transferCalldata],
    “Proposal #1: Give grant to team”,
  );
}