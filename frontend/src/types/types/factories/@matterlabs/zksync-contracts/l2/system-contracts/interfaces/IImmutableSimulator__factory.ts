/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IImmutableSimulator,
  IImmutableSimulatorInterface,
} from "../../../../../../@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IImmutableSimulator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getImmutable",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dest",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "value",
            type: "bytes32",
          },
        ],
        internalType: "struct ImmutableData[]",
        name: "_immutables",
        type: "tuple[]",
      },
    ],
    name: "setImmutables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IImmutableSimulator__factory {
  static readonly abi = _abi;
  static createInterface(): IImmutableSimulatorInterface {
    return new utils.Interface(_abi) as IImmutableSimulatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IImmutableSimulator {
    return new Contract(address, _abi, signerOrProvider) as IImmutableSimulator;
  }
}
