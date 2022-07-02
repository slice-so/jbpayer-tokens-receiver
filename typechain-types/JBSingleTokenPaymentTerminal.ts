/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface JBSingleTokenPaymentTerminalInterface extends utils.Interface {
  contractName: "JBSingleTokenPaymentTerminal";
  functions: {
    "acceptsToken(address,uint256)": FunctionFragment;
    "addToBalanceOf(uint256,uint256,address,string,bytes)": FunctionFragment;
    "currency()": FunctionFragment;
    "currencyForToken(address)": FunctionFragment;
    "currentEthOverflowOf(uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "decimalsForToken(address)": FunctionFragment;
    "pay(uint256,uint256,address,address,uint256,bool,string,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptsToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToBalanceOf",
    values: [BigNumberish, BigNumberish, string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "currency", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currencyForToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentEthOverflowOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decimalsForToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      boolean,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currency", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currencyForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentEthOverflowOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decimalsForToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export interface JBSingleTokenPaymentTerminal extends BaseContract {
  contractName: "JBSingleTokenPaymentTerminal";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBSingleTokenPaymentTerminalInterface;

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
    acceptsToken(
      _token: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    addToBalanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currency(overrides?: CallOverrides): Promise<[BigNumber]>;

    currencyForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentEthOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimalsForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pay(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _beneficiary: string,
      _minReturnedTokens: BigNumberish,
      _preferClaimedTokens: boolean,
      _memo: string,
      _metadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptsToken(
    _token: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  addToBalanceOf(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    _memo: string,
    _metadata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currency(overrides?: CallOverrides): Promise<BigNumber>;

  currencyForToken(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentEthOverflowOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<BigNumber>;

  decimalsForToken(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pay(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _token: string,
    _beneficiary: string,
    _minReturnedTokens: BigNumberish,
    _preferClaimedTokens: boolean,
    _memo: string,
    _metadata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptsToken(
      _token: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    addToBalanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    currency(overrides?: CallOverrides): Promise<BigNumber>;

    currencyForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentEthOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decimalsForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pay(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _beneficiary: string,
      _minReturnedTokens: BigNumberish,
      _preferClaimedTokens: boolean,
      _memo: string,
      _metadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    acceptsToken(
      _token: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addToBalanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currency(overrides?: CallOverrides): Promise<BigNumber>;

    currencyForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentEthOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decimalsForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pay(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _beneficiary: string,
      _minReturnedTokens: BigNumberish,
      _preferClaimedTokens: boolean,
      _memo: string,
      _metadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptsToken(
      _token: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addToBalanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currency(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currencyForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentEthOverflowOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimalsForToken(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pay(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _token: string,
      _beneficiary: string,
      _minReturnedTokens: BigNumberish,
      _preferClaimedTokens: boolean,
      _memo: string,
      _metadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
