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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type JBFundingCycleDataStruct = {
  duration: BigNumberish;
  weight: BigNumberish;
  discountRate: BigNumberish;
  ballot: string;
};

export type JBFundingCycleDataStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  duration: BigNumber;
  weight: BigNumber;
  discountRate: BigNumber;
  ballot: string;
};

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

export interface IJBFundingCycleStoreInterface extends utils.Interface {
  contractName: "IJBFundingCycleStore";
  functions: {
    "configureFor(uint256,(uint256,uint256,uint256,address),uint256,uint256)": FunctionFragment;
    "currentBallotStateOf(uint256)": FunctionFragment;
    "currentOf(uint256)": FunctionFragment;
    "get(uint256,uint256)": FunctionFragment;
    "latestConfigurationOf(uint256)": FunctionFragment;
    "latestConfiguredOf(uint256)": FunctionFragment;
    "queuedOf(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "configureFor",
    values: [BigNumberish, JBFundingCycleDataStruct, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentBallotStateOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestConfigurationOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestConfiguredOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedOf",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "configureFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBallotStateOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currentOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestConfigurationOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestConfiguredOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queuedOf", data: BytesLike): Result;

  events: {
    "Configure(uint256,uint256,tuple,uint256,uint256,address)": EventFragment;
    "Init(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Configure"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Init"): EventFragment;
}

export type ConfigureEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    JBFundingCycleDataStructOutput,
    BigNumber,
    BigNumber,
    string
  ],
  {
    configuration: BigNumber;
    projectId: BigNumber;
    data: JBFundingCycleDataStructOutput;
    metadata: BigNumber;
    mustStartAtOrAfter: BigNumber;
    caller: string;
  }
>;

export type ConfigureEventFilter = TypedEventFilter<ConfigureEvent>;

export type InitEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  { configuration: BigNumber; projectId: BigNumber; basedOn: BigNumber }
>;

export type InitEventFilter = TypedEventFilter<InitEvent>;

export interface IJBFundingCycleStore extends BaseContract {
  contractName: "IJBFundingCycleStore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBFundingCycleStoreInterface;

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
    configureFor(
      _projectId: BigNumberish,
      _data: JBFundingCycleDataStruct,
      _metadata: BigNumberish,
      _mustStartAtOrAfter: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentBallotStateOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    currentOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput] & {
        fundingCycle: JBFundingCycleStructOutput;
      }
    >;

    get(
      _projectId: BigNumberish,
      _configuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[JBFundingCycleStructOutput]>;

    latestConfigurationOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    latestConfiguredOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput, number] & {
        fundingCycle: JBFundingCycleStructOutput;
        ballotState: number;
      }
    >;

    queuedOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput] & {
        fundingCycle: JBFundingCycleStructOutput;
      }
    >;
  };

  configureFor(
    _projectId: BigNumberish,
    _data: JBFundingCycleDataStruct,
    _metadata: BigNumberish,
    _mustStartAtOrAfter: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentBallotStateOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  currentOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<JBFundingCycleStructOutput>;

  get(
    _projectId: BigNumberish,
    _configuration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<JBFundingCycleStructOutput>;

  latestConfigurationOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  latestConfiguredOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [JBFundingCycleStructOutput, number] & {
      fundingCycle: JBFundingCycleStructOutput;
      ballotState: number;
    }
  >;

  queuedOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<JBFundingCycleStructOutput>;

  callStatic: {
    configureFor(
      _projectId: BigNumberish,
      _data: JBFundingCycleDataStruct,
      _metadata: BigNumberish,
      _mustStartAtOrAfter: BigNumberish,
      overrides?: CallOverrides
    ): Promise<JBFundingCycleStructOutput>;

    currentBallotStateOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    currentOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<JBFundingCycleStructOutput>;

    get(
      _projectId: BigNumberish,
      _configuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<JBFundingCycleStructOutput>;

    latestConfigurationOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestConfiguredOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [JBFundingCycleStructOutput, number] & {
        fundingCycle: JBFundingCycleStructOutput;
        ballotState: number;
      }
    >;

    queuedOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<JBFundingCycleStructOutput>;
  };

  filters: {
    "Configure(uint256,uint256,tuple,uint256,uint256,address)"(
      configuration?: BigNumberish | null,
      projectId?: BigNumberish | null,
      data?: null,
      metadata?: null,
      mustStartAtOrAfter?: null,
      caller?: null
    ): ConfigureEventFilter;
    Configure(
      configuration?: BigNumberish | null,
      projectId?: BigNumberish | null,
      data?: null,
      metadata?: null,
      mustStartAtOrAfter?: null,
      caller?: null
    ): ConfigureEventFilter;

    "Init(uint256,uint256,uint256)"(
      configuration?: BigNumberish | null,
      projectId?: BigNumberish | null,
      basedOn?: BigNumberish | null
    ): InitEventFilter;
    Init(
      configuration?: BigNumberish | null,
      projectId?: BigNumberish | null,
      basedOn?: BigNumberish | null
    ): InitEventFilter;
  };

  estimateGas: {
    configureFor(
      _projectId: BigNumberish,
      _data: JBFundingCycleDataStruct,
      _metadata: BigNumberish,
      _mustStartAtOrAfter: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentBallotStateOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get(
      _projectId: BigNumberish,
      _configuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestConfigurationOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestConfiguredOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queuedOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    configureFor(
      _projectId: BigNumberish,
      _data: JBFundingCycleDataStruct,
      _metadata: BigNumberish,
      _mustStartAtOrAfter: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentBallotStateOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get(
      _projectId: BigNumberish,
      _configuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestConfigurationOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestConfiguredOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queuedOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
