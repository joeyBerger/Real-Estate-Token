pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
import './verifier.sol';

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete, Verifier {

    VerifierInterface verifierInterface;
    uint256 currentIndex;

    constructor(address verifierAddress, string memory name, string memory symbol) ERC721MintableComplete(name, symbol) public {         
        verifierInterface = VerifierInterface(verifierAddress);   
        currentIndex = 0;     
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solAddress;
    }

    //enumerator to track state of solution
    enum SolutionState { Unverfied, Verified, Used }

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => SolutionState) private acceptedSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(address indexed solAddress, uint256 indexed index);

    modifier verifiedSolutionNotUsed(uint a, uint b) {
        bytes32 hasedResult = hashSolution(a,b);
        require(acceptedSolutions[hasedResult] == SolutionState.Verified, "Solution does not exist or solution has been used");
        _;
    }

    modifier solutionDoesNotExists(uint a, uint b) {
        bytes32 hasedResult = hashSolution(a,b);
        require(acceptedSolutions[hasedResult] != SolutionState.Verified, "Solution that already exists cannot be added.");
        _;
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public solutionDoesNotExists(input[0],input[1]) returns (bool r)
        {
            //r = verifierInterface.verifyTx(a,a_p,b,b_p,c,c_p,h,k,input);
            // r = verifierInterface.test();
            // if (r) {
            //     // Solution memory newSolution = Solution(index,solAddress);
            //     // emit SolutionAdded(solAddress,index);
            //     // currentIndex.add(1);
            // }         
            
            r = verifyTx(a,a_p,b,b_p,c,c_p,h,k,input);
            if (r) {
                Solution memory newSolution = Solution(currentIndex,msg.sender);
                emit SolutionAdded(msg.sender,currentIndex);                
                bytes32 hashResult = hashSolution(input[0],input[1]);
                acceptedSolutions[hashResult] = SolutionState.Verified;
            }
        }
    

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    //function mintNewToken (address to, uint256 tokenId) public returns(bool success) {

    //TODO:need to satisfy new solution
    function mintNewToken (uint[2] memory input, address to) verifiedSolutionNotUsed(input[0],input[1]) public returns (bool r) {
        r = mint(to,currentIndex);
        bytes32 hashResult = hashSolution(input[0],input[1]);
        acceptedSolutions[hashResult] = SolutionState.Used;
        currentIndex.add(1);
        return true;
    }

    function hashSolution(uint a, uint b) private returns(bytes32 hashedSolution) {
        hashedSolution = keccak256(abi.encodePacked(a+b, a*b));
    }   
}

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

//Data Interface
contract VerifierInterface //is Verifier  
{
    function verifyTx(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns (bool r) 
        {
            r = true;
            // r = verifyTx(
            //     a,
            //     a_p,
            //     b,
            //     b_p,
            //     c,
            //     c_p,
            //     h,
            //     k,
            //     input
            // );
        }

    function test() public returns(bool) {
        return true;
    }
}

// contract SquareVerifier {
//     function verifyTxTEST(
//         uint[2] memory a,
//         uint[2] memory a_p,
//         uint[2][2] memory b,
//         uint[2] memory b_p,
//         uint[2] memory c,
//         uint[2] memory c_p,
//         uint[2] memory h,
//         uint[2] memory k,
//         uint[2] memory input
//     ) public returns (bool r) 
//     {
//         //r = true;
//         r = verifyTx(
//             a,
//             a_p,
//             b,
//             b_p,
//             c,
//             c_p,
//             h,
//             k,
//             input
//         );
//     }
// }





















