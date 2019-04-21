pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
import './verifier.sol';

contract SolnSquareVerifier is ERC721MintableComplete, Verifier {
    
    uint256 currentIndex;

    constructor(string memory name, string memory symbol) ERC721MintableComplete(name, symbol) public {         
        currentIndex = 0;     
    }

    struct Solution {
        uint256 index;
        address solAddress;
    }

    mapping(uint256 => Solution) private storedSolutions; 

    //enumerator to track state of solution
    enum SolutionState { Unverfied, Verified, Used }

    // mapping to store unique solutions submitted
    mapping(bytes32 => SolutionState) private acceptedSolutions;

    // event to emit when a solution is added
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

    // function to add the solutions to the array and emit the event
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
            r = verifyTx(a,a_p,b,b_p,c,c_p,h,k,input);
            if (r) {
                Solution memory newSolution = Solution(currentIndex,msg.sender);
                storedSolutions[currentIndex] = newSolution;
                emit SolutionAdded(msg.sender,currentIndex);                
                bytes32 hashResult = hashSolution(input[0],input[1]);
                acceptedSolutions[hashResult] = SolutionState.Verified;
            }
        }
    
    function mintNewToken (uint[2] memory input, address to) verifiedSolutionNotUsed(input[0],input[1]) public returns (bool r) {
        r = mint(to,currentIndex);
        bytes32 hashResult = hashSolution(input[0],input[1]);
        acceptedSolutions[hashResult] = SolutionState.Used;
        currentIndex.add(1);
        return r;
    }

    function hashSolution(uint a, uint b) private pure returns(bytes32 hashedSolution) {
        hashedSolution = keccak256(abi.encodePacked(a+b, a*b));
    }   
}





















