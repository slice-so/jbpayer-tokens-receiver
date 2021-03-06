/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IJBETHERC20ProjectPayerDeployer,
  IJBETHERC20ProjectPayerDeployerInterface,
} from "../IJBETHERC20ProjectPayerDeployer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IJBProjectPayer",
        name: "projectPayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "defaultProjectId",
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
        internalType: "bool",
        name: "defaultPreferClaimedTokens",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "defaultMemo",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "defaultMetadata",
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
        internalType: "contract IJBDirectory",
        name: "directory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "DeployProjectPayer",
    type: "event",
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
        name: "_preferAddToBalance",
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
    name: "deployProjectPayer",
    outputs: [
      {
        internalType: "contract IJBProjectPayer",
        name: "projectPayer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IJBETHERC20ProjectPayerDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): IJBETHERC20ProjectPayerDeployerInterface {
    return new utils.Interface(
      _abi
    ) as IJBETHERC20ProjectPayerDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJBETHERC20ProjectPayerDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IJBETHERC20ProjectPayerDeployer;
  }
}
