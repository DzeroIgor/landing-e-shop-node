import {
  getProductById,
  addClient,
  getClientById,
  placeOrder,
  getClientByEmailOrPhone
} from "./modules/eshop.mjs";

  
// await addClient ('First Client', 'fc1@example.host', '123456')
let product = await getProductById(1)
let client = await getClientById(1)
let clientEP = await getClientByEmailOrPhone(null, "123456");

let order = await placeOrder(client, product, 5)

// console.log(product);
console.table(clientEP);


