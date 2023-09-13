import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";

const keys = require("./keys.json");

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  paths: {
    tests: "tests",
  },
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [keys.DEPLOY_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: keys.POLYGONSCAN_API_KEY,
  },
};

export default config;
