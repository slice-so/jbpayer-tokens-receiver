/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IJBSplitsStore,
  IJBSplitsStoreInterface,
} from "../IJBSplitsStore";

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
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SetSplit",
    type: "event",
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
    inputs: [],
    name: "projects",
    outputs: [
      {
        internalType: "contract IJBProjects",
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
        name: "_domain",
        type: "uint256",
      },
      {
        components: [
          {
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
            internalType: "struct JBSplit[]",
            name: "splits",
            type: "tuple[]",
          },
        ],
        internalType: "struct JBGroupedSplits[]",
        name: "_groupedSplits",
        type: "tuple[]",
      },
    ],
    name: "set",
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
    name: "splitsOf",
    outputs: [
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
        internalType: "struct JBSplit[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IJBSplitsStore__factory {
  static readonly abi = _abi;
  static createInterface(): IJBSplitsStoreInterface {
    return new utils.Interface(_abi) as IJBSplitsStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJBSplitsStore {
    return new Contract(address, _abi, signerOrProvider) as IJBSplitsStore;
  }
}
