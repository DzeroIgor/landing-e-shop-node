import { Client } from "./Client.mjs";
import { Order } from "./Order.mjs";

class Payment {
  constructor(id, client, order, remoteId, completedOn, state, priceStandard) {
    this.id = id;
    this.client = client;
    this.order = order;
    this.remoteId = remoteId;
    this.completedOn = completedOn;
    this.state = state;
    this.priceStandard = priceStandard;
  }

  getOrderId() {
    return this.order.id;
  }

  getClientId() {
    return this.client.id;
  }
}

export { Payment };
