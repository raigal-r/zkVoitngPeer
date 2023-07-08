import { Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { Governor } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");

  const result = ethers.Wallet.createRandom().connect(provider);
  const wallet2 = new Wallet(
    "0xca2a472d33cb2b40f4658bf7f2471a1082f99b1c4850152c884d1fe0ad7987a5"
  ).connect(provider);
  const deployer = new Deployer(hre, wallet2);

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );
  const GovernorReadArtifact = await hre.artifacts.readArtifact("PeerGovernor");

  const governor = new ethers.Contract(
    "0x8340931FAfD164bFe8f802329b50Bd8644BeB52b",
    GovernorReadArtifact.abi,
    wallet2
  ) as Governor;

  const proposalTx = await governor.castVote(
    ethers.BigNumber.from(
      //"108483488697189105207973731511407116515385942259030815579054678840735290608600"
      "33687590986052694226245714979495645033388479289268406169597456432666066077801"
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
