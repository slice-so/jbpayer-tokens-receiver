/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JBConstants, JBConstantsInterface } from "../JBConstants";

const _abi = [
  {
    inputs: [],
    name: "MAX_DISCOUNT_RATE",
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
    name: "MAX_FEE",
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
    name: "MAX_FEE_DISCOUNT",
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
    name: "MAX_REDEMPTION_RATE",
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
    name: "MAX_RESERVED_RATE",
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
    name: "SPLITS_TOTAL_PERCENT",
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
];

const _bytecode =
  "0x60c4610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060655760003560e01c806319a9f94114606a5780634bb970421460865780635d14fef8146086578063870bc1fd14606a578063bc063e1a14606a578063d3c4fca914606a575b600080fd5b6074633b9aca0081565b60405190815260200160405180910390f35b60746127108156fea2646970667358221220d1c8f1609042f3361c787dbadab5296d3bc1cdcc16bc1bb5dceb3d9c49794df564736f6c634300080d0033";

type JBConstantsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBConstantsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBConstants__factory extends ContractFactory {
  constructor(...args: JBConstantsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "JBConstants";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBConstants> {
    return super.deploy(overrides || {}) as Promise<JBConstants>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): JBConstants {
    return super.attach(address) as JBConstants;
  }
  connect(signer: Signer): JBConstants__factory {
    return super.connect(signer) as JBConstants__factory;
  }
  static readonly contractName: "JBConstants";
  public readonly contractName: "JBConstants";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBConstantsInterface {
    return new utils.Interface(_abi) as JBConstantsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBConstants {
    return new Contract(address, _abi, signerOrProvider) as JBConstants;
  }
}
