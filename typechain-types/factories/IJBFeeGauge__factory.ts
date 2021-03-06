/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IJBFeeGauge, IJBFeeGaugeInterface } from "../IJBFeeGauge";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_projectId",
        type: "uint256",
      },
    ],
    name: "currentDiscountFor",
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

export class IJBFeeGauge__factory {
  static readonly abi = _abi;
  static createInterface(): IJBFeeGaugeInterface {
    return new utils.Interface(_abi) as IJBFeeGaugeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJBFeeGauge {
    return new Contract(address, _abi, signerOrProvider) as IJBFeeGauge;
  }
}
