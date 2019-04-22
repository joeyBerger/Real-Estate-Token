# Real Estate Token

This Udacity projects demonstrates the use of a custom ERC721 token and a verification contract to confirm the identity of those trying to mint new instances of the aforementioned tokens. The application of verifying custom tokens was applied to the ownership of a home. 

Once the contract was migrated to Rinkeby, 10 new tokens were minted and 5 were bought by another address. ZoKrates, via the use of Docker, was used to generate the verification contract (verification.sol).


## Project Specifics
* The contract address is: [0x5D588af153Ef3F0578D8B814DD91f9f3a2B503b0](https://rinkeby.etherscan.io/address/0x5D588af153Ef3F0578D8B814DD91f9f3a2B503b0)
* The account used to generate the contract is: [0x27D8D15CbC94527cAdf5eC14B69519aE23288B95](https://rinkeby.etherscan.io/address/0x27D8D15CbC94527cAdf5eC14B69519aE23288B95)
*  The purchasing account address is: [0x018C2daBef4904ECbd7118350A0c54DbeaE3549A](https://rinkeby.etherscan.io/address/0x018C2daBef4904ECbd7118350A0c54DbeaE3549A)

## Prerequisites
Access to an operating system capable of internet, browser and IDE access.

## Installing
* Unzip project or clone from [Github](https://github.com/joeyBerger/Real-Estate-Token).
* Navigate to the root folder and `cd eth-contracts/`. Start Ganache by running `ganache-cli`.
* To test, start another terminal instance and `cd eth-contracts/`. Run `truffle test`, and all 3 javascript tests will commence.

#### Running the web application
##### Login To Metamask
* In order to interact with this DAPP, login to [Metamask](https://metamask.io/).

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
* [OpenSea](https://opensea.io) - The largest marketplace for crypto collectibles
* [MyEtherWallet](https://www.myetherwallet.com/) -Free, client-side interface helping you interact with the Ethereum blockchain.
* [Visual Studio Code](https://code.visualstudio.com) - Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS.

## Software Versioning
Node  - v10.15.1
Truffle - v5.0.5 (core: 5.0.5)
Solidity - v0.5.2 (solc-js)

#### Project Version 1.0

## Author

Joey Berger
