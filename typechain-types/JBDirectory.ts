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

export interface JBDirectoryInterface extends utils.Interface {
  contractName: "JBDirectory";
  functions: {
    "controllerOf(uint256)": FunctionFragment;
    "fundingCycleStore()": FunctionFragment;
    "isAllowedToSetFirstController(address)": FunctionFragment;
    "isTerminalOf(uint256,address)": FunctionFragment;
    "operatorStore()": FunctionFragment;
    "owner()": FunctionFragment;
    "primaryTerminalOf(uint256,address)": FunctionFragment;
    "projects()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setControllerOf(uint256,address)": FunctionFragment;
    "setIsAllowedToSetFirstController(address,bool)": FunctionFragment;
    "setPrimaryTerminalOf(uint256,address,address)": FunctionFragment;
    "setTerminalsOf(uint256,address[])": FunctionFragment;
    "terminalsOf(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
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
    functionFragment: "operatorStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "primaryTerminalOf",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
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
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
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
    functionFragment: "operatorStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "primaryTerminalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddTerminal(uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetController(uint256,address,address)": EventFragment;
    "SetIsAllowedToSetFirstController(address,bool,address)": EventFragment;
    "SetPrimaryTerminal(uint256,address,address,address)": EventFragment;
    "SetTerminals(uint256,address[],address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddTerminal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

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

export interface JBDirectory extends BaseContract {
  contractName: "JBDirectory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: JBDirectoryInterface;

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
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fundingCycleStore(overrides?: CallOverrides): Promise<[string]>;

    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    operatorStore(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    projects(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  controllerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  fundingCycleStore(overrides?: CallOverrides): Promise<string>;

  isAllowedToSetFirstController(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTerminalOf(
    _projectId: BigNumberish,
    _terminal: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  operatorStore(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  primaryTerminalOf(
    _projectId: BigNumberish,
    _token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  projects(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    controllerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    fundingCycleStore(overrides?: CallOverrides): Promise<string>;

    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    operatorStore(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    projects(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

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

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
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

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

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
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fundingCycleStore(overrides?: CallOverrides): Promise<BigNumber>;

    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    operatorStore(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    projects(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controllerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundingCycleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAllowedToSetFirstController(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTerminalOf(
      _projectId: BigNumberish,
      _terminal: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    operatorStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    primaryTerminalOf(
      _projectId: BigNumberish,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
