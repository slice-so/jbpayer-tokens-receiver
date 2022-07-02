/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IJBPaymentTerminalUtilityInterface extends utils.Interface {
  contractName: "IJBPaymentTerminalUtility";
  functions: {
    "directory()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "directory", values?: undefined): string;

  decodeFunctionResult(functionFragment: "directory", data: BytesLike): Result;

  events: {};
}

export interface IJBPaymentTerminalUtility extends BaseContract {
  contractName: "IJBPaymentTerminalUtility";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBPaymentTerminalUtilityInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    directory(overrides?: CallOverrides): Promise<[string]>;
  };

  directory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    directory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    directory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    directory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
