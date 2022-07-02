/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JBETHERC20ProjectPayerClone,
  JBETHERC20ProjectPayerCloneInterface,
} from "../JBETHERC20ProjectPayerClone";

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
  "0x608060405234801561001057600080fd5b50611a6a806100206000396000f3fe6080604052600436106100ec5760003560e01c80638293fee61161008a578063b96053df11610059578063b96053df146104f3578063c41c2f2414610508578063dd74234114610528578063f2fde38b1461054857600080fd5b80638293fee6146104875780638da5cb5b1461049a57806393b7f154146104b8578063a4919eb1146104d257600080fd5b80633ce9830b116100c65780633ce9830b146103f457806354ab58af14610418578063715018a6146104505780637e6465491461046557600080fd5b806301ffc9a71461038c57806309a6b7e5146103c15780630e45f78e146103d457600080fd5b3661038757609c5460ff16156102255761022360985461eeee476012609a805461011590611298565b80601f016020809104026020016040519081016040528092919081815260200182805461014190611298565b801561018e5780601f106101635761010080835404028352916020019161018e565b820191906000526020600020905b81548152906001019060200180831161017157829003601f168201915b5050505050609b80546101a090611298565b80601f01602080910402602001604051908101604052809291908181526020018280546101cc90611298565b80156102195780601f106101ee57610100808354040283529160200191610219565b820191906000526020600020905b8154815290600101906020018083116101fc57829003601f168201915b5050505050610568565b005b609854609954610223919061eeee9047906012906001600160a01b031615610258576099546001600160a01b031661025a565b335b6000609960149054906101000a900460ff16609a805461027990611298565b80601f01602080910402602001604051908101604052809291908181526020018280546102a590611298565b80156102f25780601f106102c7576101008083540402835291602001916102f2565b820191906000526020600020905b8154815290600101906020018083116102d557829003601f168201915b5050505050609b805461030490611298565b80601f016020809104026020016040519081016040528092919081815260200182805461033090611298565b801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b50505050506107a9565b600080fd5b34801561039857600080fd5b506103ac6103a73660046112d2565b610a26565b60405190151581526020015b60405180910390f35b6102236103cf366004611361565b610a5d565b3480156103e057600080fd5b506102236103ef3660046114bc565b610b94565b34801561040057600080fd5b5061040a60985481565b6040519081526020016103b8565b34801561042457600080fd5b50609954610438906001600160a01b031681565b6040516001600160a01b0390911681526020016103b8565b34801561045c57600080fd5b50610223610d7c565b34801561047157600080fd5b5061047a610db2565b6040516103b891906115be565b6102236104953660046115d1565b610e40565b3480156104a657600080fd5b506033546001600160a01b0316610438565b3480156104c457600080fd5b50609c546103ac9060ff1681565b3480156104de57600080fd5b506099546103ac90600160a01b900460ff1681565b3480156104ff57600080fd5b5061047a610f7d565b34801561051457600080fd5b50609754610438906001600160a01b031681565b34801561053457600080fd5b506102236105433660046116ad565b610f8a565b34801561055457600080fd5b5061022361056336600461177a565b611085565b609754604051630862026560e41b8152600481018890526001600160a01b0387811660248301526000921690638620265090604401602060405180830381865afa1580156105ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105de9190611797565b90506001600160a01b03811661060757604051637dd086eb60e11b815260040160405180910390fd5b60405163b7bad1b160e01b81526001600160a01b03878116600483015285919083169063b7bad1b190602401602060405180830381865afa158015610650573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067491906117b4565b1461069257604051632e5c964960e21b815260040160405180910390fd5b6001600160a01b03861661eeee146107195760405163095ea7b360e01b81526001600160a01b0382811660048301526024820187905287169063095ea7b3906044016020604051808303816000875af11580156106f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071791906117cd565b505b60006001600160a01b03871661eeee14610734576000610736565b855b9050816001600160a01b0316630cf8e858828a898b89896040518763ffffffff1660e01b815260040161076d9594939291906117ea565b6000604051808303818588803b15801561078657600080fd5b505af115801561079a573d6000803e3d6000fd5b50505050505050505050505050565b609754604051630862026560e41b8152600481018b90526001600160a01b038a811660248301526000921690638620265090604401602060405180830381865afa1580156107fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081f9190611797565b90506001600160a01b03811661084857604051637dd086eb60e11b815260040160405180910390fd5b60405163b7bad1b160e01b81526001600160a01b038a8116600483015288919083169063b7bad1b190602401602060405180830381865afa158015610891573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b591906117b4565b146108d357604051632e5c964960e21b815260040160405180910390fd5b6001600160a01b03891661eeee1461095a5760405163095ea7b360e01b81526001600160a01b038281166004830152602482018a90528a169063095ea7b3906044016020604051808303816000875af1158015610934573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095891906117cd565b505b60006001600160a01b038a1661eeee14610975576000610977565b885b9050816001600160a01b0316631ebc263f828d8c8e60006001600160a01b03168d6001600160a01b0316036109ac57336109ae565b8c5b8c8c8c8c6040518a63ffffffff1660e01b81526004016109d5989796959493929190611835565b60206040518083038185885af11580156109f3573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610a1891906117b4565b505050505050505050505050565b60006001600160e01b03198216636c8609bf60e11b1480610a5757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b03871661eeee14610b0b573415610a8e57604051635e7e9adf60e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018790526001600160a01b038816906323b872dd906064016020604051808303816000875af1158015610ae1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0591906117cd565b50610b13565b349550601294505b610b8a8888888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a915089908190840183828082843760009201919091525061056892505050565b5050505050505050565b6033546001600160a01b03163314610bc75760405162461bcd60e51b8152600401610bbe906118a1565b60405180910390fd5b6098548614610bd65760988690555b6099546001600160a01b03868116911614610c0757609980546001600160a01b0319166001600160a01b0387161790555b609960149054906101000a900460ff16151584151514610c39576099805460ff60a01b1916600160a01b861515021790555b609a604051602001610c4b919061196e565b6040516020818303038152906040528051906020012083604051602001610c72919061197a565b6040516020818303038152906040528051906020012014610ca2578251610ca090609a9060208601906111ff565b505b609b604051602001610cb4919061196e565b6040516020818303038152906040528051906020012082604051602001610cdb919061197a565b6040516020818303038152906040528051906020012014610d0b578151610d0990609b9060208501906111ff565b505b609c5460ff16151581151514610d2a57609c805460ff19168215151790555b846001600160a01b0316867f36b1c5cef608e320317b9ee5155756634c65fe7055b424ce57e2f6c59eec79478686868633604051610d6c959493929190611996565b60405180910390a3505050505050565b6033546001600160a01b03163314610da65760405162461bcd60e51b8152600401610bbe906118a1565b610db06000611120565b565b609b8054610dbf90611298565b80601f0160208091040260200160405190810160405280929190818152602001828054610deb90611298565b8015610e385780601f10610e0d57610100808354040283529160200191610e38565b820191906000526020600020905b815481529060010190602001808311610e1b57829003601f168201915b505050505081565b6001600160a01b038a1661eeee14610eee573415610e7157604051635e7e9adf60e11b815260040160405180910390fd5b6040516323b872dd60e01b8152336004820152306024820152604481018a90526001600160a01b038b16906323b872dd906064016020604051808303816000875af1158015610ec4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee891906117cd565b50610ef6565b349850601297505b610f708b8b8b8b8b8b8b8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8f018190048102820181019092528d815292508d91508c90819084018382808284376000920191909152506107a992505050565b5050505050505050505050565b609a8054610dbf90611298565b6000610f966001611172565b90508015610fae576000805461ff0019166101001790555b609889905560998054881515600160a01b026001600160a81b03199091166001600160a01b038b16171790558551610fed90609a9060208901906111ff565b50845161100190609b9060208801906111ff565b50609c805460ff1916851515179055609780546001600160a01b0319166001600160a01b03851617905561103482611120565b801561107a576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050505050505050565b6033546001600160a01b031633146110af5760405162461bcd60e51b8152600401610bbe906118a1565b6001600160a01b0381166111145760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610bbe565b61111d81611120565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff16156111b9578160ff1660011480156111955750303b155b6111b15760405162461bcd60e51b8152600401610bbe906119e6565b506000919050565b60005460ff8084169116106111e05760405162461bcd60e51b8152600401610bbe906119e6565b506000805460ff191660ff92909216919091179055600190565b919050565b82805461120b90611298565b90600052602060002090601f01602090048101928261122d5760008555611273565b82601f1061124657805160ff1916838001178555611273565b82800160010185558215611273579182015b82811115611273578251825591602001919060010190611258565b5061127f929150611283565b5090565b5b8082111561127f5760008155600101611284565b600181811c908216806112ac57607f821691505b6020821081036112cc57634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156112e457600080fd5b81356001600160e01b0319811681146112fc57600080fd5b9392505050565b6001600160a01b038116811461111d57600080fd5b60008083601f84011261132a57600080fd5b50813567ffffffffffffffff81111561134257600080fd5b60208301915083602082850101111561135a57600080fd5b9250929050565b60008060008060008060008060c0898b03121561137d57600080fd5b88359750602089013561138f81611303565b96506040890135955060608901359450608089013567ffffffffffffffff808211156113ba57600080fd5b6113c68c838d01611318565b909650945060a08b01359150808211156113df57600080fd5b506113ec8b828c01611318565b999c989b5096995094979396929594505050565b801515811461111d57600080fd5b80356111fa81611400565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261144057600080fd5b813567ffffffffffffffff8082111561145b5761145b611419565b604051601f8301601f19908116603f0116810190828211818310171561148357611483611419565b8160405283815286602085880101111561149c57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c087890312156114d557600080fd5b8635955060208701356114e781611303565b945060408701356114f781611400565b9350606087013567ffffffffffffffff8082111561151457600080fd5b6115208a838b0161142f565b9450608089013591508082111561153657600080fd5b5061154389828a0161142f565b92505060a087013561155481611400565b809150509295509295509295565b60005b8381101561157d578181015183820152602001611565565b8381111561158c576000848401525b50505050565b600081518084526115aa816020860160208601611562565b601f01601f19169290920160200192915050565b6020815260006112fc6020830184611592565b60008060008060008060008060008060006101208c8e0312156115f357600080fd5b8b359a5061160460208d0135611303565b60208c0135995060408c0135985060608c0135975061162660808d0135611303565b60808c0135965060a08c0135955061164060c08d0161140e565b945067ffffffffffffffff8060e08e0135111561165c57600080fd5b61166c8e60e08f01358f01611318565b90955093506101008d013581101561168357600080fd5b506116958d6101008e01358e01611318565b81935080925050509295989b509295989b9093969950565b600080600080600080600080610100898b0312156116ca57600080fd5b8835975060208901356116dc81611303565b965060408901356116ec81611400565b9550606089013567ffffffffffffffff8082111561170957600080fd5b6117158c838d0161142f565b965060808b013591508082111561172b57600080fd5b506117388b828c0161142f565b94505060a089013561174981611400565b925060c089013561175981611303565b915060e089013561176981611303565b809150509295985092959890939650565b60006020828403121561178c57600080fd5b81356112fc81611303565b6000602082840312156117a957600080fd5b81516112fc81611303565b6000602082840312156117c657600080fd5b5051919050565b6000602082840312156117df57600080fd5b81516112fc81611400565b85815284602082015260018060a01b038416604082015260a06060820152600061181760a0830185611592565b82810360808401526118298185611592565b98975050505050505050565b888152602081018890526001600160a01b038781166040830152861660608201526080810185905283151560a082015261010060c0820181905260009061187e83820186611592565b905082810360e08401526118928185611592565b9b9a5050505050505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b8054600090600181811c90808316806118f057607f831692505b6020808410820361191157634e487b7160e01b600052602260045260246000fd5b818015611925576001811461193657611962565b60ff19861689528489019650611962565b876000528160002060005b8681101561195a5781548b820152908501908301611941565b505084890196505b50505050505092915050565b60006112fc82846118d6565b6000825161198c818460208701611562565b9190910192915050565b851515815260a0602082015260006119b160a0830187611592565b82810360408401526119c38187611592565b941515606084015250506001600160a01b03919091166080909101529392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea2646970667358221220eee233475dc78280f8987d2dfa79b07ed925105da9306035f95234d8bb8d1c2264736f6c634300080d0033";

type JBETHERC20ProjectPayerCloneConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBETHERC20ProjectPayerCloneConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBETHERC20ProjectPayerClone__factory extends ContractFactory {
  constructor(...args: JBETHERC20ProjectPayerCloneConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "JBETHERC20ProjectPayerClone";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBETHERC20ProjectPayerClone> {
    return super.deploy(
      overrides || {}
    ) as Promise<JBETHERC20ProjectPayerClone>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): JBETHERC20ProjectPayerClone {
    return super.attach(address) as JBETHERC20ProjectPayerClone;
  }
  connect(signer: Signer): JBETHERC20ProjectPayerClone__factory {
    return super.connect(signer) as JBETHERC20ProjectPayerClone__factory;
  }
  static readonly contractName: "JBETHERC20ProjectPayerClone";
  public readonly contractName: "JBETHERC20ProjectPayerClone";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBETHERC20ProjectPayerCloneInterface {
    return new utils.Interface(_abi) as JBETHERC20ProjectPayerCloneInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBETHERC20ProjectPayerClone {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as JBETHERC20ProjectPayerClone;
  }
}
