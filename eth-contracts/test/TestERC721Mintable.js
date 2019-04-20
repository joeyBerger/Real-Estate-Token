var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    let tokenId = 0;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
           
            this.contract = await ERC721MintableComplete.new("TestName","TN",{from: account_one});
            // TODO: mint multiple tokens
            try {
                tokenId = 0;
                await this.contract.mint(account_one,tokenId,{from: account_one});
                tokenId++;
                await this.contract.mint(account_two,tokenId,{from: account_one});
                tokenId++;
                await this.contract.mint(account_two,tokenId,{from: account_one});     
                tokenId++;           
            }
            catch(e) {
                console.log(e);
            }
        })

        it('should return total supply', async function () { 
            let totalSupply;
            try {
                totalSupply = await this.contract.totalSupply.call({from: account_one});
            }
            catch(e) {
                console.log(e);
            }
            assert.equal(totalSupply.toString(), tokenId,"Total supply should match the current token Id");
        })

        it('should get token balance', async function () { 
            let tokenBalance1;
            let tokenBalance2;
            try {
                tokenBalance1 = await this.contract.balanceOf.call(account_one,{from: account_one});
                tokenBalance2 = await this.contract.balanceOf.call(account_two,{from: account_one});
            }
            catch(e) {
                console.log(e);
            }
            assert.equal(tokenBalance1.toString(), 1,"Total supply should match the current token Id");
            assert.equal(tokenBalance2.toString(), 2,"Total supply should match the current token Id");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI;
            try {
                let itokenID = 1;
                tokenURI = await this.contract.tokenURI.call(itokenID,{from: account_one});
            }
            catch(e) {
                console.log(e);
            }
            assert.equal(tokenURI,'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1',"URI should be equal to address with the token ID appended");
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenBalance1;
            let tokenBalance2;
            try {
                let itokenID = 2;
                await this.contract.transferFrom(account_two,account_one,itokenID,{from: account_two});
                tokenBalance1 = await this.contract.balanceOf.call(account_one,{from: account_one});
                tokenBalance2 = await this.contract.balanceOf.call(account_two,{from: account_one});
            }
            catch(e) {
                console.log(e);
            }
            assert.equal(tokenBalance1.toString(), 2,"Total supply should match the current token Id");
            assert.equal(tokenBalance2.toString(), 1,"Total supply should match the current token Id");
        })

        it('should not transfer token if not owner', async function () { 
            let transferSuccessful = true;
            try {
                let itokenID = 2;
                await this.contract.transferFrom(account_two,account_one,itokenID,{from: account_one});                
            }
            catch(e) {
                transferSuccessful = false;
            }
                transferSuccessful = false;
                assert.equal(transferSuccessful, false, "Transfer should not be successful if not from the appropriate owner.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("TestName","TN",{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let successfulMint = true;
            try {
                await this.contract.mint(account_one,tokenId,{from: account_two});
            }
            catch {
                successfulMint = false;
            }
            assert.equal(successfulMint, false, "Only contract owner should be allowed to mint new token.");
        })

        it('should return contract owner', async function () { 
            let contractAddress
            try {
                contractAddress = await this.contract.returnContractOwner.call({from: account_one});
            }
            catch (e) {
                console.log(e);
            }            
            assert.equal(contractAddress, account_one, "Function call should return contract owner.");
            assert.notEqual(contractAddress, account_two, "Function call should return contract owner.");
        })
    });
})