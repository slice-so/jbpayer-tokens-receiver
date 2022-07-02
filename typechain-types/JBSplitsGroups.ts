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

export interface JBSplitsGroupsInterface extends utils.Interface {
  contractName: "JBSplitsGroups";
  functions: {
    "ETH_PAYOUT()": FunctionFragment;
    "RESERVED_TOKENS()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ETH_PAYOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RESERVED_TOKENS",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ETH_PAYOUT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "RESERVED_TOKENS",
    data: BytesLike
  ): Result;

  events: {};
}

export interface JBSplitsGroups extends BaseContract {
  contractName: "JBSplitsGroups";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBSplitsGroupsInterface;

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
    ETH_PAYOUT(overrides?: CallOverrides): Promise<[BigNumber]>;

    RESERVED_TOKENS(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ETH_PAYOUT(overrides?: CallOverrides): Promise<BigNumber>;

  RESERVED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ETH_PAYOUT(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ETH_PAYOUT(overrides?: CallOverrides): Promise<BigNumber>;

    RESERVED_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH_PAYOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RESERVED_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
