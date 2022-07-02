/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JBTokens, JBTokensInterface } from "../JBTokens";

const _abi = [
  {
    inputs: [],
    name: "ETH",
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
];

const _bytecode =
  "0x6092610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80638322fff2146038575b600080fd5b604061eeee81565b6040516001600160a01b03909116815260200160405180910390f3fea26469706673582212206dc3bb7ef6cf1ec22b45faec3bbd3c79d2953adc17e5de42649cc478d92b6a1564736f6c634300080d0033";

type JBTokensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JBTokensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JBTokens__factory extends ContractFactory {
  constructor(...args: JBTokensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "JBTokens";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JBTokens> {
    return super.deploy(overrides || {}) as Promise<JBTokens>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): JBTokens {
    return super.attach(address) as JBTokens;
  }
  connect(signer: Signer): JBTokens__factory {
    return super.connect(signer) as JBTokens__factory;
  }
  static readonly contractName: "JBTokens";
  public readonly contractName: "JBTokens";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JBTokensInterface {
    return new utils.Interface(_abi) as JBTokensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JBTokens {
    return new Contract(address, _abi, signerOrProvider) as JBTokens;
  }
}
