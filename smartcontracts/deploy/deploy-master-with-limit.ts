import { Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

const PRIVATE_KEY =
  "0xcc1149669c0f288ae228c316d93a8fd39b766a7d5ac3f41054f74e4ee7f1a09c";

const GOVERNOR_ADDRESS = "0xb9DD4F87d26F67F2c7072A04542627D7f2a4141A";

export default async function (hre: HardhatRuntimeEnvironment) {
  const wallet = new Wallet(PRIVATE_KEY);

  const deployer = new Deployer(hre, wallet);

  // Deploying the paymaster
  const paymasterArtifact = await deployer.loadArtifact(
    "VotingPaymasterWithLimit"
  );
  const paymaster = await deployer.deploy(paymasterArtifact, [
    GOVERNOR_ADDRESS,
  ]);
  console.log(`Paymaster address: ${paymaster.address}`);

  // Supplying paymaster with ETH.
  await (
    await deployer.zkWallet.sendTransaction({
      to: paymaster.address,
      value: ethers.utils.parseEther("0.05"),
    })
  ).wait();

  // Setting the dAPIs in Paymaster. Head over to the API3 Market (https://market.api3.org) to verify dAPI proxy contract addresses and whether they're funded or not.
  const ETHUSDdAPI = "0x28ce555ee7a3daCdC305951974FcbA59F5BdF09b";
  const USDCUSDdAPI = "0x946E3232Cc18E812895A8e83CaE3d0caA241C2AB";
  const setProxy = paymaster.setDapiProxy(USDCUSDdAPI, ETHUSDdAPI);
  await (await setProxy).wait();
  console.log("dAPI Proxies Set!");

  console.log(`Done!`);
}

// Paymaster address: 0x7B9c6a918ec02914330ce0F73DD030420cd3B984
