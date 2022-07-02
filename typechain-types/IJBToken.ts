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
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IJBTokenInterface extends utils.Interface {
  contractName: "IJBToken";
  functions: {
    "approve(uint256,address,uint256)": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "burn(uint256,address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "mint(uint256,address,uint256)": FunctionFragment;
    "totalSupply(uint256)": FunctionFragment;
    "transfer(uint256,address,uint256)": FunctionFragment;
    "transferFrom(uint256,address,address,uint256)": FunctionFragment;
    "transferOwnership(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IJBToken extends BaseContract {
  contractName: "IJBToken";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBTokenInterface;

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
    approve(
      arg0: BigNumberish,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      _account: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    mint(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transfer(
      _projectId: BigNumberish,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      _projectId: BigNumberish,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      _projectId: BigNumberish,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  approve(
    arg0: BigNumberish,
    _spender: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    _account: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    _projectId: BigNumberish,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  mint(
    _projectId: BigNumberish,
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transfer(
    _projectId: BigNumberish,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    _projectId: BigNumberish,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    _projectId: BigNumberish,
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approve(
      arg0: BigNumberish,
      _spender: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      _account: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    mint(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transfer(
      _projectId: BigNumberish,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferFrom(
      _projectId: BigNumberish,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      _projectId: BigNumberish,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approve(
      arg0: BigNumberish,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      _account: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transfer(
      _projectId: BigNumberish,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      _projectId: BigNumberish,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      _projectId: BigNumberish,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      arg0: BigNumberish,
      _spender: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      _account: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      _projectId: BigNumberish,
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transfer(
      _projectId: BigNumberish,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _projectId: BigNumberish,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      _projectId: BigNumberish,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}