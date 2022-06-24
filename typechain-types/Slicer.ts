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

export interface SlicerInterface extends utils.Interface {
  contractName: "Slicer";
  functions: {
    "_addCurrencies(address[])": FunctionFragment;
    "_handle1155Purchase(address,address,uint256,uint256)": FunctionFragment;
    "_handle721Purchase(address,address,uint256)": FunctionFragment;
    "_initialize(uint256,bool,bool,address,uint256,uint256,address[])": FunctionFragment;
    "_releaseFromFundsModule(address,address)": FunctionFragment;
    "_releaseFromSliceCore(address,address,uint256)": FunctionFragment;
    "_setChildSlicer(uint256,bool)": FunctionFragment;
    "_setCustomFee(bool,uint256)": FunctionFragment;
    "_setTotalShares(uint256)": FunctionFragment;
    "_updatePayees(address,address,bool,uint256,uint256)": FunctionFragment;
    "_updatePayeesReslice(address[],int32[],uint32)": FunctionFragment;
    "acceptsCurrency(address)": FunctionFragment;
    "batchReleaseAccounts(address[],address,bool)": FunctionFragment;
    "getFee()": FunctionFragment;
    "isPayeeAllowed(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "release(address,address,bool)": FunctionFragment;
    "slicerInfo()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "unreleased(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_addCurrencies",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "_handle1155Purchase",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_handle721Purchase",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_initialize",
    values: [
      BigNumberish,
      boolean,
      boolean,
      string,
      BigNumberish,
      BigNumberish,
      string[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "_releaseFromFundsModule",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "_releaseFromSliceCore",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_setChildSlicer",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "_setCustomFee",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_setTotalShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_updatePayees",
    values: [string, string, boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_updatePayeesReslice",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptsCurrency",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchReleaseAccounts",
    values: [string[], string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "getFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPayeeAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "slicerInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unreleased",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "_addCurrencies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_handle1155Purchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_handle721Purchase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_initialize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_releaseFromFundsModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_releaseFromSliceCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setChildSlicer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setCustomFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setTotalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_updatePayees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_updatePayeesReslice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptsCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchReleaseAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPayeeAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slicerInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unreleased", data: BytesLike): Result;

  events: {
    "ChildSlicerSet(uint256,bool)": EventFragment;
    "CurrenciesAdded(address[])": EventFragment;
    "CustomFeeSet(bool,uint256)": EventFragment;
    "ERC1155BatchReceived(address,address,uint256[],uint256[])": EventFragment;
    "ERC1155Received(address,address,uint256,uint256)": EventFragment;
    "ERC721Received(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "Released(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChildSlicerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CurrenciesAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CustomFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155BatchReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC1155Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC721Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
}

export type ChildSlicerSetEvent = TypedEvent<
  [BigNumber, boolean],
  { slicerId: BigNumber; addChildSlicerMode: boolean }
>;

export type ChildSlicerSetEventFilter = TypedEventFilter<ChildSlicerSetEvent>;

export type CurrenciesAddedEvent = TypedEvent<
  [string[]],
  { currencies: string[] }
>;

export type CurrenciesAddedEventFilter = TypedEventFilter<CurrenciesAddedEvent>;

export type CustomFeeSetEvent = TypedEvent<
  [boolean, BigNumber],
  { customFeeActive: boolean; customFee: BigNumber }
>;

export type CustomFeeSetEventFilter = TypedEventFilter<CustomFeeSetEvent>;

export type ERC1155BatchReceivedEvent = TypedEvent<
  [string, string, BigNumber[], BigNumber[]],
  {
    contractAddress: string;
    from: string;
    tokenIds: BigNumber[];
    amounts: BigNumber[];
  }
>;

export type ERC1155BatchReceivedEventFilter =
  TypedEventFilter<ERC1155BatchReceivedEvent>;

export type ERC1155ReceivedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    contractAddress: string;
    from: string;
    tokenId: BigNumber;
    amount: BigNumber;
  }
>;

export type ERC1155ReceivedEventFilter = TypedEventFilter<ERC1155ReceivedEvent>;

export type ERC721ReceivedEvent = TypedEvent<
  [string, string, BigNumber],
  { contractAddress: string; from: string; tokenId: BigNumber }
>;

export type ERC721ReceivedEventFilter = TypedEventFilter<ERC721ReceivedEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber],
  { from: string; amount: BigNumber }
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export type ReleasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    payee: string;
    currency: string;
    amountReleased: BigNumber;
    protocolPayment: BigNumber;
  }
>;

export type ReleasedEventFilter = TypedEventFilter<ReleasedEvent>;

export interface Slicer extends BaseContract {
  contractName: "Slicer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SlicerInterface;

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
    _addCurrencies(
      currencies: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _initialize(
      tokenId_: BigNumberish,
      isImmutable_: boolean,
      isControlled_: boolean,
      slicerCreator_: string,
      minimumShares_: BigNumberish,
      releaseTimelock_: BigNumberish,
      currencies_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setChildSlicer(
      id: BigNumberish,
      isAdded: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getFee(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    isPayeeAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onERC1155BatchReceived(
      arg0: string,
      from: string,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      amount: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slicerInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, boolean, boolean, string[]] & {
        tokenId: BigNumber;
        minimumShares: BigNumber;
        creator: string;
        isImmutable: boolean;
        isControlled: boolean;
        currencies: string[];
      }
    >;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { unreleasedAmount: BigNumber }>;
  };

  _addCurrencies(
    currencies: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _handle1155Purchase(
    buyer: string,
    contractAddress: string,
    quantity: BigNumberish,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _handle721Purchase(
    buyer: string,
    contractAddress: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _initialize(
    tokenId_: BigNumberish,
    isImmutable_: boolean,
    isControlled_: boolean,
    slicerCreator_: string,
    minimumShares_: BigNumberish,
    releaseTimelock_: BigNumberish,
    currencies_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _releaseFromFundsModule(
    account: string,
    currency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _releaseFromSliceCore(
    account: string,
    currency: string,
    accountSlices: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setChildSlicer(
    id: BigNumberish,
    isAdded: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setCustomFee(
    customFeeActive: boolean,
    customFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _setTotalShares(
    totalShares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updatePayees(
    sender: string,
    receiver: string,
    toRelease: boolean,
    senderShares: BigNumberish,
    transferredShares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _updatePayeesReslice(
    accounts: string[],
    tokensDiffs: BigNumberish[],
    totalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  acceptsCurrency(
    currency: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  batchReleaseAccounts(
    accounts: string[],
    currency: string,
    withdraw: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getFee(overrides?: CallOverrides): Promise<BigNumber>;

  isPayeeAllowed(payee: string, overrides?: CallOverrides): Promise<boolean>;

  onERC1155BatchReceived(
    arg0: string,
    from: string,
    tokenIds: BigNumberish[],
    amounts: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    from: string,
    tokenId: BigNumberish,
    amount: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: string,
    from: string,
    tokenId: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  release(
    account: string,
    currency: string,
    withdraw: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slicerInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, boolean, boolean, string[]] & {
      tokenId: BigNumber;
      minimumShares: BigNumber;
      creator: string;
      isImmutable: boolean;
      isControlled: boolean;
      currencies: string[];
    }
  >;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  unreleased(
    account: string,
    currency: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    _addCurrencies(
      currencies: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _initialize(
      tokenId_: BigNumberish,
      isImmutable_: boolean,
      isControlled_: boolean,
      slicerCreator_: string,
      minimumShares_: BigNumberish,
      releaseTimelock_: BigNumberish,
      currencies_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; protocolPayment: BigNumber }
    >;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _setChildSlicer(
      id: BigNumberish,
      isAdded: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    isPayeeAllowed(payee: string, overrides?: CallOverrides): Promise<boolean>;

    onERC1155BatchReceived(
      arg0: string,
      from: string,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      amount: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    slicerInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, boolean, boolean, string[]] & {
        tokenId: BigNumber;
        minimumShares: BigNumber;
        creator: string;
        isImmutable: boolean;
        isControlled: boolean;
        currencies: string[];
      }
    >;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ChildSlicerSet(uint256,bool)"(
      slicerId?: BigNumberish | null,
      addChildSlicerMode?: null
    ): ChildSlicerSetEventFilter;
    ChildSlicerSet(
      slicerId?: BigNumberish | null,
      addChildSlicerMode?: null
    ): ChildSlicerSetEventFilter;

    "CurrenciesAdded(address[])"(currencies?: null): CurrenciesAddedEventFilter;
    CurrenciesAdded(currencies?: null): CurrenciesAddedEventFilter;

    "CustomFeeSet(bool,uint256)"(
      customFeeActive?: null,
      customFee?: null
    ): CustomFeeSetEventFilter;
    CustomFeeSet(
      customFeeActive?: null,
      customFee?: null
    ): CustomFeeSetEventFilter;

    "ERC1155BatchReceived(address,address,uint256[],uint256[])"(
      contractAddress?: string | null,
      from?: string | null,
      tokenIds?: null,
      amounts?: null
    ): ERC1155BatchReceivedEventFilter;
    ERC1155BatchReceived(
      contractAddress?: string | null,
      from?: string | null,
      tokenIds?: null,
      amounts?: null
    ): ERC1155BatchReceivedEventFilter;

    "ERC1155Received(address,address,uint256,uint256)"(
      contractAddress?: string | null,
      from?: string | null,
      tokenId?: null,
      amount?: null
    ): ERC1155ReceivedEventFilter;
    ERC1155Received(
      contractAddress?: string | null,
      from?: string | null,
      tokenId?: null,
      amount?: null
    ): ERC1155ReceivedEventFilter;

    "ERC721Received(address,address,uint256)"(
      contractAddress?: string | null,
      from?: string | null,
      tokenId?: null
    ): ERC721ReceivedEventFilter;
    ERC721Received(
      contractAddress?: string | null,
      from?: string | null,
      tokenId?: null
    ): ERC721ReceivedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "PaymentReceived(address,uint256)"(
      from?: string | null,
      amount?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(
      from?: string | null,
      amount?: null
    ): PaymentReceivedEventFilter;

    "Released(address,address,uint256,uint256)"(
      payee?: string | null,
      currency?: string | null,
      amountReleased?: null,
      protocolPayment?: null
    ): ReleasedEventFilter;
    Released(
      payee?: string | null,
      currency?: string | null,
      amountReleased?: null,
      protocolPayment?: null
    ): ReleasedEventFilter;
  };

  estimateGas: {
    _addCurrencies(
      currencies: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _initialize(
      tokenId_: BigNumberish,
      isImmutable_: boolean,
      isControlled_: boolean,
      slicerCreator_: string,
      minimumShares_: BigNumberish,
      releaseTimelock_: BigNumberish,
      currencies_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setChildSlicer(
      id: BigNumberish,
      isAdded: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getFee(overrides?: CallOverrides): Promise<BigNumber>;

    isPayeeAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      from: string,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      amount: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slicerInfo(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _addCurrencies(
      currencies: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _handle1155Purchase(
      buyer: string,
      contractAddress: string,
      quantity: BigNumberish,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _handle721Purchase(
      buyer: string,
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _initialize(
      tokenId_: BigNumberish,
      isImmutable_: boolean,
      isControlled_: boolean,
      slicerCreator_: string,
      minimumShares_: BigNumberish,
      releaseTimelock_: BigNumberish,
      currencies_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _releaseFromFundsModule(
      account: string,
      currency: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _releaseFromSliceCore(
      account: string,
      currency: string,
      accountSlices: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setChildSlicer(
      id: BigNumberish,
      isAdded: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setCustomFee(
      customFeeActive: boolean,
      customFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _setTotalShares(
      totalShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updatePayees(
      sender: string,
      receiver: string,
      toRelease: boolean,
      senderShares: BigNumberish,
      transferredShares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _updatePayeesReslice(
      accounts: string[],
      tokensDiffs: BigNumberish[],
      totalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    acceptsCurrency(
      currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchReleaseAccounts(
      accounts: string[],
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPayeeAllowed(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      from: string,
      tokenIds: BigNumberish[],
      amounts: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      amount: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      from: string,
      tokenId: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    release(
      account: string,
      currency: string,
      withdraw: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slicerInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unreleased(
      account: string,
      currency: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
