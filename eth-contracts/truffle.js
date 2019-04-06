// var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
// mnemonic = "tell foil harbor summer people put woman country opinion write first switch";
// // use to fire up ganache
// // ganache-cli --mnemonic "tell foil harbor summer people put woman country opinion write first switch" -a 40
// module.exports = {
//   networks: {
//     development: {
//       provider: function() {
//         return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
//       },
//       network_id: '*',
//       //gas: 9999999
//     }
//   },
//   compilers: {
//     solc: {
//       version: "^0.4.24"
//     }
//   }
// };


// Allows us to use ES6 in our migrations and tests.
// require('babel-register')

var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = 'spirit supply whale amount human item harsh scare congress discover talent hamster';
mnemonic = "tell foil harbor summer people put woman country opinion write first switch";
// ganache-cli --mnemonic "tell foil harbor summer people put woman country opinion write first switch" -a 40
module.exports = {
  networks: { 
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/bfda5968427443ab86ee3ca5fd20270b') 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "^0.5.2"
    }
  }
};
// module.exports = {
//   networks: {
//       development: {
//           host: "localhost",
//           port: 8545,
//           network_id: "*" // Match any network id
//       }
//   }
// };
