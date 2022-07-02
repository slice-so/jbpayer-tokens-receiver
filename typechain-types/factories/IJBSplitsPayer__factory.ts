/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IJBSplitsPayer,
  IJBSplitsPayerInterface,
} from "../IJBSplitsPayer";

const _abi = [
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
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leftoverAmount",
        type: "uint256",
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
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AddToBalance",
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
        internalType: "uint256",
        name: "domain",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "group",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "preferClaimed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "preferAddToBalance",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "percent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "projectId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lockedUntil",
            type: "uint256",
          },
          {
            internalType: "contract IJBSplitAllocator",
            name: "allocator",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct JBSplit",
        name: "split",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "defaultBeneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "DistributeToSplit",
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
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leftoverAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minReturnedTokens",
        type: "uint256",
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
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Pay",
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
        internalType: "uint256",
        name: "domain",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "group",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetDefaultSplits",
    type: "event",
  },
  {
    inputs: [],
    name: "defaultSplitsDomain",
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
    name: "defaultSplitsGroup",
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
    name: "defaultSplitsProjectId",
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
        name: "_projectId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_domain",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_group",
        type: "uint256",
      },
    ],
    name: "setDefaultSplits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splitsStore",
    outputs: [
      {
        internalType: "contract IJBSplitsStore",
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
        internalType: "bytes4",
        name: "interfaceId",
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

export class IJBSplitsPayer__factory {
  static readonly abi = _abi;
  static createInterface(): IJBSplitsPayerInterface {
    return new utils.Interface(_abi) as IJBSplitsPayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJBSplitsPayer {
    return new Contract(address, _abi, signerOrProvider) as IJBSplitsPayer;
  }
}
