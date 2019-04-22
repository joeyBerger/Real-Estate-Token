var TestSquareVerifier = artifacts.require('Verifier');
var GeneratedProof = require('../../zokrates/code/square/proof.json');
const truffleAssert = require('truffle-assertions');
contract('TestSquareVerifier', accounts => {

    // Test verification with correct proof
    describe('test verification', function() {
        beforeEach(async function() {
            this.contract = await TestSquareVerifier.new();
        })

        it('verification should pass if correct inputs are provided', async function() {
            let result = false;
            try {
                TestSquareVerifier.js
                let tx = await this.contract.verifyTx(GeneratedProof.proof["A"], GeneratedProof.proof["A_p"], GeneratedProof.proof["B"],
                    GeneratedProof.proof["B_p"], GeneratedProof.proof["C"], GeneratedProof.proof["C_p"],
                    GeneratedProof.proof["H"], GeneratedProof.proof["K"], GeneratedProof.input);
                try {
                    truffleAssert.eventEmitted(tx, 'Verified', (ev) => {
                        result = true;
                    });
                } catch (e) {}
            } catch (e) {
                console.log(e);
            }
            assert.equal(result, true, "Correct inputs should result in verification");
        })

        // Test verification with incorrect proof
        it('verification should not pass if incorrect inputs are provided', async function() {
            let result = false;
            let fakeHashArr = ['0xeb6b98e70da527f39fb58f6762e6f42697ab88fd3d6e863c62fe5430eb74856d', '0x2b32354a227d12b0bbb323af74121cf73fd0964b9cd94820f139a7459f382564'];
            try {
                let tx = await this.contract.verifyTx.call(GeneratedProof.proof["A"], fakeHashArr, GeneratedProof.proof["B"],
                    GeneratedProof.proof["B_p"], GeneratedProof.proof["C"], GeneratedProof.proof["C_p"],
                    GeneratedProof.proof["H"], GeneratedProof.proof["K"], GeneratedProof.input);
                try {
                    truffleAssert.eventEmitted(tx, 'Verified', (ev) => {
                        result = true;
                    });
                } catch (e) {}
            } catch (e) {
                result = false;
            }
            assert.equal(result, false, "Incorrect hash values should not result in verification");
        })

        // Test verification with incorrect inputs
        it('verification should not pass if incorrect inputs are provided', async function() {
            let result = true;
            let fakeInput = ['6', '2'];
            try {
                let tx = await this.contract.verifyTx.call(GeneratedProof.proof["A"], GeneratedProof.proof["A_p"], GeneratedProof.proof["B"],
                    GeneratedProof.proof["B_p"], GeneratedProof.proof["C"], GeneratedProof.proof["C_p"],
                    GeneratedProof.proof["H"], GeneratedProof.proof["K"], fakeInput);
                try {
                    truffleAssert.eventEmitted(tx, 'Verified', (ev) => {
                        result = true;
                    });
                } catch (e) {
                    result = false;
                }
            } catch (e) {
                console.log(e);
            }
            assert.equal(result, false, "Incorrect inputs should not result in verification");
        })
    });
})