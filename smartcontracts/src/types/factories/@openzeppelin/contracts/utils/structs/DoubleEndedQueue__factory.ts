/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DoubleEndedQueue,
  DoubleEndedQueueInterface,
} from "../../../../../@openzeppelin/contracts/utils/structs/DoubleEndedQueue";

const _abi = [
  {
    inputs: [],
    name: "Empty",
    type: "error",
  },
  {
    inputs: [],
    name: "OutOfBounds",
    type: "error",
  },
] as const;

const _bytecode =
  "0x00000001012001900000000c0000613d0000008001000039000000400010043f0000000001000416000000000110004c0000000c0000c13d00000020010000390000010000100443000001200000044300000005010000410000000f0001042e000000000100001900000010000104300000000e000004320000000f0001042e00000010000104300000000000000000000000000000000000000000000000000000000200000000000000000000000000000040000001000000000000000000d4140eeb70fad8fed32a3caad084e2a6241dd59b9c9582856edab773e5f8edf9";

type DoubleEndedQueueConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DoubleEndedQueueConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DoubleEndedQueue__factory extends ContractFactory {
  constructor(...args: DoubleEndedQueueConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<DoubleEndedQueue> {
    return super.deploy(overrides || {}) as Promise<DoubleEndedQueue>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DoubleEndedQueue {
    return super.attach(address) as DoubleEndedQueue;
  }
  override connect(signer: Signer): DoubleEndedQueue__factory {
    return super.connect(signer) as DoubleEndedQueue__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DoubleEndedQueueInterface {
    return new utils.Interface(_abi) as DoubleEndedQueueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DoubleEndedQueue {
    return new Contract(address, _abi, signerOrProvider) as DoubleEndedQueue;
  }
}
