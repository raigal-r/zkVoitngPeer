import { Wallet, utils, Provider } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  const provider = new Provider("https://testnet.era.zksync.dev");
  // Private key of the account used to deploy
  const wallet = new Wallet("0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c").connect(provider);
  
  const factoryArtifact = await hre.artifacts.readArtifact("VotingPaymasterWithLimit");
  

  const aaFactory = new ethers.Contract(
    '0x7B9c6a918ec02914330ce0F73DD030420cd3B984',
    factoryArtifact.abi,
    wallet
  );
  
    const communities = await aaFactory.proposalsFees(ethers.BigNumber.from("79962949918601016327557759576923146270178233114978289851025418173003015207999"));
    
    console.log(communities)
}
