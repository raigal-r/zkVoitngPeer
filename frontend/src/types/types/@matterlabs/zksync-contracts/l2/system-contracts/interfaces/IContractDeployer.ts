/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export declare namespace IContractDeployer {
  export type AccountInfoStruct = {
    supportedAAVersion: BigNumberish;
    nonceOrdering: BigNumberish;
  };

  export type AccountInfoStructOutput = [number, number] & {
    supportedAAVersion: number;
    nonceOrdering: number;
  };
}

export interface IContractDeployerInterface extends utils.Interface {
  functions: {
    "create(bytes32,bytes32,bytes)": FunctionFragment;
    "create2(bytes32,bytes32,bytes)": FunctionFragment;
    "create2Account(bytes32,bytes32,bytes,uint8)": FunctionFragment;
    "createAccount(bytes32,bytes32,bytes,uint8)": FunctionFragment;
    "getAccountInfo(address)": FunctionFragment;
    "getNewAddressCreate(address,uint256)": FunctionFragment;
    "getNewAddressCreate2(address,bytes32,bytes32,bytes)": FunctionFragment;
    "updateAccountVersion(uint8)": FunctionFragment;
    "updateNonceOrdering(uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "create"
      | "create2"
      | "create2Account"
      | "createAccount"
      | "getAccountInfo"
      | "getNewAddressCreate"
      | "getNewAddressCreate2"
      | "updateAccountVersion"
      | "updateNonceOrdering"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "create",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "create2",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "create2Account",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNewAddressCreate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNewAddressCreate2",
    values: [string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAccountVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateNonceOrdering",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "create2Account",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNewAddressCreate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNewAddressCreate2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAccountVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateNonceOrdering",
    data: BytesLike
  ): Result;

  events: {
    "AccountNonceOrderingUpdated(address,uint8)": EventFragment;
    "AccountVersionUpdated(address,uint8)": EventFragment;
    "ContractDeployed(address,bytes32,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AccountNonceOrderingUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AccountVersionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractDeployed"): EventFragment;
}

export interface AccountNonceOrderingUpdatedEventObject {
  accountAddress: string;
  nonceOrdering: number;
}
export type AccountNonceOrderingUpdatedEvent = TypedEvent<
  [string, number],
  AccountNonceOrderingUpdatedEventObject
>;

export type AccountNonceOrderingUpdatedEventFilter =
  TypedEventFilter<AccountNonceOrderingUpdatedEvent>;

export interface AccountVersionUpdatedEventObject {
  accountAddress: string;
  aaVersion: number;
}
export type AccountVersionUpdatedEvent = TypedEvent<
  [string, number],
  AccountVersionUpdatedEventObject
>;

export type AccountVersionUpdatedEventFilter =
  TypedEventFilter<AccountVersionUpdatedEvent>;

export interface ContractDeployedEventObject {
  deployerAddress: string;
  bytecodeHash: string;
  contractAddress: string;
}
export type ContractDeployedEvent = TypedEvent<
  [string, string, string],
  ContractDeployedEventObject
>;

export type ContractDeployedEventFilter =
  TypedEventFilter<ContractDeployedEvent>;

export interface IContractDeployer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IContractDeployerInterface;

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
    create(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    create2(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    create2Account(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    createAccount(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAccountInfo(
      _address: string,
      overrides?: CallOverrides
    ): Promise<
      [IContractDeployer.AccountInfoStructOutput] & {
        info: IContractDeployer.AccountInfoStructOutput;
      }
    >;

    getNewAddressCreate(
      _sender: string,
      _senderNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { newAddress: string }>;

    getNewAddressCreate2(
      _sender: string,
      _bytecodeHash: BytesLike,
      _salt: BytesLike,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { newAddress: string }>;

    updateAccountVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateNonceOrdering(
      _nonceOrdering: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  create(
    _salt: BytesLike,
    _bytecodeHash: BytesLike,
    _input: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  create2(
    _salt: BytesLike,
    _bytecodeHash: BytesLike,
    _input: BytesLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  create2Account(
    _salt: BytesLike,
    _bytecodeHash: BytesLike,
    _input: BytesLike,
    _aaVersion: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  createAccount(
    _salt: BytesLike,
    _bytecodeHash: BytesLike,
    _input: BytesLike,
    _aaVersion: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAccountInfo(
    _address: string,
    overrides?: CallOverrides
  ): Promise<IContractDeployer.AccountInfoStructOutput>;

  getNewAddressCreate(
    _sender: string,
    _senderNonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNewAddressCreate2(
    _sender: string,
    _bytecodeHash: BytesLike,
    _salt: BytesLike,
    _input: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  updateAccountVersion(
    _version: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateNonceOrdering(
    _nonceOrdering: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    create(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    create2(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    create2Account(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createAccount(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAccountInfo(
      _address: string,
      overrides?: CallOverrides
    ): Promise<IContractDeployer.AccountInfoStructOutput>;

    getNewAddressCreate(
      _sender: string,
      _senderNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNewAddressCreate2(
      _sender: string,
      _bytecodeHash: BytesLike,
      _salt: BytesLike,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    updateAccountVersion(
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateNonceOrdering(
      _nonceOrdering: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccountNonceOrderingUpdated(address,uint8)"(
      accountAddress?: string | null,
      nonceOrdering?: null
    ): AccountNonceOrderingUpdatedEventFilter;
    AccountNonceOrderingUpdated(
      accountAddress?: string | null,
      nonceOrdering?: null
    ): AccountNonceOrderingUpdatedEventFilter;

    "AccountVersionUpdated(address,uint8)"(
      accountAddress?: string | null,
      aaVersion?: null
    ): AccountVersionUpdatedEventFilter;
    AccountVersionUpdated(
      accountAddress?: string | null,
      aaVersion?: null
    ): AccountVersionUpdatedEventFilter;

    "ContractDeployed(address,bytes32,address)"(
      deployerAddress?: string | null,
      bytecodeHash?: BytesLike | null,
      contractAddress?: string | null
    ): ContractDeployedEventFilter;
    ContractDeployed(
      deployerAddress?: string | null,
      bytecodeHash?: BytesLike | null,
      contractAddress?: string | null
    ): ContractDeployedEventFilter;
  };

  estimateGas: {
    create(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    create2(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    create2Account(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    createAccount(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    getAccountInfo(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNewAddressCreate(
      _sender: string,
      _senderNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNewAddressCreate2(
      _sender: string,
      _bytecodeHash: BytesLike,
      _salt: BytesLike,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAccountVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateNonceOrdering(
      _nonceOrdering: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    create2(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    create2Account(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createAccount(
      _salt: BytesLike,
      _bytecodeHash: BytesLike,
      _input: BytesLike,
      _aaVersion: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAccountInfo(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNewAddressCreate(
      _sender: string,
      _senderNonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNewAddressCreate2(
      _sender: string,
      _bytecodeHash: BytesLike,
      _salt: BytesLike,
      _input: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAccountVersion(
      _version: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateNonceOrdering(
      _nonceOrdering: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
