/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JBETHERC20ProjectPayerTokensReceiverClone,
  JBETHERC20ProjectPayerTokensReceiverCloneInterface,
} from "../JBETHERC20ProjectPayerTokensReceiverClone";

const _abi = [
  {
    inputs: [],
    name: "INCORRECT_DECIMAL_AMOUNT",
    type: "error",
  },
  {
    inputs: [],
    name: "NO_MSG_VALUE_ALLOWED",
    type: "error",
  },
  {
    inputs: [],
    name: "TERMINAL_NOT_FOUND",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "preferClaimedTokens",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "memo",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "metadata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "preferAddToBalance",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetDefaultValues",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC1155",
        name: "erc1155",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "_safeTransferERC1155To",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721",
        name: "erc721",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "_safeTransferERC721To",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "_transferERC20To",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_decimals",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_metadata",
        type: "bytes",
      },
    ],
    name: "addToBalanceOf",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultBeneficiary",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultMemo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultMetadata",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultPreferAddToBalance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultPreferClaimedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultProjectId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "directory",
    outputs: [
      {
        internalType: "contract IJBDirectory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_defaultProjectId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_defaultBeneficiary",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_defaultPreferClaimedTokens",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_defaultMemo",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_defaultMetadata",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_defaultPreferAddToBalance",
        type: "bool",
      },
      {
        internalType: "contract IJBDirectory",
        name: "_directory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_decimals",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minReturnedTokens",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_preferClaimedTokens",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_metadata",
        type: "bytes",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_preferClaimedTokens",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_memo",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_metadata",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_defaultPreferAddToBalance",
        type: "bool",
      },
    ],
    name: "setDefaultValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612048806100206000396000f3fe60806040526004361061012e5760003560e01c806393b7f154116100ab578063c41c2f241161006f578063c41c2f24146105da578063d6526e5c146105fa578063dd7423411461061a578063ee70453a1461063a578063f23a6e611461065a578063f2fde38b1461068657600080fd5b806393b7f1541461053e578063a4919eb114610558578063b96053df14610579578063bc197c811461058e578063bccd24c0146105ba57600080fd5b806354ab58af116100f257806354ab58af1461049e578063715018a6146104d65780637e646549146104eb5780638293fee61461050d5780638da5cb5b1461052057600080fd5b806301ffc9a7146103ce57806309a6b7e5146104035780630e45f78e14610416578063150b7a02146104365780633ce9830b1461047a57600080fd5b366103c957609c5460ff16156102675761026560985461eeee476012609a8054610157906115dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610183906115dc565b80156101d05780601f106101a5576101008083540402835291602001916101d0565b820191906000526020600020905b8154815290600101906020018083116101b357829003601f168201915b5050505050609b80546101e2906115dc565b80601f016020809104026020016040519081016040528092919081815260200182805461020e906115dc565b801561025b5780601f106102305761010080835404028352916020019161025b565b820191906000526020600020905b81548152906001019060200180831161023e57829003601f168201915b50505050506106a6565b005b609854609954610265919061eeee9047906012906001600160a01b03161561029a576099546001600160a01b031661029c565b335b6000609960149054906101000a900460ff16609a80546102bb906115dc565b80601f01602080910402602001604051908101604052809291908181526020018280546102e7906115dc565b80156103345780601f1061030957610100808354040283529160200191610334565b820191906000526020600020905b81548152906001019060200180831161031757829003601f168201915b5050505050609b8054610346906115dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610372906115dc565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b50505050506108e7565b600080fd5b3480156103da57600080fd5b506103ee6103e9366004611616565b610b64565b60405190151581526020015b60405180910390f35b6102656104113660046116a5565b610b8f565b34801561042257600080fd5b50610265610431366004611814565b610cc6565b34801561044257600080fd5b506104616104513660046118ba565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016103fa565b34801561048657600080fd5b5061049060985481565b6040519081526020016103fa565b3480156104aa57600080fd5b506099546104be906001600160a01b031681565b6040516001600160a01b0390911681526020016103fa565b3480156104e257600080fd5b50610265610eae565b3480156104f757600080fd5b50610500610ee4565b6040516103fa919061197e565b61026561051b366004611991565b610f72565b34801561052c57600080fd5b506033546001600160a01b03166104be565b34801561054a57600080fd5b50609c546103ee9060ff1681565b34801561056457600080fd5b506099546103ee90600160a01b900460ff1681565b34801561058557600080fd5b506105006110af565b34801561059a57600080fd5b506104616105a9366004611aed565b63bc197c8160e01b95945050505050565b3480156105c657600080fd5b506102656105d5366004611b9b565b6110bc565b3480156105e657600080fd5b506097546104be906001600160a01b031681565b34801561060657600080fd5b50610265610615366004611b9b565b61115f565b34801561062657600080fd5b50610265610635366004611bdc565b6111f6565b34801561064657600080fd5b50610265610655366004611ca9565b6112f1565b34801561066657600080fd5b50610461610675366004611cef565b63f23a6e6160e01b95945050505050565b34801561069257600080fd5b506102656106a1366004611d58565b611394565b609754604051630862026560e41b8152600481018890526001600160a01b0387811660248301526000921690638620265090604401602060405180830381865afa1580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c9190611d75565b90506001600160a01b03811661074557604051637dd086eb60e11b815260040160405180910390fd5b60405163b7bad1b160e01b81526001600160a01b03878116600483015285919083169063b7bad1b190602401602060405180830381865afa15801561078e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b29190611d92565b146107d057604051632e5c964960e21b815260040160405180910390fd5b6001600160a01b03861661eeee146108575760405163095ea7b360e01b81526001600160a01b0382811660048301526024820187905287169063095ea7b3906044016020604051808303816000875af1158015610831573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108559190611dab565b505b60006001600160a01b03871661eeee14610872576000610874565b855b9050816001600160a01b0316630cf8e858828a898b89896040518763ffffffff1660e01b81526004016108ab959493929190611dc8565b6000604051808303818588803b1580156108c457600080fd5b505af11580156108d8573d6000803e3d6000fd5b50505050505050505050505050565b609754604051630862026560e41b8152600481018b90526001600160a01b038a811660248301526000921690638620265090604401602060405180830381865afa158015610939573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095d9190611d75565b90506001600160a01b03811661098657604051637dd086eb60e11b815260040160405180910390fd5b60405163b7bad1b160e01b81526001600160a01b038a8116600483015288919083169063b7bad1b190602401602060405180830381865afa1580156109cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f39190611d92565b14610a1157604051632e5c964960e21b815260040160405180910390fd5b6001600160a01b03891661eeee14610a985760405163095ea7b360e01b81526001600160a01b038281166004830152602482018a90528a169063095ea7b3906044016020604051808303816000875af1158015610a72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a969190611dab565b505b60006001600160a01b038a1661eeee14610ab3576000610ab5565b885b9050816001600160a01b0316631ebc263f828d8c8e60006001600160a01b03168d6001600160a01b031603610aea5733610aec565b8c5b8c8c8c8c6040518a63ffffffff1660e01b8152600401610b13989796959493929190611e13565b60206040518083038185885af1158015610b31573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610b569190611d92565b505050505050505050505050565b60006001600160e01b03198216636c8609bf60e11b1480610b895750610b898261142f565b92915050565b6001600160a01b03871661eeee14610c3d573415610bc057604051635e7e9adf60e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018790526001600160a01b038816906323b872dd906064016020604051808303816000875af1158015610c13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c379190611dab565b50610c45565b349550601294505b610cbc8888888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a91508990819084018382808284376000920191909152506106a692505050565b5050505050505050565b6033546001600160a01b03163314610cf95760405162461bcd60e51b8152600401610cf090611e7f565b60405180910390fd5b6098548614610d085760988690555b6099546001600160a01b03868116911614610d3957609980546001600160a01b0319166001600160a01b0387161790555b609960149054906101000a900460ff16151584151514610d6b576099805460ff60a01b1916600160a01b861515021790555b609a604051602001610d7d9190611f4c565b6040516020818303038152906040528051906020012083604051602001610da49190611f58565b6040516020818303038152906040528051906020012014610dd4578251610dd290609a906020860190611543565b505b609b604051602001610de69190611f4c565b6040516020818303038152906040528051906020012082604051602001610e0d9190611f58565b6040516020818303038152906040528051906020012014610e3d578151610e3b90609b906020850190611543565b505b609c5460ff16151581151514610e5c57609c805460ff19168215151790555b846001600160a01b0316867f36b1c5cef608e320317b9ee5155756634c65fe7055b424ce57e2f6c59eec79478686868633604051610e9e959493929190611f74565b60405180910390a3505050505050565b6033546001600160a01b03163314610ed85760405162461bcd60e51b8152600401610cf090611e7f565b610ee26000611464565b565b609b8054610ef1906115dc565b80601f0160208091040260200160405190810160405280929190818152602001828054610f1d906115dc565b8015610f6a5780601f10610f3f57610100808354040283529160200191610f6a565b820191906000526020600020905b815481529060010190602001808311610f4d57829003601f168201915b505050505081565b6001600160a01b038a1661eeee14611020573415610fa357604051635e7e9adf60e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018a90526001600160a01b038b16906323b872dd906064016020604051808303816000875af1158015610ff6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101a9190611dab565b50611028565b349850601297505b6110a28b8b8b8b8b8b8b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8f018190048102820181019092528d815292508d91508c90819084018382808284376000920191909152506108e792505050565b5050505050505050505050565b609a8054610ef1906115dc565b6033546001600160a01b031633146110e65760405162461bcd60e51b8152600401610cf090611e7f565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015611135573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111599190611dab565b50505050565b6033546001600160a01b031633146111895760405162461bcd60e51b8152600401610cf090611e7f565b604051632142170760e11b81523060048201526001600160a01b038381166024830152604482018390528416906342842e0e90606401600060405180830381600087803b1580156111d957600080fd5b505af11580156111ed573d6000803e3d6000fd5b50505050505050565b600061120260016114b6565b9050801561121a576000805461ff0019166101001790555b609889905560998054881515600160a01b026001600160a81b03199091166001600160a01b038b1617179055855161125990609a906020890190611543565b50845161126d90609b906020880190611543565b50609c805460ff1916851515179055609780546001600160a01b0319166001600160a01b0385161790556112a082611464565b80156112e6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050505050565b6033546001600160a01b0316331461131b5760405162461bcd60e51b8152600401610cf090611e7f565b604051637921219560e11b81523060048201526001600160a01b038481166024830152604482018490526064820183905260a06084830152600060a483015285169063f242432a9060c401600060405180830381600087803b15801561138057600080fd5b505af1158015610cbc573d6000803e3d6000fd5b6033546001600160a01b031633146113be5760405162461bcd60e51b8152600401610cf090611e7f565b6001600160a01b0381166114235760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610cf0565b61142c81611464565b50565b60006001600160e01b03198216636c8609bf60e11b1480610b8957506301ffc9a760e01b6001600160e01b0319831614610b89565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff16156114fd578160ff1660011480156114d95750303b155b6114f55760405162461bcd60e51b8152600401610cf090611fc4565b506000919050565b60005460ff8084169116106115245760405162461bcd60e51b8152600401610cf090611fc4565b506000805460ff191660ff92909216919091179055600190565b919050565b82805461154f906115dc565b90600052602060002090601f01602090048101928261157157600085556115b7565b82601f1061158a57805160ff19168380011785556115b7565b828001600101855582156115b7579182015b828111156115b757825182559160200191906001019061159c565b506115c39291506115c7565b5090565b5b808211156115c357600081556001016115c8565b600181811c908216806115f057607f821691505b60208210810361161057634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561162857600080fd5b81356001600160e01b03198116811461164057600080fd5b9392505050565b6001600160a01b038116811461142c57600080fd5b60008083601f84011261166e57600080fd5b50813567ffffffffffffffff81111561168657600080fd5b60208301915083602082850101111561169e57600080fd5b9250929050565b60008060008060008060008060c0898b0312156116c157600080fd5b8835975060208901356116d381611647565b96506040890135955060608901359450608089013567ffffffffffffffff808211156116fe57600080fd5b61170a8c838d0161165c565b909650945060a08b013591508082111561172357600080fd5b506117308b828c0161165c565b999c989b5096995094979396929594505050565b801515811461142c57600080fd5b803561153e81611744565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561179c5761179c61175d565b604052919050565b600082601f8301126117b557600080fd5b813567ffffffffffffffff8111156117cf576117cf61175d565b6117e2601f8201601f1916602001611773565b8181528460208386010111156117f757600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060c0878903121561182d57600080fd5b86359550602087013561183f81611647565b9450604087013561184f81611744565b9350606087013567ffffffffffffffff8082111561186c57600080fd5b6118788a838b016117a4565b9450608089013591508082111561188e57600080fd5b5061189b89828a016117a4565b92505060a08701356118ac81611744565b809150509295509295509295565b600080600080608085870312156118d057600080fd5b84356118db81611647565b935060208501356118eb81611647565b925060408501359150606085013567ffffffffffffffff81111561190e57600080fd5b61191a878288016117a4565b91505092959194509250565b60005b83811015611941578181015183820152602001611929565b838111156111595750506000910152565b6000815180845261196a816020860160208601611926565b601f01601f19169290920160200192915050565b6020815260006116406020830184611952565b60008060008060008060008060008060006101208c8e0312156119b357600080fd5b8b359a506119c460208d0135611647565b60208c0135995060408c0135985060608c013597506119e660808d0135611647565b60808c0135965060a08c01359550611a0060c08d01611752565b945067ffffffffffffffff8060e08e01351115611a1c57600080fd5b611a2c8e60e08f01358f0161165c565b90955093506101008d0135811015611a4357600080fd5b50611a558d6101008e01358e0161165c565b81935080925050509295989b509295989b9093969950565b600082601f830112611a7e57600080fd5b8135602067ffffffffffffffff821115611a9a57611a9a61175d565b8160051b611aa9828201611773565b9283528481018201928281019087851115611ac357600080fd5b83870192505b84831015611ae257823582529183019190830190611ac9565b979650505050505050565b600080600080600060a08688031215611b0557600080fd5b8535611b1081611647565b94506020860135611b2081611647565b9350604086013567ffffffffffffffff80821115611b3d57600080fd5b611b4989838a01611a6d565b94506060880135915080821115611b5f57600080fd5b611b6b89838a01611a6d565b93506080880135915080821115611b8157600080fd5b50611b8e888289016117a4565b9150509295509295909350565b600080600060608486031215611bb057600080fd5b8335611bbb81611647565b92506020840135611bcb81611647565b929592945050506040919091013590565b600080600080600080600080610100898b031215611bf957600080fd5b883597506020890135611c0b81611647565b96506040890135611c1b81611744565b9550606089013567ffffffffffffffff80821115611c3857600080fd5b611c448c838d016117a4565b965060808b0135915080821115611c5a57600080fd5b50611c678b828c016117a4565b94505060a0890135611c7881611744565b925060c0890135611c8881611647565b915060e0890135611c9881611647565b809150509295985092959890939650565b60008060008060808587031215611cbf57600080fd5b8435611cca81611647565b93506020850135611cda81611647565b93969395505050506040820135916060013590565b600080600080600060a08688031215611d0757600080fd5b8535611d1281611647565b94506020860135611d2281611647565b93506040860135925060608601359150608086013567ffffffffffffffff811115611d4c57600080fd5b611b8e888289016117a4565b600060208284031215611d6a57600080fd5b813561164081611647565b600060208284031215611d8757600080fd5b815161164081611647565b600060208284031215611da457600080fd5b5051919050565b600060208284031215611dbd57600080fd5b815161164081611744565b85815284602082015260018060a01b038416604082015260a060608201526000611df560a0830185611952565b8281036080840152611e078185611952565b98975050505050505050565b888152602081018890526001600160a01b038781166040830152861660608201526080810185905283151560a082015261010060c08201819052600090611e5c83820186611952565b905082810360e0840152611e708185611952565b9b9a5050505050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b8054600090600181811c9080831680611ece57607f831692505b60208084108203611eef57634e487b7160e01b600052602260045260246000fd5b818015611f035760018114611f1457611f40565b60ff19861689528489019650611f40565b876000528160002060005b86811015611f385781548b820152908501908301611f1f565b505084890196505b50505050505092915050565b60006116408284611eb4565b60008251611f6a818460208701611926565b9190910192915050565b851515815260a060208201526000611f8f60a0830187611952565b8281036040840152611fa18187611952565b941515606084015250506001600160a01b03919091166080909101529392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea2646970667358221220398a198bb0e0d9859ccc47ce139a9dd47c329f5a42e2a4b8c28628c6e9ead41264736f6c634300080d0033";

