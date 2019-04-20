var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
// var TestSquareVerifier = artifacts.require('Verifier');
var GeneratedProof = require('../../zokrates/code/square/proof.json');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('TestSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    let name = "ERC721MintableComplete";
    let symbol = "NM";

    describe('add verification and mint new token', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifier.new(account_one,name,symbol);
            //this.contract = await SolnSquareVerifier.new(name,symbol);
        })

        it('valid proof is added and new token minted', async function () { 
            try {
                await this.contract.addSolution(GeneratedProof.proof["A"],GeneratedProof.proof["A_p"],GeneratedProof.proof["B"],
                                                           GeneratedProof.proof["B_p"],GeneratedProof.proof["C"],GeneratedProof.proof["C_p"],
                                                           GeneratedProof.proof["H"],GeneratedProof.proof["K"],GeneratedProof.input,{from:account_one});
            }
            catch(e) {
                console.log(e);
            }
            
            let result = true;
            try {
                await this.contract.mintNewToken(GeneratedProof.input,account_two,{from:account_one});
            }
            catch(e) {
                result = false;
            }

            assert.equal(result, true, "Correct inputs should allow the minting of a new token");
        })

        it('invalid proof is attempted and no new token minted', async function () { 
            let incorrectInput = ['3','4'];
            try {
                await this.contract.addSolution(GeneratedProof.proof["A"],GeneratedProof.proof["A_p"],GeneratedProof.proof["B"],
                                                           GeneratedProof.proof["B_p"],GeneratedProof.proof["C"],GeneratedProof.proof["C_p"],
                                                           GeneratedProof.proof["H"],GeneratedProof.proof["K"],incorrectInput,{from:account_one});
            }
            catch(e) {
                console.log(e);
            }
            
            let result = true;
            try {
                await this.contract.mintNewToken(incorrectInput,account_two,{from:account_one});
            }
            catch(e) {
                result = false;
            }

            assert.equal(result, false, "Incorrect inputs should not allow the minting of a new token");
        })

        it('do not allow the same input solution to be added', async function () { 
            let result = true;
            try {
                await this.contract.addSolution(GeneratedProof.proof["A"],GeneratedProof.proof["A_p"],GeneratedProof.proof["B"],
                                                           GeneratedProof.proof["B_p"],GeneratedProof.proof["C"],GeneratedProof.proof["C_p"],
                                                           GeneratedProof.proof["H"],GeneratedProof.proof["K"],GeneratedProof.input,{from:account_one});
            }
            catch(e) {
                console.log(e);
            }
            try {
                await this.contract.addSolution(GeneratedProof.proof["A"],GeneratedProof.proof["A_p"],GeneratedProof.proof["B"],
                                                           GeneratedProof.proof["B_p"],GeneratedProof.proof["C"],GeneratedProof.proof["C_p"],
                                                           GeneratedProof.proof["H"],GeneratedProof.proof["K"],GeneratedProof.input,{from:account_two});
            }
            catch(e) {
                result = false;
            }

            assert.equal(result, false, "Should not be able to add 2 identical inputs.");
        })

        it('cannot mint token without verification', async function () { 
            let result = true;
            try {
                await this.contract.mintNewToken(GeneratedProof.input,account_two,{from:account_one});
            }
            catch(e) {
                result = false;
            }

            assert.equal(result, false, "Should not be able to mint token without verification.");
        })
    });
})
