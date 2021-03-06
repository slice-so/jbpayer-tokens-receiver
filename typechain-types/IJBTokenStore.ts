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

export interface IJBTokenStoreInterface extends utils.Interface {
  contractName: "IJBTokenStore";
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "burnFrom(address,uint256,uint256,bool)": FunctionFragment;
    "changeFor(uint256,address,address)": FunctionFragment;
    "claimFor(address,uint256,uint256)": FunctionFragment;
    "issueFor(uint256,string,string)": FunctionFragment;
    "mintFor(address,uint256,uint256,bool)": FunctionFragment;
    "projectOf(address)": FunctionFragment;
    "projects()": FunctionFragment;
    "requireClaimFor(uint256)": FunctionFragment;
    "shouldRequireClaimingFor(uint256,bool)": FunctionFragment;
    "tokenOf(uint256)": FunctionFragment;
    "totalSupplyOf(uint256)": FunctionFragment;
    "transferFrom(address,uint256,address,uint256)": FunctionFragment;
    "unclaimedBalanceOf(address,uint256)": FunctionFragment;
    "unclaimedTotalSupplyOf(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnFrom",
    values: [string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "changeFor",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFor",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "issueFor",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "mintFor",
    values: [string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(functionFragment: "projectOf", values: [string]): string;
  encodeFunctionData(functionFragment: "projects", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requireClaimFor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shouldRequireClaimingFor",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedBalanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unclaimedTotalSupplyOf",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issueFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requireClaimFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldRequireClaimingFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unclaimedTotalSupplyOf",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,uint256,uint256,uint256,uint256,bool,address)": EventFragment;
    "Change(uint256,address,address,address,address)": EventFragment;
    "Claim(address,uint256,uint256,uint256,address)": EventFragment;
    "Issue(uint256,address,string,string,address)": EventFragment;
    "Mint(address,uint256,uint256,bool,bool,address)": EventFragment;
    "ShouldRequireClaim(uint256,bool,address)": EventFragment;
    "Transfer(address,uint256,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Change"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Issue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShouldRequireClaim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, boolean, string],
  {
    holder: string;
    projectId: BigNumber;
    amount: BigNumber;
    initialUnclaimedBalance: BigNumber;
    initialClaimedBalance: BigNumber;
    preferClaimedTokens: boolean;
    caller: string;
  }
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export type ChangeEvent = TypedEvent<
  [BigNumber, string, string, string, string],
  {
    projectId: BigNumber;
    newToken: string;
    oldToken: string;
    owner: string;
    caller: string;
  }
>;

export type ChangeEventFilter = TypedEventFilter<ChangeEvent>;

export type ClaimEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, string],
  {
    holder: string;
    projectId: BigNumber;
    initialUnclaimedBalance: BigNumber;
    amount: BigNumber;
    caller: string;
  }
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export type IssueEvent = TypedEvent<
  [BigNumber, string, string, string, string],
  {
    projectId: BigNumber;
    token: string;
    name: string;
    symbol: string;
    caller: string;
  }
>;

export type IssueEventFilter = TypedEventFilter<IssueEvent>;

export type MintEvent = TypedEvent<
  [string, BigNumber, BigNumber, boolean, boolean, string],
  {
    holder: string;
    projectId: BigNumber;
    amount: BigNumber;
    tokensWereClaimed: boolean;
    preferClaimedTokens: boolean;
    caller: string;
  }
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export type ShouldRequireClaimEvent = TypedEvent<
  [BigNumber, boolean, string],
  { projectId: BigNumber; flag: boolean; caller: string }
>;

export type ShouldRequireClaimEventFilter =
  TypedEventFilter<ShouldRequireClaimEvent>;

export type TransferEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string],
  {
    holder: string;
    projectId: BigNumber;
    recipient: string;
    amount: BigNumber;
    caller: string;
  }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IJBTokenStore extends BaseContract {
  contractName: "IJBTokenStore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBTokenStoreInterface;

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
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _result: BigNumber }>;

    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeFor(
      _projectId: BigNumberish,
      _token: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    projectOf(_token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    projects(overrides?: CallOverrides): Promise<[string]>;

    requireClaimFor(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    shouldRequireClaimingFor(
      _projectId: BigNumberish,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unclaimedBalanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unclaimedTotalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  balanceOf(
    _holder: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burnFrom(
    _holder: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _preferClaimedTokens: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeFor(
    _projectId: BigNumberish,
    _token: string,
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimFor(
    _holder: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  issueFor(
    _projectId: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mintFor(
    _holder: string,
    _projectId: BigNumberish,
    _amount: BigNumberish,
    _preferClaimedTokens: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  projectOf(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  projects(overrides?: CallOverrides): Promise<string>;

  requireClaimFor(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  shouldRequireClaimingFor(
    _projectId: BigNumberish,
    _flag: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenOf(_projectId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupplyOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferFrom(
    _holder: string,
    _projectId: BigNumberish,
    _recipient: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unclaimedBalanceOf(
    _holder: string,
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unclaimedTotalSupplyOf(
    _projectId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    changeFor(
      _projectId: BigNumberish,
      _token: string,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    projectOf(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    projects(overrides?: CallOverrides): Promise<string>;

    requireClaimFor(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    shouldRequireClaimingFor(
      _projectId: BigNumberish,
      _flag: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unclaimedBalanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unclaimedTotalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Burn(address,uint256,uint256,uint256,uint256,bool,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      initialUnclaimedBalance?: null,
      initialClaimedBalance?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): BurnEventFilter;
    Burn(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      initialUnclaimedBalance?: null,
      initialClaimedBalance?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): BurnEventFilter;

    "Change(uint256,address,address,address,address)"(
      projectId?: BigNumberish | null,
      newToken?: string | null,
      oldToken?: string | null,
      owner?: null,
      caller?: null
    ): ChangeEventFilter;
    Change(
      projectId?: BigNumberish | null,
      newToken?: string | null,
      oldToken?: string | null,
      owner?: null,
      caller?: null
    ): ChangeEventFilter;

    "Claim(address,uint256,uint256,uint256,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      initialUnclaimedBalance?: null,
      amount?: null,
      caller?: null
    ): ClaimEventFilter;
    Claim(
      holder?: string | null,
      projectId?: BigNumberish | null,
      initialUnclaimedBalance?: null,
      amount?: null,
      caller?: null
    ): ClaimEventFilter;

    "Issue(uint256,address,string,string,address)"(
      projectId?: BigNumberish | null,
      token?: string | null,
      name?: null,
      symbol?: null,
      caller?: null
    ): IssueEventFilter;
    Issue(
      projectId?: BigNumberish | null,
      token?: string | null,
      name?: null,
      symbol?: null,
      caller?: null
    ): IssueEventFilter;

    "Mint(address,uint256,uint256,bool,bool,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      tokensWereClaimed?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): MintEventFilter;
    Mint(
      holder?: string | null,
      projectId?: BigNumberish | null,
      amount?: null,
      tokensWereClaimed?: null,
      preferClaimedTokens?: null,
      caller?: null
    ): MintEventFilter;

    "ShouldRequireClaim(uint256,bool,address)"(
      projectId?: BigNumberish | null,
      flag?: boolean | null,
      caller?: null
    ): ShouldRequireClaimEventFilter;
    ShouldRequireClaim(
      projectId?: BigNumberish | null,
      flag?: boolean | null,
      caller?: null
    ): ShouldRequireClaimEventFilter;

    "Transfer(address,uint256,address,uint256,address)"(
      holder?: string | null,
      projectId?: BigNumberish | null,
      recipient?: string | null,
      amount?: null,
      caller?: null
    ): TransferEventFilter;
    Transfer(
      holder?: string | null,
      projectId?: BigNumberish | null,
      recipient?: string | null,
      amount?: null,
      caller?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeFor(
      _projectId: BigNumberish,
      _token: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    projectOf(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    projects(overrides?: CallOverrides): Promise<BigNumber>;

    requireClaimFor(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shouldRequireClaimingFor(
      _projectId: BigNumberish,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unclaimedBalanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unclaimedTotalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnFrom(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeFor(
      _projectId: BigNumberish,
      _token: string,
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    issueFor(
      _projectId: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mintFor(
      _holder: string,
      _projectId: BigNumberish,
      _amount: BigNumberish,
      _preferClaimedTokens: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    projectOf(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    projects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requireClaimFor(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shouldRequireClaimingFor(
      _projectId: BigNumberish,
      _flag: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _holder: string,
      _projectId: BigNumberish,
      _recipient: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unclaimedBalanceOf(
      _holder: string,
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unclaimedTotalSupplyOf(
      _projectId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
