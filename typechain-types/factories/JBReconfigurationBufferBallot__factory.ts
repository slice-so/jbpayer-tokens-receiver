/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  JBReconfigurationBufferBallot,
  JBReconfigurationBufferBallotInterface,
} from "../JBReconfigurationBufferBallot";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "contract IJBFundingCycleStore",
        name: "_fundingCycleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "uint256",
        name: "configuration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum JBBallotState",
        name: "ballotState",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Finalize",
    type: "event",
  },
  {
    inputs: [],
    name: "duration",
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
    inputs: [
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
    ],
    name: "finalState",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "",
        type: "uint8",
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
        internalType: "uint256",
        name: "_configured",
        type: "uint256",
      },
    ],
    name: "finalize",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "ballotState",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundingCycleStore",
    outputs: [
      {
        internalType: "contract IJBFundingCycleStore",
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
        internalType: "uint256",
        name: "_configured",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
    ],
    name: "stateOf",
    outputs: [
      {
        internalType: "enum JBBallotState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161067838038061067883398101604081905261002f91610046565b6080919091526001600160a01b031660a052610083565b6000806040838503121561005957600080fd5b825160208401519092506001600160a01b038116811461007857600080fd5b809150509250929050565b60805160a0516105c46100b46000396000818160c901526102870152600081816094015261020d01526105c46000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806301ffc9a7146100675780630fb5a6b41461008f578063557e7155146100c45780637416790714610103578063a994c09f14610123578063b6013cef1461014e575b600080fd5b61007a6100753660046103de565b610161565b60405190151581526020015b60405180910390f35b6100b67f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610086565b6100eb7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610086565b610116610111366004610408565b6101b3565b604051610086919061044a565b610116610131366004610472565b600060208181529281526040808220909352908152205460ff1681565b61011661015c366004610472565b61025d565b60006001600160e01b03198216634aeb8d2560e01b148061019257506001600160e01b03198216637ba3dfb360e01b145b806101ad57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60008060008581526020818152604080832087845290915290205460ff1660028111156101e2576101e2610434565b14610208575060008381526020818152604080832085845290915290205460ff16610256565b6102327f000000000000000000000000000000000000000000000000000000000000000084610494565b421015610252578142101561024857600061024b565b60025b9050610256565b5060015b9392505050565b60405163334f245560e11b8152600481018390526024810182905260009081906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063669e48aa9060440161012060405180830381865afa1580156102cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f3919061050e565b60008581526020818152604080832087845290915281205460ff16935090915082600281111561032557610325610434565b036103d757610339848483606001516101b3565b9150600082600281111561034f5761034f610434565b146103d7576000848152602081815260408083208684529091529020805483919060ff1916600183600281111561038857610388610434565b021790555081600281111561039f5761039f610434565b604051338152849086907f7e3b0e79d754a8d4c902d51b0deb131c43d7a702f465413e38db25cf786b0b349060200160405180910390a45b5092915050565b6000602082840312156103f057600080fd5b81356001600160e01b03198116811461025657600080fd5b60008060006060848603121561041d57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052602160045260246000fd5b602081016003831061046c57634e487b7160e01b600052602160045260246000fd5b91905290565b6000806040838503121561048557600080fd5b50508035926020909101359150565b600082198211156104b557634e487b7160e01b600052601160045260246000fd5b500190565b604051610120810167ffffffffffffffff811182821017156104ec57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461050957600080fd5b919050565b6000610120828403121561052157600080fd5b6105296104ba565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015261057560e084016104f2565b60e082015261010092830151928101929092525091905056fea26469706673582212202b4ff76849aba9e06c51b1fc12a7eab4a63e2250200738189b6e9cfc1b1d2ef664736f6c634300080d0033";

type JBReconfigurationBufferBallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBReconfigurationBufferBallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBReconfigurationBufferBallot__factory extends ContractFactory {
  constructor(...args: JBReconfigurationBufferBallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "JBReconfigurationBufferBallot";
  }

  deploy(
    _duration: BigNumberish,
    _fundingCycleStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBReconfigurationBufferBallot> {
    return super.deploy(
      _duration,
      _fundingCycleStore,
      overrides || {}
    ) as Promise<JBReconfigurationBufferBallot>;
  }
  getDeployTransaction(
    _duration: BigNumberish,
    _fundingCycleStore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _duration,
      _fundingCycleStore,
      overrides || {}
    );
  }
  attach(address: string): JBReconfigurationBufferBallot {
    return super.attach(address) as JBReconfigurationBufferBallot;
  }
  connect(signer: Signer): JBReconfigurationBufferBallot__factory {
    return super.connect(signer) as JBReconfigurationBufferBallot__factory;
  }
  static readonly contractName: "JBReconfigurationBufferBallot";
  public readonly contractName: "JBReconfigurationBufferBallot";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBReconfigurationBufferBallotInterface {
    return new utils.Interface(_abi) as JBReconfigurationBufferBallotInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBReconfigurationBufferBallot {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as JBReconfigurationBufferBallot;
  }
}
