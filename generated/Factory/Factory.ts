// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class EscrowCreated extends ethereum.Event {
  get params(): EscrowCreated__Params {
    return new EscrowCreated__Params(this);
  }
}

export class EscrowCreated__Params {
  _event: EscrowCreated;

  constructor(event: EscrowCreated) {
    this._event = event;
  }

  get escrowAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get product(): EscrowCreatedProductStruct {
    return changetype<EscrowCreatedProductStruct>(
      this._event.parameters[4].value.toTuple()
    );
  }
}

export class EscrowCreatedProductStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get seller(): Address {
    return this[4].toAddress();
  }

  get isSold(): boolean {
    return this[5].toBoolean();
  }

  get ipfsHash(): Bytes {
    return this[6].toBytes();
  }

  get category(): string {
    return this[7].toString();
  }

  get image(): string {
    return this[8].toString();
  }
}

export class ProductCreated extends ethereum.Event {
  get params(): ProductCreated__Params {
    return new ProductCreated__Params(this);
  }
}

export class ProductCreated__Params {
  _event: ProductCreated;

  constructor(event: ProductCreated) {
    this._event = event;
  }

  get productId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get name(): string {
    return this._event.parameters[1].value.toString();
  }

  get description(): string {
    return this._event.parameters[2].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get isSold(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }

  get ipfsHash(): Bytes {
    return this._event.parameters[6].value.toBytes();
  }

  get category(): string {
    return this._event.parameters[7].value.toString();
  }

  get image(): string {
    return this._event.parameters[8].value.toString();
  }
}

export class Factory__createEscrowInputProductStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get seller(): Address {
    return this[4].toAddress();
  }

  get isSold(): boolean {
    return this[5].toBoolean();
  }

  get ipfsHash(): Bytes {
    return this[6].toBytes();
  }

  get category(): string {
    return this[7].toString();
  }

  get image(): string {
    return this[8].toString();
  }
}

export class Factory__productsResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: BigInt;
  value4: Address;
  value5: boolean;
  value6: Bytes;
  value7: string;
  value8: string;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: BigInt,
    value4: Address,
    value5: boolean,
    value6: Bytes,
    value7: string,
    value8: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromFixedBytes(this.value6));
    map.set("value7", ethereum.Value.fromString(this.value7));
    map.set("value8", ethereum.Value.fromString(this.value8));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getName(): string {
    return this.value1;
  }

  getDescription(): string {
    return this.value2;
  }

  getPrice(): BigInt {
    return this.value3;
  }

  getSeller(): Address {
    return this.value4;
  }

  getIsSold(): boolean {
    return this.value5;
  }

  getIpfsHash(): Bytes {
    return this.value6;
  }

  getCategory(): string {
    return this.value7;
  }

  getImage(): string {
    return this.value8;
  }
}

