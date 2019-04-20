var HDWalletProvider = require('truffle-hdwallet-provider');

// truffle migrate --reset --network rinkeby

var mnemonic = 'spirit supply whale amount human item harsh scare congress discover talent hamster';
//var mnemonic = 'note bullet gym acoustic plastic correct cradle color monitor stove knee deliver';

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
        //return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/bfda5968427443ab86ee3ca5fd20270b') 
      },
      network_id: 4,
      // gas: 4500000,
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