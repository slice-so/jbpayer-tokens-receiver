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

export type JBFundingCycleStruct = {
  number: BigNumberish;
  configuration: BigNumberish;
  basedOn: BigNumberish;
  start: BigNumberish;
  duration: BigNumberish;
  weight: BigNumberish;
  discountRate: BigNumberish;
  ballot: string;
  metadata: BigNumberish;
};

export type JBFundingCycleStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  BigNumber
] & {
  number: BigNumber;
  configuration: BigNumber;
  basedOn: BigNumber;
  start: BigNumber;
  duration: BigNumber;
  weight: BigNumber;
  discountRate: BigNumber;
  ballot: string;
  metadata: BigNumber;
};

export type JBTokenAmountStruct = {
  token: string;
  value: BigNumberish;
  decimals: BigNumberish;
  currency: BigNumberish;
};

export type JBTokenAmountStructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  token: string;
  value: BigNumber;
  decimals: BigNumber;
  currency: BigNumber;
};

export interface IJBSingleTokenPaymentTerminalStoreInterface
  extends utils.Interface {
  contractName: "IJBSingleTokenPaymentTerminalStore";
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "currentOverflowOf(address,uint256)": FunctionFragment;
    "currentReclaimableOverflowOf(uint256,uint256,uint256,uint256)": FunctionFragment;
    "currentTotalOverflowOf(uint256,uint256,uint256)": FunctionFragment;
    "directory()": FunctionFragment;
    "fundingCycleStore()": FunctionFragment;
    "prices()": FunctionFragment;
    "recordAddedBalanceFor(uint256,uint256)": FunctionFragment;
    "recordDistributionFor(uint256,uint256,uint256)": FunctionFragment;
    "recordMigration(uint256)": FunctionFragment;
    "recordPaymentFrom(address,(address,uint256,uint256,uint256),uint256,uint256,address,string,bytes)": FunctionFragment;
    "recordRedemptionFor(address,uint256,uint256,string,bytes)": FunctionFragment;
    "recordUsedAllowanceOf(uint256,uint256,uint256)": FunctionFragment;
    "usedDistributionLimitOf(address,uint256,uint256)": FunctionFragment;
    "usedOverflowAllowanceOf(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentOverflowOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentReclaimableOverflowOf",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentTotalOverflowOf",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "directory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingCycleStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prices", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recordAddedBalanceFor",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recordDistributionFor",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recordMigration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "recordPaymentFrom",
    values: [
      string,
      JBTokenAmountStruct,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "recordRedemptionFor",
    values: [string, BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "recordUsedAllowanceOf",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usedDistributionLimitOf",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usedOverflowAllowanceOf",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentOverflowOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentReclaimableOverflowOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentTotalOverflowOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "directory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingCycleStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recordAddedBalanceFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordDistributionFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordMigration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordPaymentFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordRedemptionFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordUsedAllowanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedDistributionLimitOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "usedOverflowAllowanceOf",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IJBSingleTokenPaymentTerminalStore extends BaseContract {
  contractName: "IJBSingleTokenPaymentTerminalStore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBSingleTokenPaymentTerminalStoreInterface;

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
    balanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentOverflowOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "currentReclaimableOverflowOf(uint256,uint256,uint256,uint256)"(
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _totalSupply: BigNumberish,
      _overflow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "currentReclaimableOverflowOf(address,uint256,uint256,bool)"(
      _terminal: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _useTotalOverflow: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentTotalOverflowOf(
      _projectId: BigNumberish,
      _decimals: BigNumberish,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    directory(overrides?: CallOverrides): Promise<[string]>;

    fundingCycleStore(overrides?: CallOverrides): Promise<[string]>;

    prices(overrides?: CallOverrides): Promise<[string]>;

    recordAddedBalanceFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recordDistributionFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recordMigration(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recordPaymentFrom(
      _payer: string,
      _amount: JBTokenAmountStruct,
      _projectId: BigNumberish,
      _baseWeightCurrency: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recordRedemptionFor(
      _holder: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _memo: string,
      _metadata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    recordUsedAllowanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usedDistributionLimitOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    usedOverflowAllowanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleConfiguration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  balanceOf(
    _terminal: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentOverflowOf(
    _terminal: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "currentReclaimableOverflowOf(uint256,uint256,uint256,uint256)"(
    _projectId: BigNumberish,
    _tokenCount: BigNumberish,
    _totalSupply: BigNumberish,
    _overflow: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "currentReclaimableOverflowOf(address,uint256,uint256,bool)"(
    _terminal: string,
    _projectId: BigNumberish,
    _tokenCount: BigNumberish,
    _useTotalOverflow: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentTotalOverflowOf(
    _projectId: BigNumberish,
    _decimals: BigNumberish,
    _currency: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  directory(overrides?: CallOverrides): Promise<string>;

  fundingCycleStore(overrides?: CallOverrides): Promise<string>;

  prices(overrides?: CallOverrides): Promise<string>;

  recordAddedBalanceFor(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recordDistributionFor(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _currency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recordMigration(
    _projectId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recordPaymentFrom(
    _payer: string,
    _amount: JBTokenAmountStruct,
    _projectId: BigNumberish,
    _baseWeightCurrency: BigNumberish,
    _beneficiary: string,
    _memo: string,
    _metadata: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recordRedemptionFor(
    _holder: string,
    _projectId: BigNumberish,
    _tokenCount: BigNumberish,
    _memo: string,
    _metadata: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  recordUsedAllowanceOf(
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _currency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usedDistributionLimitOf(
    _terminal: string,
    _projectId: BigNumberish,
    _fundingCycleNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  usedOverflowAllowanceOf(
    _terminal: string,
    _projectId: BigNumberish,
    _fundingCycleConfiguration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    balanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentOverflowOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "currentReclaimableOverflowOf(uint256,uint256,uint256,uint256)"(
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _totalSupply: BigNumberish,
      _overflow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "currentReclaimableOverflowOf(address,uint256,uint256,bool)"(
      _terminal: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _useTotalOverflow: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentTotalOverflowOf(
      _projectId: BigNumberish,
      _decimals: BigNumberish,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    directory(overrides?: CallOverrides): Promise<string>;

    fundingCycleStore(overrides?: CallOverrides): Promise<string>;

    prices(overrides?: CallOverrides): Promise<string>;

    recordAddedBalanceFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    recordDistributionFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput, BigNumber] & {
        fundingCycle: JBFundingCycleStructOutput;
        distributedAmount: BigNumber;
      }
    >;

    recordMigration(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recordPaymentFrom(
      _payer: string,
      _amount: JBTokenAmountStruct,
      _projectId: BigNumberish,
      _baseWeightCurrency: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput, BigNumber, string, string] & {
        fundingCycle: JBFundingCycleStructOutput;
        tokenCount: BigNumber;
        delegate: string;
        memo: string;
      }
    >;

    recordRedemptionFor(
      _holder: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _memo: string,
      _metadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput, BigNumber, string, string] & {
        fundingCycle: JBFundingCycleStructOutput;
        reclaimAmount: BigNumber;
        delegate: string;
        memo: string;
      }
    >;

    recordUsedAllowanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput, BigNumber] & {
        fundingCycle: JBFundingCycleStructOutput;
        withdrawnAmount: BigNumber;
      }
    >;

    usedDistributionLimitOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usedOverflowAllowanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleConfiguration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentOverflowOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "currentReclaimableOverflowOf(uint256,uint256,uint256,uint256)"(
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _totalSupply: BigNumberish,
      _overflow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "currentReclaimableOverflowOf(address,uint256,uint256,bool)"(
      _terminal: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _useTotalOverflow: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentTotalOverflowOf(
      _projectId: BigNumberish,
      _decimals: BigNumberish,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    directory(overrides?: CallOverrides): Promise<BigNumber>;

    fundingCycleStore(overrides?: CallOverrides): Promise<BigNumber>;

    prices(overrides?: CallOverrides): Promise<BigNumber>;

    recordAddedBalanceFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recordDistributionFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recordMigration(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recordPaymentFrom(
      _payer: string,
      _amount: JBTokenAmountStruct,
      _projectId: BigNumberish,
      _baseWeightCurrency: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recordRedemptionFor(
      _holder: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _memo: string,
      _metadata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    recordUsedAllowanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usedDistributionLimitOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usedOverflowAllowanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleConfiguration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentOverflowOf(
      _terminal: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "currentReclaimableOverflowOf(uint256,uint256,uint256,uint256)"(
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _totalSupply: BigNumberish,
      _overflow: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "currentReclaimableOverflowOf(address,uint256,uint256,bool)"(
      _terminal: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _useTotalOverflow: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentTotalOverflowOf(
      _projectId: BigNumberish,
      _decimals: BigNumberish,
      _currency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    directory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingCycleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prices(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recordAddedBalanceFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recordDistributionFor(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recordMigration(
      _projectId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recordPaymentFrom(
      _payer: string,
      _amount: JBTokenAmountStruct,
      _projectId: BigNumberish,
      _baseWeightCurrency: BigNumberish,
      _beneficiary: string,
      _memo: string,
      _metadata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recordRedemptionFor(
      _holder: string,
      _projectId: BigNumberish,
      _tokenCount: BigNumberish,
      _memo: string,
      _metadata: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    recordUsedAllowanceOf(
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _currency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usedDistributionLimitOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usedOverflowAllowanceOf(
      _terminal: string,
      _projectId: BigNumberish,
      _fundingCycleConfiguration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
