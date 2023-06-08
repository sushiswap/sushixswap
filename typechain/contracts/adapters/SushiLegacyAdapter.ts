/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
  PromiseOrValue,
} from "../../common";

export interface SushiLegacyAdapterInterface extends utils.Interface {
  functions: {
    "SGETH()": FunctionFragment;
    "bentoBox()": FunctionFragment;
    "factory()": FunctionFragment;
    "pairCodeHash()": FunctionFragment;
    "stargateRouter()": FunctionFragment;
    "stargateWidget()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "SGETH"
      | "bentoBox"
      | "factory"
      | "pairCodeHash"
      | "stargateRouter"
      | "stargateWidget"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "SGETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "bentoBox", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pairCodeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stargateRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stargateWidget",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "SGETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bentoBox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pairCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stargateRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stargateWidget",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SushiLegacyAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SushiLegacyAdapterInterface;

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
    SGETH(overrides?: CallOverrides): Promise<[string]>;

    bentoBox(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    pairCodeHash(overrides?: CallOverrides): Promise<[string]>;

    stargateRouter(overrides?: CallOverrides): Promise<[string]>;

    stargateWidget(overrides?: CallOverrides): Promise<[string]>;
  };

  SGETH(overrides?: CallOverrides): Promise<string>;

  bentoBox(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  pairCodeHash(overrides?: CallOverrides): Promise<string>;

  stargateRouter(overrides?: CallOverrides): Promise<string>;

  stargateWidget(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    SGETH(overrides?: CallOverrides): Promise<string>;

    bentoBox(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    pairCodeHash(overrides?: CallOverrides): Promise<string>;

    stargateRouter(overrides?: CallOverrides): Promise<string>;

    stargateWidget(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    SGETH(overrides?: CallOverrides): Promise<BigNumber>;

    bentoBox(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    pairCodeHash(overrides?: CallOverrides): Promise<BigNumber>;

    stargateRouter(overrides?: CallOverrides): Promise<BigNumber>;

    stargateWidget(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    SGETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bentoBox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pairCodeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stargateRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stargateWidget(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
