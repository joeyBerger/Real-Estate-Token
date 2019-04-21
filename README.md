# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


   ------------------------------
   > transaction hash:    0xf79ee8689c09bd2975f44c656b8f1c021e847b74cfe5b3a0892005211d2b610a
   > Blocks: 0            Seconds: 8
   > contract address:    0x5D588af153Ef3F0578D8B814DD91f9f3a2B503b0
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             7.995658729000000005
   > gas used:            5740155
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.05740155 ETH


Joeys-MacBook-Pro:eth-contracts joeyberger$ truffle migrate --reset --network rinkeby
Compiling ./contracts/SolnSquareVerifier.sol...

Compilation warnings encountered:

/Users/joeyberger/Desktop/Udacity/Blockchain Nanodegree/GitHub Repos/Real-Estate-Token/eth-contracts/contracts/Oraclize.sol:320:7: Warning: Unreachable code.
      _networkID; // silence the warning and remain backwards compatible
      ^--------^
,/Users/joeyberger/Desktop/Udacity/Blockchain Nanodegree/GitHub Repos/Real-Estate-Token/eth-contracts/contracts/Oraclize.sol:373:7: Warning: Unreachable code.
      _myid; _result; _proof; // Silence compiler warnings
      ^--------------------^
,/Users/joeyberger/Desktop/Udacity/Blockchain Nanodegree/GitHub Repos/Real-Estate-Token/eth-contracts/contracts/Oraclize.sol:371:5: Warning: Function state mutability can be restricted to pure
    function __callback(bytes32 _myid, string memory _result, bytes memory _proof) public {
    ^ (Relevant source part starts here and spans across multiple lines).
,/Users/joeyberger/Desktop/Udacity/Blockchain Nanodegree/GitHub Repos/Real-Estate-Token/eth-contracts/contracts/ERC721Mintable.sol:43:5: Warning: Function state mutability can be restricted to view
    function owner() public returns (address) {
    ^ (Relevant source part starts here and spans across multiple lines).
,/Users/joeyberger/Desktop/Udacity/Blockchain Nanodegree/GitHub Repos/Real-Estate-Token/eth-contracts/contracts/ERC721Mintable.sol:573:5: Warning: Function state mutability can be restricted to view
    function returnContractOwner () public returns(address) {
    ^ (Relevant source part starts here and spans across multiple lines).
,/Users/joeyberger/Desktop/Udacity/Blockchain Nanodegree/GitHub Repos/Real-Estate-Token/eth-contracts/contracts/SolnSquareVerifier.sol:84:5: Warning: Function state mutability can be restricted to pure
    function hashSolution(uint a, uint b) private returns(bytes32 hashedSolution) {
    ^ (Relevant source part starts here and spans across multiple lines).

Writing artifacts to ./build/contracts

⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 6996321


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             8.053630559000000005
   > gas used:            258162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00258162 ETH

   -------------------------------------
   > Total cost:          0.00258162 ETH


2_deploy_contracts.js
=====================

   Replacing 'SolnSquareVerifier'
   ------------------------------
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             7.997512729000000005
   > gas used:            5584755
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.05584755 ETH

   -------------------------------------
   > Total cost:          0.05584755 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.05842917 ETH

⚠️  Important ⚠️
If you're using an HDWalletProvider, it must be Web3 1.0 enabled or your migration will hang.


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 7006834


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x66cf8004ec21e4e57b2fc89eb644e1b6d96471be2f1a912d8342d8e5197e9dd6
   > Blocks: 0            Seconds: 8
   > contract address:    0x7d52f1b1Bbc1cca41D5a1fE47DCd9E3A39727a61
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             8.053480559000000005
   > gas used:            273162
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00273162 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00273162 ETH


2_deploy_contracts.js
=====================

   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xf79ee8689c09bd2975f44c656b8f1c021e847b74cfe5b3a0892005211d2b610a
   > Blocks: 0            Seconds: 8
   > contract address:    0x5D588af153Ef3F0578D8B814DD91f9f3a2B503b0
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             7.995658729000000005
   > gas used:            5740155
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.05740155 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05740155 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.06013317 ETH