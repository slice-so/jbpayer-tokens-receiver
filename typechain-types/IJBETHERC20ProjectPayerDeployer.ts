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

export interface IJBETHERC20ProjectPayerDeployerInterface
  extends utils.Interface {
  contractName: "IJBETHERC20ProjectPayerDeployer";
  functions: {
    "deployProjectPayer(uint256,address,bool,string,bytes,bool,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployProjectPayer",
    values: [
      BigNumberish,
      string,
      boolean,
      string,
      BytesLike,
      boolean,
      string,
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployProjectPayer",
    data: BytesLike
  ): Result;

  events: {
    "DeployProjectPayer(address,uint256,address,bool,string,bytes,bool,address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployProjectPayer"): EventFragment;
}

export type DeployProjectPayerEvent = TypedEvent<
  [
    string,
    BigNumber,
    string,
    boolean,
    string,
    string,
    boolean,
    string,
    string,
    string
  ],
  {
    projectPayer: string;
    defaultProjectId: BigNumber;
    defaultBeneficiary: string;
    defaultPreferClaimedTokens: boolean;
    defaultMemo: string;
    defaultMetadata: string;
    preferAddToBalance: boolean;
    directory: string;
    owner: string;
    caller: string;
  }
>;

export type DeployProjectPayerEventFilter =
  TypedEventFilter<DeployProjectPayerEvent>;

export interface IJBETHERC20ProjectPayerDeployer extends BaseContract {
  contractName: "IJBETHERC20ProjectPayerDeployer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IJBETHERC20ProjectPayerDeployerInterface;

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
    deployProjectPayer(
      _defaultProjectId: BigNumberish,
      _defaultBeneficiary: string,
      _defaultPreferClaimedTokens: boolean,
      _defaultMemo: string,
      _defaultMetadata: BytesLike,
      _preferAddToBalance: boolean,
      _directory: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployProjectPayer(
    _defaultProjectId: BigNumberish,
    _defaultBeneficiary: string,
    _defaultPreferClaimedTokens: boolean,
    _defaultMemo: string,
    _defaultMetadata: BytesLike,
    _preferAddToBalance: boolean,
    _directory: string,
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployProjectPayer(
      _defaultProjectId: BigNumberish,
      _defaultBeneficiary: string,
      _defaultPreferClaimedTokens: boolean,
      _defaultMemo: string,
      _defaultMetadata: BytesLike,
      _preferAddToBalance: boolean,
      _directory: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "DeployProjectPayer(address,uint256,address,bool,string,bytes,bool,address,address,address)"(
      projectPayer?: string | null,
      defaultProjectId?: null,
      defaultBeneficiary?: null,
      defaultPreferClaimedTokens?: null,
      defaultMemo?: null,
      defaultMetadata?: null,
      preferAddToBalance?: null,
      directory?: null,
      owner?: null,
      caller?: null
    ): DeployProjectPayerEventFilter;
    DeployProjectPayer(
      projectPayer?: string | null,
      defaultProjectId?: null,
      defaultBeneficiary?: null,
      defaultPreferClaimedTokens?: null,
      defaultMemo?: null,
      defaultMetadata?: null,
      preferAddToBalance?: null,
      directory?: null,
      owner?: null,
      caller?: null
    ): DeployProjectPayerEventFilter;
  };

  estimateGas: {
    deployProjectPayer(
      _defaultProjectId: BigNumberish,
      _defaultBeneficiary: string,
      _defaultPreferClaimedTokens: boolean,
      _defaultMemo: string,
      _defaultMetadata: BytesLike,
      _preferAddToBalance: boolean,
      _directory: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployProjectPayer(
      _defaultProjectId: BigNumberish,
      _defaultBeneficiary: string,
      _defaultPreferClaimedTokens: boolean,
      _defaultMemo: string,
      _defaultMetadata: BytesLike,
      _preferAddToBalance: boolean,
      _directory: string,
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
