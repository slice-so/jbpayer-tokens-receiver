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

export interface JBReconfigurationBufferBallotInterface
  extends utils.Interface {
  contractName: "JBReconfigurationBufferBallot";
  functions: {
    "duration()": FunctionFragment;
    "finalState(uint256,uint256)": FunctionFragment;
    "finalize(uint256,uint256)": FunctionFragment;
    "fundingCycleStore()": FunctionFragment;
    "stateOf(uint256,uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finalState",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundingCycleStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stateOf",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalState", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingCycleStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stateOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "Finalize(uint256,uint256,uint8,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Finalize"): EventFragment;
}

export type FinalizeEvent = TypedEvent<
  [BigNumber, BigNumber, number, string],
  {
    projectId: BigNumber;
    configuration: BigNumber;
    ballotState: number;
    caller: string;
  }
>;

export type FinalizeEventFilter = TypedEventFilter<FinalizeEvent>;

export interface JBReconfigurationBufferBallot extends BaseContract {
  contractName: "JBReconfigurationBufferBallot";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBReconfigurationBufferBallotInterface;

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
    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    finalState(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    finalize(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fundingCycleStore(overrides?: CallOverrides): Promise<[string]>;

    stateOf(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      _start: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  finalState(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  finalize(
    _projectId: BigNumberish,
    _configured: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fundingCycleStore(overrides?: CallOverrides): Promise<string>;

  stateOf(
    _projectId: BigNumberish,
    _configured: BigNumberish,
    _start: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  supportsInterface(
    _interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    duration(overrides?: CallOverrides): Promise<BigNumber>;

    finalState(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    finalize(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    fundingCycleStore(overrides?: CallOverrides): Promise<string>;

    stateOf(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      _start: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Finalize(uint256,uint256,uint8,address)"(
      projectId?: BigNumberish | null,
      configuration?: BigNumberish | null,
      ballotState?: BigNumberish | null,
      caller?: null
    ): FinalizeEventFilter;
    Finalize(
      projectId?: BigNumberish | null,
      configuration?: BigNumberish | null,
      ballotState?: BigNumberish | null,
      caller?: null
    ): FinalizeEventFilter;
  };

  estimateGas: {
    duration(overrides?: CallOverrides): Promise<BigNumber>;

    finalState(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalize(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fundingCycleStore(overrides?: CallOverrides): Promise<BigNumber>;

    stateOf(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      _start: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalState(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalize(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fundingCycleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stateOf(
      _projectId: BigNumberish,
      _configured: BigNumberish,
      _start: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      _interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
