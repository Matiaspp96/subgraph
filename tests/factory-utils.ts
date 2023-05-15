import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { EscrowCreated, ProductCreated } from "../generated/Factory/Factory"

export function createEscrowCreatedEvent(
  escrowAddress: Address,
  seller: Address,
  amount: BigInt,
  token: Address,
  product: ethereum.Tuple
): EscrowCreated {
  let escrowCreatedEvent = changetype<EscrowCreated>(newMockEvent())

  escrowCreatedEvent.parameters = new Array()

  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "escrowAddress",
      ethereum.Value.fromAddress(escrowAddress)
    )
  )
  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  escrowCreatedEvent.parameters.push(
    new ethereum.EventParam("product", ethereum.Value.fromTuple(product))
  )

  return escrowCreatedEvent
}

export function createProductCreatedEvent(
  productId: BigInt,
  name: string,
  description: string,
  price: BigInt,
  seller: Address,
  isSold: boolean,
  ipfsHash: Bytes,
  category: string,
  image: string
): ProductCreated {
  let productCreatedEvent = changetype<ProductCreated>(newMockEvent())

  productCreatedEvent.parameters = new Array()

  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "productId",
      ethereum.Value.fromUnsignedBigInt(productId)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("isSold", ethereum.Value.fromBoolean(isSold))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromFixedBytes(ipfsHash))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  productCreatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return productCreatedEvent
}
