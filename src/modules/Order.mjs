class Order {
  constructor(
    id,
    client,
    product,
    quantity,
    placed,
    completedOn,
    standardPrice,
    discountPrice
  ) {
    this.id = id;
    this.client = client;
    this.product = product;
    this.quantity = quantity;
    this.placed = placed;
    this.completedOn = completedOn;
    this.standardPrice = standardPrice;
    this.discountPrice = discountPrice;
  }
}

export { Order };
