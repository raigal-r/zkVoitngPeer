import { Provider } from "zksync-web3";
import * as ethers from "ethers";

//export default async function (hre: HardhatRuntimeEnvironment)
async function listenToEvents() {
  const provider = new Provider("https://testnet.era.zksync.dev");

  //const factoryArtifact = await hre.artifacts.readArtifact("PeerLocal");
  //console.log(factoryArtifact.abi[16].inputs);

  // Get the contract instance you want to listen to events from
  const contractAddress = "0xe9567E29E59F103Bd89c40DDB1E95603231bed6b"; // Replace with the actual contract address
  const contractInterface = new ethers.utils.Interface([
    "event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 voteStart, uint256 voteEnd, string description)", // Replace with the actual event definition
  ]);

  // Create a filter to listen to events from the contract
  const filter = {
    address: contractAddress,
    topics: [contractInterface.getEventTopic("ProposalCreated")], // Get the event topic using ethers.js
  };

  // Subscribe to events using the filter
  provider.on(filter, (log) => {
    console.log("Received event:", log);
    // Process the event data here
  });
}

export default async function main() {
  try {
    await listenToEvents();
  } catch (error) {
    console.error(error);
  }
}
