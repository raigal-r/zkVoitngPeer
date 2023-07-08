import { Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Governor, PeerVoteToken } from "../src/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";


export default async function (hre: HardhatRuntimeEnvironment) {

  const provider = new Provider("https://testnet.era.zksync.dev");
  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const deployer = new Deployer(hre, wallet1);
  const GovernorReadArtifact = await deployer.loadArtifact("PeerGovernor");
  const governor = new ethers.Contract(
    "0x706A580Ae7f0F3F5069384f1132b25e1D7090ac5",
    GovernorReadArtifact.abi,
    wallet1
  ) as Governor;

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );

  const votingokenInterface = new ethers.utils.Interface(
    VotingTokenReadArtifact.abi
  );

  const teamAddress = wallet1.address;
  const grantAmount = 666;
  const transferCalldata = votingokenInterface.encodeFunctionData("transfer", [
    teamAddress,
    grantAmount,
  ]);

  const proposalTx = await governor.propose(
    ["0xF8FaF235017Ddb79cd511aB65C8624b34D6d3CB7"],
    [0],
    [transferCalldata],
    "funding for Barcelona public gardens"
  );

  const proposalReceipt = await proposalTx.wait(5);

  //console.log(`proposal receipt: ${proposalReceipt.blockNumber}`);
  console.log("ProposalReceipt:", proposalReceipt)


  // get emitted event
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
