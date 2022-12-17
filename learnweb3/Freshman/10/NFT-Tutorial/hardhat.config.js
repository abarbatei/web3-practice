require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.NODE_HTTP_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 50000000000,
    },
  },
};
