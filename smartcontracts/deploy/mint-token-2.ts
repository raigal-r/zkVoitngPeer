import { Wallet, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { PeerVoteToken } from "../src/types";

export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  const wallet2 = new Wallet(
    "0xca2a472d33cb2b40f4658bf7f2471a1082f99b1c4850152c884d1fe0ad7987a5",
    provider
  ); // private key of your wallet

  const VotingTokenReadArtifact = await hre.artifacts.readArtifact(
    "PeerVoteToken"
  );

  const votingTokenInterface = new ethers.utils.Interface(
    VotingTokenReadArtifact.abi
  );

  const peerVoteTokenAddress = "0xB8f59AF10d8C66b92d0539C898854040147f8cFf"; //  address of our deployed token contract
  const mintAmount = 200; // amount of tokens to mint

  const mintCalldata = votingTokenInterface.encodeFunctionData("mint", [
    mintAmount,
  ]);

  const peerVoteToken = new ethers.Contract(
    peerVoteTokenAddress,
    VotingTokenReadArtifact.abi,
    wallet2
  ) as PeerVoteToken;

  const mintTx = await peerVoteToken.mint(mintAmount);
  const mintReceipt = await mintTx.wait(5);
  console.log(`Mint transaction receipt: ${mintReceipt.transactionHash}`);
}
