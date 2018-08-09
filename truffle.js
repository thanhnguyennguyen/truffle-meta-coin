// npm install -g truffle-hdwallet-provider
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic;
module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/<INFURA_Access_Token>")
      },
      network_id: 3
    }
  }
};