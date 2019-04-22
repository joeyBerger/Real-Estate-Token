var HDWalletProvider = require('truffle-hdwallet-provider');

// truffle migrate --reset --network rinkeby

var mnemonic = 'spirit supply whale amount human item harsh scare congress discover talent hamster';

module.exports = {
  networks: { 
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/628ed01d54404ce6a9af4ff083213279') 
      },
      network_id: 4,
      gas: 6000000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "^0.5.2"
    }
  }
};