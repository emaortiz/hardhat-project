import { ethers } from "hardhat";
import { Marketplace__factory, NFT__factory } from "../typechain-types";

async function main() {
  const [deployer, user] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log(
    "Account balance:",
    (await ethers.provider.getBalance(deployer)).toString()
  );

  const nftFactory = new NFT__factory(deployer);
  const marketplaceFactory = new Marketplace__factory(deployer);

  const marketPlaceContract = await marketplaceFactory.deploy(1);
  await marketPlaceContract.waitForDeployment();
  const marketPlaceContractAddress = await marketPlaceContract.getAddress();
  console.log(`MarketPlace Contract deployed to ${marketPlaceContractAddress}`);

  const nftContract = await nftFactory.deploy();
  await nftContract.waitForDeployment();
  const nftContractAddress = await nftContract.getAddress();
  console.log(`NFT Contract deployed to ${nftContractAddress}`);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
