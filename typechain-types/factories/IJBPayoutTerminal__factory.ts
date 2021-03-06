/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IJBPayoutTerminal,
  IJBPayoutTerminalInterface,
} from "../IJBPayoutTerminal";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_currency",
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
        internalType: "string",
        name: "_memo",
        type: "string",
      },
    ],
    name: "distributePayoutsOf",
    outputs: [
      {
        internalType: "uint256",
        name: "netLeftoverDistributionAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IJBPayoutTerminal__factory {
  static readonly abi = _abi;
  static createInterface(): IJBPayoutTerminalInterface {
    return new utils.Interface(_abi) as IJBPayoutTerminalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJBPayoutTerminal {
    return new Contract(address, _abi, signerOrProvider) as IJBPayoutTerminal;
  }
}