export class Factory extends ethereum.SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  allEscrows(param0: BigInt): Address {
    let result = super.call("allEscrows", "allEscrows(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_allEscrows(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("allEscrows", "allEscrows(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createEscrow(
    seller: Address,
    amount: BigInt,
    token: Address,
    product: Factory__createEscrowInputProductStruct
  ): Address {
    let result = super.call(
      "createEscrow",
      "createEscrow(address,uint256,address,(uint256,string,string,uint256,address,bool,bytes32,string,string)):(address)",
      [
        ethereum.Value.fromAddress(seller),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromTuple(product)
      ]
    );

    return result[0].toAddress();
  }

  try_createEscrow(
    seller: Address,
    amount: BigInt,
    token: Address,
    product: Factory__createEscrowInputProductStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createEscrow",
      "createEscrow(address,uint256,address,(uint256,string,string,uint256,address,bool,bytes32,string,string)):(address)",
      [
        ethereum.Value.fromAddress(seller),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromTuple(product)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAllEscrows(): Array<Address> {
    let result = super.call("getAllEscrows", "getAllEscrows():(address[])", []);

    return result[0].toAddressArray();
  }

  try_getAllEscrows(): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getAllEscrows",
      "getAllEscrows():(address[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  isTokenWhitelisted(token: Address): boolean {
    let result = super.call(
      "isTokenWhitelisted",
      "isTokenWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(token)]
    );

    return result[0].toBoolean();
  }

  try_isTokenWhitelisted(token: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTokenWhitelisted",
      "isTokenWhitelisted(address):(bool)",
      [ethereum.Value.fromAddress(token)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  products(param0: BigInt): Factory__productsResult {
    let result = super.call(
      "products",
      "products(uint256):(uint256,string,string,uint256,address,bool,bytes32,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Factory__productsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBoolean(),
      result[6].toBytes(),
      result[7].toString(),
      result[8].toString()
    );
  }

  try_products(param0: BigInt): ethereum.CallResult<Factory__productsResult> {
    let result = super.tryCall(
      "products",
      "products(uint256):(uint256,string,string,uint256,address,bool,bytes32,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Factory__productsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBoolean(),
        value[6].toBytes(),
        value[7].toString(),
        value[8].toString()
      )
    );
  }

  whitelistTokens(param0: Address): boolean {
    let result = super.call(
      "whitelistTokens",
      "whitelistTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_whitelistTokens(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "whitelistTokens",
      "whitelistTokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get ownerMarketplace(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddTokenToWhitelistCall extends ethereum.Call {
  get inputs(): AddTokenToWhitelistCall__Inputs {
    return new AddTokenToWhitelistCall__Inputs(this);
  }

  get outputs(): AddTokenToWhitelistCall__Outputs {
    return new AddTokenToWhitelistCall__Outputs(this);
  }
}

export class AddTokenToWhitelistCall__Inputs {
  _call: AddTokenToWhitelistCall;

  constructor(call: AddTokenToWhitelistCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddTokenToWhitelistCall__Outputs {
  _call: AddTokenToWhitelistCall;

  constructor(call: AddTokenToWhitelistCall) {
    this._call = call;
  }
}

export class CreateEscrowCall extends ethereum.Call {
  get inputs(): CreateEscrowCall__Inputs {
    return new CreateEscrowCall__Inputs(this);
  }

  get outputs(): CreateEscrowCall__Outputs {
    return new CreateEscrowCall__Outputs(this);
  }
}

export class CreateEscrowCall__Inputs {
  _call: CreateEscrowCall;

  constructor(call: CreateEscrowCall) {
    this._call = call;
  }

  get seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get product(): CreateEscrowCallProductStruct {
    return changetype<CreateEscrowCallProductStruct>(
      this._call.inputValues[3].value.toTuple()
    );
  }
}

export class CreateEscrowCall__Outputs {
  _call: CreateEscrowCall;

  constructor(call: CreateEscrowCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateEscrowCallProductStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get name(): string {
    return this[1].toString();
  }

  get description(): string {
    return this[2].toString();
  }

  get price(): BigInt {
    return this[3].toBigInt();
  }

  get seller(): Address {
    return this[4].toAddress();
  }

  get isSold(): boolean {
    return this[5].toBoolean();
  }

  get ipfsHash(): Bytes {
    return this[6].toBytes();
  }

  get category(): string {
    return this[7].toString();
  }

  get image(): string {
    return this[8].toString();
  }
}

export class RemoveTokenFromWhitelistCall extends ethereum.Call {
  get inputs(): RemoveTokenFromWhitelistCall__Inputs {
    return new RemoveTokenFromWhitelistCall__Inputs(this);
  }

  get outputs(): RemoveTokenFromWhitelistCall__Outputs {
    return new RemoveTokenFromWhitelistCall__Outputs(this);
  }
}

export class RemoveTokenFromWhitelistCall__Inputs {
  _call: RemoveTokenFromWhitelistCall;

  constructor(call: RemoveTokenFromWhitelistCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveTokenFromWhitelistCall__Outputs {
  _call: RemoveTokenFromWhitelistCall;

  constructor(call: RemoveTokenFromWhitelistCall) {
    this._call = call;
  }
}