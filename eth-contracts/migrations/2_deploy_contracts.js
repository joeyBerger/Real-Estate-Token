// migrating the appropriate contracts
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  let name = "UdacityRealEstateToken", symbol = "URET";
  deployer.deploy(SolnSquareVerifier,name,symbol);
};