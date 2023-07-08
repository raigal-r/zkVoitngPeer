import { Wallet, Provider } from "zksync-web3";
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
  const GovernorReadArtifact = await hre.artifacts.readArtifact("PeerGovernor");

  const governor = new ethers.Contract(
    "0xb9DD4F87d26F67F2c7072A04542627D7f2a4141A",
    GovernorReadArtifact.abi,
    wallet1
  ) as Governor;

  const proposalTx = await governor.castVote(
    ethers.BigNumber.from(
      //"108483488697189105207973731511407116515385942259030815579054678840735290608600" 666
      "85622921385258316111445715251896018711407462364451995293308734501337484696824"
    ),
    1
  );

  const proposalReceipt = await proposalTx.wait();

  // get emmited event
  console.log(
    proposalReceipt.events?.map((e) => ({
      name: e.event,
      args: e.args?.map((a) => a.toString()),
    }))
  );
}
