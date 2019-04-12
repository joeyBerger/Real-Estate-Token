// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SquareVerifier = artifacts.require("./VerifierInterface.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {

  let deployAddress = '0x8f367780dfe322371218e46084624f5040f0eb6a';
  let name = "tempName", symbol = "TN";

  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier,deployAddress,name,symbol);

  deployer.deploy(SquareVerifier)
  .then(() => {
    deployer.deploy(SolnSquareVerifier,SquareVerifier.address,name,symbol);
  })
};
