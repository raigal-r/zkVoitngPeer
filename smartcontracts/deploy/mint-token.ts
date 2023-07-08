import { Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { PeerVoteToken } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  const wallet1 = new Wallet(
    "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c",
    provider
  ); // private key of your wallet

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );

  const votingTokenInterface = new ethers.utils.Interface(
    VotingTokenReadArtifact.abi
  );

  const peerVoteTokenAddress = "0xB8f59AF10d8C66b92d0539C898854040147f8cFf"; //  address of our deployed token contract
  const mintAmount = 100; // amount of tokens to mint

  const mintCalldata = votingTokenInterface.encodeFunctionData("mint", [
    mintAmount,
  ]);

  const peerVoteToken = new ethers.Contract(
    peerVoteTokenAddress,
    VotingTokenReadArtifact.abi,
    wallet1
  ) as PeerVoteToken;

  const mintTx = await peerVoteToken.mint(mintAmount);
  const mintReceipt = await mintTx.wait(5);
  console.log(`Mint transaction receipt: ${mintReceipt.transactionHash}`);
}
