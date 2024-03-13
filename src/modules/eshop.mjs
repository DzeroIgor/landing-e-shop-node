import { dbConnect } from "./db.mjs";
import { Product } from "./Product.mjs";
import { StandardPrice, DiscountPrice } from "./Money.mjs";
import { Client } from "./Client.mjs";
import { Order } from "./Order.mjs";

const getProductById = async (id) => {
    const sql = dbConnect();
    const products = await sql`SELECT * FROM products WHERE id=${id}`;
    const product = products[0];

    const product1 = new Product(
        product.id,
        product.name,
        product.image,
        product.description,
        new StandardPrice(
        product.price_standard_amount,
        product.price_standard_currency
        ),
        new DiscountPrice(
        product.price_discount_amount,
        product.price_discount_currency
        )
    );

    return product1;
}


const addClient = async (fullName, email, phone) => {
    const client = new Client(null, fullName, email, phone);
    const sql = dbConnect()
    const clientData = await sql`
        INSERT INTO clients (full_name, email, phone)
        VALUES (${client.fullName}, ${client.email}, ${client.phone})
        RETURNING id`;

    client.id = clientData[0].id;

    return client;
} 

const getClientById = async (id) => {
    const sql = dbConnect();
    const clientsData = await sql`SELECT * FROM clients WHERE id=${id}`;
    const clientData = clientsData[0];

    const client = new Client(
        clientData.id,
        clientData.fullName,
        clientData.email,
        clientData.phone
    );

    return client;
}

const getClientByEmailOrPhone = async (email, phone) => {
  const sql = dbConnect();
  let clientsData;
  // const clientsData = await sql`SELECT * FROM clients WHERE email=${email} OR phone=${phone}`;
  if (email) {
    clientsData = await sql`SELECT * FROM clients WHERE email=${email}`;
  } else if (phone) {
    clientsData = await sql`SELECT * FROM clients WHERE phone=${phone}`;
  } else {
    throw new Error("Email or phone number must be provided.");
  }

  const clientData = clientsData[0];

  if (!clientData) {
    throw new Error("The client was not found.");
  }

  const client = new Client(
    clientData.id,
    clientData.full_name,
    clientData.email,
    clientData.phone
  );

  return client;
};


const placeOrder = async (client, product, quantity) => {
    let order = new Order(
        null,
        client,
        product,
        quantity,
        new Date(),
        null,
        new StandardPrice(
            product.standardPrice.amount * quantity,
            product.standardPrice.currency
            ),
        new DiscountPrice(
            product.discountPrice.amount * quantity,
            product.discountPrice.currency
            )
            );
    const sql = dbConnect();
    const orderData = await sql`
        INSERT INTO orders (
            product_id,
            quantity,
            client_id,
            placed_on,
            completed_on,
            const_standard_amount,
            const_standard_currency,
            const_discount_amount,
            const_discount_currency
        )VALUES (
            ${order.product.id},
            ${order.quantity},
            ${order.client.id},
            ${order.placed},
            ${order.completedOn},
            ${order.product.standardPrice.amount},
            ${order.product.standardPrice.currency},
            ${order.product.discountPrice.amount},
            ${order.product.discountPrice.currency}
        )
    RETURNING id`;
    order.id = orderData[0].id;

    return order;
}

export {
  getProductById,
  addClient,
  getClientById,
  placeOrder,
  getClientByEmailOrPhone
};