/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SushiLegacyAdapter,
  SushiLegacyAdapterInterface,
} from "../../../contracts/adapters/SushiLegacyAdapter";

const _abi = [
  {
    inputs: [],
    name: "SGETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bentoBox",
    outputs: [
      {
        internalType: "contract IBentoBoxMinimal",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pairCodeHash",
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
    inputs: [],
    name: "stargateRouter",
    outputs: [
      {
        internalType: "contract IStargateRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stargateWidget",
    outputs: [
      {
        internalType: "contract IStargateWidget",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class SushiLegacyAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): SushiLegacyAdapterInterface {
    return new utils.Interface(_abi) as SushiLegacyAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiLegacyAdapter {
    return new Contract(address, _abi, signerOrProvider) as SushiLegacyAdapter;
  }
}