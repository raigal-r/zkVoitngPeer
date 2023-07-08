import { Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Governor, PeerVoteToken } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  const GovernorReadArtifact = await hre.artifacts.readArtifact(
    "PeerGovernorV2"
  );
  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const governor = new ethers.Contract(
    "0xb9DD4F87d26F67F2c7072A04542627D7f2a4141A",
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
    ["0x8cb32fDD98D0B36cD9Db039DC0D8723BD52C053e"],
    [0],
    [transferCalldata],
    "funding for Barcelona public gardens"
  );

  const proposalReceipt = await proposalTx.wait(1);
  console.log(`proposal receipt: ${proposalReceipt.blockNumber}`);

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