type JBETHERC20ProjectPayerTokensReceiverCloneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBETHERC20ProjectPayerTokensReceiverCloneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBETHERC20ProjectPayerTokensReceiverClone__factory extends ContractFactory {
  constructor(
    ...args: JBETHERC20ProjectPayerTokensReceiverCloneConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "JBETHERC20ProjectPayerTokensReceiverClone";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBETHERC20ProjectPayerTokensReceiverClone> {
    return super.deploy(
      overrides || {}
    ) as Promise<JBETHERC20ProjectPayerTokensReceiverClone>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): JBETHERC20ProjectPayerTokensReceiverClone {
    return super.attach(address) as JBETHERC20ProjectPayerTokensReceiverClone;
  }
  connect(signer: Signer): JBETHERC20ProjectPayerTokensReceiverClone__factory {
    return super.connect(
      signer
    ) as JBETHERC20ProjectPayerTokensReceiverClone__factory;
  }
  static readonly contractName: "JBETHERC20ProjectPayerTokensReceiverClone";
  public readonly contractName: "JBETHERC20ProjectPayerTokensReceiverClone";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBETHERC20ProjectPayerTokensReceiverCloneInterface {
    return new utils.Interface(
      _abi
    ) as JBETHERC20ProjectPayerTokensReceiverCloneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBETHERC20ProjectPayerTokensReceiverClone {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as JBETHERC20ProjectPayerTokensReceiverClone;
  }
}
