// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SquareVerifier = artifacts.require("./VerifierInterface.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {

  let deployAddress = '0x27D8D15CbC94527cAdf5eC14B69519aE23288B95';
  let name = "tempName", symbol = "TN";

  deployer.deploy(SolnSquareVerifier,name,symbol);

  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier,deployAddress,name,symbol);

  // deployer.deploy(SquareVerifier)
  // .then(() => {
  //   deployer.deploy(SolnSquareVerifier,SquareVerifier.address,name,symbol);
  // })

  
};

// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SquareVerifier)
//       .then(() => {
//         return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
//       });
// };