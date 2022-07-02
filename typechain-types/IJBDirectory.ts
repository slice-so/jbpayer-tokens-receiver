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

export interface IJBDirectoryInterface extends utils.Interface {
  contractName: "IJBDirectory";
  functions: {
    "controllerOf(uint256)": FunctionFragment;
    "fundingCycleStore()": FunctionFragment;
    "isAllowedToSetFirstController(address)": FunctionFragment;
    "isTerminalOf(uint256,address)": FunctionFragment;
    "primaryTerminalOf(uint256,address)": FunctionFragment;
    "projects()": FunctionFragment;
    "setControllerOf(uint256,address)": FunctionFragment;
    "setIsAllowedToSetFirstController(address,bool)": FunctionFragment;
    "setPrimaryTerminalOf(uint256,address,address)": FunctionFragment;
    "setTerminalsOf(uint256,address[])": FunctionFragment;
    "terminalsOf(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controllerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fundingCycleStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToSetFirstController",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTerminalOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "primaryTerminalOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setControllerOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsAllowedToSetFirstController",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrimaryTerminalOf",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTerminalsOf",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "terminalsOf",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "controllerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundingCycleStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToSetFirstController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "primaryTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setControllerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIsAllowedToSetFirstController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrimaryTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTerminalsOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminalsOf",
    data: BytesLike
  ): Result;

  events: {
    "AddTerminal(uint256,address,address)": EventFragment;
    "SetController(uint256,address,address)": EventFragment;
    "SetIsAllowedToSetFirstController(address,bool,address)": EventFragment;
    "SetPrimaryTerminal(uint256,address,address,address)": EventFragment;
    "SetTerminals(uint256,address[],address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddTerminal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetController"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SetIsAllowedToSetFirstController"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPrimaryTerminal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetTerminals"): EventFragment;
}

export type AddTerminalEvent = TypedEvent<
  [BigNumber, string, string],
  { projectId: BigNumber; terminal: string; caller: string }
>;

export type AddTerminalEventFilter = TypedEventFilter<AddTerminalEvent>;

export type SetControllerEvent = TypedEvent<
  [BigNumber, string, string],
  { projectId: BigNumber; controller: string; caller: string }
>;

export type SetControllerEventFilter = TypedEventFilter<SetControllerEvent>;

export type SetIsAllowedToSetFirstControllerEvent = TypedEvent<
  [string, boolean, string],
  { addr: string; flag: boolean; caller: string }
>;

export type SetIsAllowedToSetFirstControllerEventFilter =
  TypedEventFilter<SetIsAllowedToSetFirstControllerEvent>;

export type SetPrimaryTerminalEvent = TypedEvent<
  [BigNumber, string, string, string],
  { projectId: BigNumber; token: string; terminal: string; caller: string }
>;

export type SetPrimaryTerminalEventFilter =
  TypedEventFilter<SetPrimaryTerminalEvent>;

export type SetTerminalsEvent = TypedEvent<
  [BigNumber, string[], string],
  { projectId: BigNumber; terminals: string[]; caller: string }
>;

export type SetTerminalsEventFilter = TypedEventFilter<SetTerminalsEvent>;

export interface IJBDirectory extends BaseContract {
  contractName: "IJBDirectory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBDirectoryInterface;

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
    controllerOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fundingCycleStore(overrides?: CallOverrides): Promise<[string]>;

    isAllowedToSetFirstController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projects(overrides?: CallOverrides): Promise<[string]>;

    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;
  };

  controllerOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  fundingCycleStore(overrides?: CallOverrides): Promise<string>;

  isAllowedToSetFirstController(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTerminalOf(
    _projectId: BigNumberish,
    _terminal: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  primaryTerminalOf(
    _projectId: BigNumberish,
    _token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  projects(overrides?: CallOverrides): Promise<string>;

  setControllerOf(
    _projectId: BigNumberish,
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIsAllowedToSetFirstController(
    _address: string,
    _flag: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPrimaryTerminalOf(
    _projectId: BigNumberish,
    _token: string,
    _terminal: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTerminalsOf(
    _projectId: BigNumberish,
    _terminals: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terminalsOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  callStatic: {
    controllerOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fundingCycleStore(overrides?: CallOverrides): Promise<string>;

    isAllowedToSetFirstController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    projects(overrides?: CallOverrides): Promise<string>;

    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;
  };

  filters: {
    "AddTerminal(uint256,address,address)"(
      projectId?: BigNumberish | null,
      terminal?: string | null,
      caller?: null
    ): AddTerminalEventFilter;
    AddTerminal(
      projectId?: BigNumberish | null,
      terminal?: string | null,
      caller?: null
    ): AddTerminalEventFilter;

    "SetController(uint256,address,address)"(
      projectId?: BigNumberish | null,
      controller?: string | null,
      caller?: null
    ): SetControllerEventFilter;
    SetController(
      projectId?: BigNumberish | null,
      controller?: string | null,
      caller?: null
    ): SetControllerEventFilter;

    "SetIsAllowedToSetFirstController(address,bool,address)"(
      addr?: string | null,
      flag?: boolean | null,
      caller?: null
    ): SetIsAllowedToSetFirstControllerEventFilter;
    SetIsAllowedToSetFirstController(
      addr?: string | null,
      flag?: boolean | null,
      caller?: null
    ): SetIsAllowedToSetFirstControllerEventFilter;

    "SetPrimaryTerminal(uint256,address,address,address)"(
      projectId?: BigNumberish | null,
      token?: string | null,
      terminal?: string | null,
      caller?: null
    ): SetPrimaryTerminalEventFilter;
    SetPrimaryTerminal(
      projectId?: BigNumberish | null,
      token?: string | null,
      terminal?: string | null,
      caller?: null
    ): SetPrimaryTerminalEventFilter;

    "SetTerminals(uint256,address[],address)"(
      projectId?: BigNumberish | null,
      terminals?: null,
      caller?: null
    ): SetTerminalsEventFilter;
    SetTerminals(
      projectId?: BigNumberish | null,
      terminals?: null,
      caller?: null
    ): SetTerminalsEventFilter;
  };

  estimateGas: {
    controllerOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fundingCycleStore(overrides?: CallOverrides): Promise<BigNumber>;

    isAllowedToSetFirstController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projects(overrides?: CallOverrides): Promise<BigNumber>;

    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controllerOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundingCycleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAllowedToSetFirstController(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setControllerOf(
      _projectId: BigNumberish,
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIsAllowedToSetFirstController(
      _address: string,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPrimaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      _terminal: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTerminalsOf(
      _projectId: BigNumberish,
      _terminals: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terminalsOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
