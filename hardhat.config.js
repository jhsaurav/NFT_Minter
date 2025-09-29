require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
// const {RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY} = process.env;
// if(!RPC_URL || !PRIVATE_KEY || !ETHERSCAN_API_KE)
//   throw new Error("Please set api keys")
module.exports = {
  solidity: "0.8.28",
  ignition:{
    requiredConfirmations:1
  },
  networks:{
    base:{
      url:process.env.RPC_URL,
      accounts:[process.env.PRIVATE_KEY]
    },
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_API_KEY,
    sourcify:{
      enabled:true
    },
  }
};
