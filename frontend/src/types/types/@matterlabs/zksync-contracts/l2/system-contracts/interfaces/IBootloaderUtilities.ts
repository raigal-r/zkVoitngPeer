/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../../common";

export type TransactionStruct = {
  txType: BigNumberish;
  from: BigNumberish;
  to: BigNumberish;
  gasLimit: BigNumberish;
  gasPerPubdataByteLimit: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymaster: BigNumberish;
  nonce: BigNumberish;
  value: BigNumberish;
  reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
  data: BytesLike;
  signature: BytesLike;
  factoryDeps: BytesLike[];
  paymasterInput: BytesLike;
  reservedDynamic: BytesLike;
};

export type TransactionStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  [BigNumber, BigNumber, BigNumber, BigNumber],
  string,
  string,
  string[],
  string,
  string
] & {
  txType: BigNumber;
  from: BigNumber;
  to: BigNumber;
  gasLimit: BigNumber;
  gasPerPubdataByteLimit: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymaster: BigNumber;
  nonce: BigNumber;
  value: BigNumber;
  reserved: [BigNumber, BigNumber, BigNumber, BigNumber];
  data: string;
  signature: string;
  factoryDeps: string[];
  paymasterInput: string;
  reservedDynamic: string;
};

export interface IBootloaderUtilitiesInterface extends utils.Interface {
  functions: {
    "getTransactionHashes((uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getTransactionHashes"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getTransactionHashes",
    values: [TransactionStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getTransactionHashes",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBootloaderUtilities extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBootloaderUtilitiesInterface;

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
    getTransactionHashes(
      _transaction: TransactionStruct,
      overrides?: CallOverrides
    ): Promise<[string, string] & { txHash: string; signedTxHash: string }>;
  };

  getTransactionHashes(
    _transaction: TransactionStruct,
    overrides?: CallOverrides
  ): Promise<[string, string] & { txHash: string; signedTxHash: string }>;

  callStatic: {
    getTransactionHashes(
      _transaction: TransactionStruct,
      overrides?: CallOverrides
    ): Promise<[string, string] & { txHash: string; signedTxHash: string }>;
  };

  filters: {};

  estimateGas: {
    getTransactionHashes(
      _transaction: TransactionStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getTransactionHashes(
      _transaction: TransactionStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
