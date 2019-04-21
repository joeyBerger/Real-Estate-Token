// migrating the appropriate contracts
var verifier = artifacts.require("./verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
// var ERC721MintableComplete = artifacts.require("./ERC721.sol");

module.exports = function(deployer) {

  //let deployAddress = '0x27D8D15CbC94527cAdf5eC14B69519aE23288B95';
  let name = "UdacityRealEstateToken", symbol = "URET";

  deployer.deploy(SolnSquareVerifier,name,symbol);

  // deployer.deploy(verifier)
  // .then(() => {
  //   deployer.deploy(SolnSquareVerifier,verifier.address,name,symbol);
  // })

  // let name = "tempName", symbol = "TN";

  // deployer.deploy(ERC721MintableComplete);

};