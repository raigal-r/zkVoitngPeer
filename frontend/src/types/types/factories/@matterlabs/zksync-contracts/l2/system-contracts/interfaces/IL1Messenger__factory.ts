/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IL1Messenger,
  IL1MessengerInterface,
} from "../../../../../../@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IL1Messenger";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "L1MessageSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "sendToL1",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IL1Messenger__factory {
  static readonly abi = _abi;
  static createInterface(): IL1MessengerInterface {
    return new utils.Interface(_abi) as IL1MessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IL1Messenger {
    return new Contract(address, _abi, signerOrProvider) as IL1Messenger;
  }
}
