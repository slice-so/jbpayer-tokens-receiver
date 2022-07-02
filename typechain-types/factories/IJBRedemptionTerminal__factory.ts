/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IJBRedemptionTerminal,
  IJBRedemptionTerminalInterface,
} from "../IJBRedemptionTerminal";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenCount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minReturnedTokens",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
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
    name: "redeemTokensOf",
    outputs: [
      {
        internalType: "uint256",
        name: "reclaimAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IJBRedemptionTerminal__factory {
  static readonly abi = _abi;
  static createInterface(): IJBRedemptionTerminalInterface {
    return new utils.Interface(_abi) as IJBRedemptionTerminalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJBRedemptionTerminal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IJBRedemptionTerminal;
  }
}
