import { Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Governor, PeerVoteToken } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  const GovernorReadArtifact = await hre.artifacts.readArtifact("PeerGovernor");
  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c"
  ).connect(provider);
  const governor = new ethers.Contract(
    "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
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
    ["0xB8f59AF10d8C66b92d0539C898854040147f8cFf"],
    [0],
    [transferCalldata],
    "funding for Barcelona public gardens"
  );

  const proposalReceipt = await proposalTx.wait(5);
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
