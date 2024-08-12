module.exports = {
  solidity: "0.8.24",
  networks: {
    // Use the URL from the Ports Tab
    gitpod: {
      url: "https://8545-adeyemoyaas-bookshelfda-2uwni2btov9.ws-eu115.gitpod.io",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/340eff61389c4416bfceba2de4296ffe",
      accounts: ["dad507c3fc6bf3213f6f22fe7c43f116ee7220263085e372e40bd3e6ef6dd98c"]
    },
  }
};