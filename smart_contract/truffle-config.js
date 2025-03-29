const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config(); // Load environment variables

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(
        process.env.PRIVATE_KEY, // Your MetaMask Private Key
        "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID"
      ),
      network_id: 5, // Goerli Testnet
      gas: 5000000,
      confirmations: 2,
      timeoutBlocks: 200
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
