import { Wallet, Provider } from "zksync-web3";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
//import { PeerVoteToken } from "../src/types";
import { ethers } from "ethers";
import { Overrides, PayableOverrides } from "ethers";
import { PeerGovernor, PeerVoteToken, TimelockController } from "../src/types";


export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");

  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const deployer = new Deployer(hre, wallet1);

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );

  const TimelockControllerArtifact = await deployer.loadArtifact(
    "TimelockController"
  );

  const timelockControllerContract = await deployer.deploy(
    TimelockControllerArtifact,
    [10, [], [], ethers.constants.AddressZero], // Provide the constructor arguments here
    {
      gasLimit: ethers.utils.hexlify(2000000),
    } // Specify the gas limit value
  );

  console.log(timelockControllerContract.address.toString())

  // Access the address of the deployed TimelockController contract
  const timelockAddress = timelockControllerContract.address;
  console.log("deploying governor");

  const GovernorArtifact = await deployer.loadArtifact("PeerGovernor");


  const governorContract = await deployer.deploy(
    GovernorArtifact,
    ["0x69cbD1116d6d12D572Ef0E6A80465f46cce61F08", // Replace `PeerVoteToken` with the actual token contract address
    timelockControllerContract.address.toString()],
    // {
    //   gasLimit: ethers.utils.hexlify(2000000),
    // }
  );

 // Retrieve the deployed governor contract address
 //await governorContract.deployed();
 const governorAddress = governorContract.address;
 console.log(`Governor contract address: ${governorAddress}`);

}
