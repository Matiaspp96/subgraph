import {
  EscrowCreated as EscrowCreatedEvent,
  ProductCreated as ProductCreatedEvent
} from "../generated/Factory/Factory"
import { EscrowCreated, ProductCreated } from "../generated/schema"

export function handleEscrowCreated(event: EscrowCreatedEvent): void {
  let entity = new EscrowCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.escrowAddress = event.params.escrowAddress
  entity.seller = event.params.seller
  entity.amount = event.params.amount
  entity.token = event.params.token
  entity.product_id = event.params.product.id
  entity.product_name = event.params.product.name
  entity.product_description = event.params.product.description
  entity.product_price = event.params.product.price
  entity.product_seller = event.params.product.seller
  entity.product_isSold = event.params.product.isSold
  entity.product_ipfsHash = event.params.product.ipfsHash
  entity.product_category = event.params.product.category
  entity.product_image = event.params.product.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProductCreated(event: ProductCreatedEvent): void {
  let entity = new ProductCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.productId = event.params.productId
  entity.name = event.params.name
  entity.description = event.params.description
  entity.price = event.params.price
  entity.seller = event.params.seller
  entity.isSold = event.params.isSold
  entity.ipfsHash = event.params.ipfsHash
  entity.category = event.params.category
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
