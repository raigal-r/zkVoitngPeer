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

  const GovernorReadArtifact = await deployer.loadArtifact("PeerGovernor");
  console.log("deploying governor");
  const governorContract = await deployer.deploy(GovernorReadArtifact, [
    "0x0a7623ad8f66183da9aDa123F06e8397932a7631",
    7200 /* 1 day */,
    50400 /* 1 week */,
    0,
  ]);

  console.log(`// governor contract address ${governorContract.address}`);

  const votingokenInterface = new ethers.utils.Interface(
    VotingTokenReadArtifact.abi
  );

  const teamAddress = wallet1.address;
  const grantAmount = 420;
  const transferCalldata = votingokenInterface.encodeFunctionData("transfer", [
    teamAddress,
    grantAmount,
  ]);

  const governor = new ethers.Contract(
    governorContract.address,
    GovernorReadArtifact.abi,
    wallet1
  ) as Governor;

  const proposalTx = await governor.propose(
    ["0x2AE8a8abc98d5b714608225Bac7c68Bc75cDec38"],
    [0],
    [transferCalldata],
    "funding for Barcelona public gardens"
  );

  const proposalReceipt = await proposalTx.wait();

  // get emmited event
  console.log(
    proposalReceipt.events?.map((e) => ({
      name: e.event,
      args: e.args?.map((a) => a.toString()),
    }))
  );

  const proposalId = proposalReceipt.events
    ?.find((e) => e.event === "ProposalCreated")
    ?.args?.[0].toString();
  console.log(`Proposal id: ${proposalId}`);
}
