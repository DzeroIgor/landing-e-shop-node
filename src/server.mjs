import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises';
import { getProductById } from "./modules/eshop.mjs";

const server = createServer( async (req, res) => {
    let html
    switch (true) {
      case req.url === "/":
        let product = await getProductById(1);
        html = (await readFile("./templates/home.html")).toString();
        html = html.replace(
          "{% PRODUCT %}",
          `<h1>${product.name}</h1>
        <img src="/images/${product.image}" width="200"/>
        <div>
        ${product.standardPrice.amount}
        ${product.standardPrice.currency}
        </div>
        <hr />
        <a href="/order">ORDER</a>`
        );
        break;
      case req.url.startsWith("/images/"):
        let parts = req.url.split("/");
        let image = parts.pop();
        html = await readFile(`./images/${image}`);
        break;
      case req.url === "/order":
        html = (await readFile("./templates/order.html")).toString();
        break;
      case req.url === "/pay":
        html = "TO BE PAYED!!!";
        break;
      case req.url === "/contacts":
        html = `<h1>Contact page</h1>`;
        break;
      default:
        html = `Ooops, page not found`;
        res.writeHead(404);
    }
    
    res.end(html)
})

server.listen("3000", "localhost")


/*
const server = createServer( async (req, res) => {
    // HW: rewrite this code using switch/case
    let html
    if (req.url === "/") {
      let product = await getProductById(1);
      html = (await readFile("./templates/home.html")).toString();
      html = html.replace(
        "{% PRODUCT %}",
        `<h1>${product.name}</h1>
        <img src="/images/${product.image}" width="200"/>
        <div>
        ${product.standardPrice.amount}
        ${product.standardPrice.currency}
        </div>
        <hr />
        <a href="/order">ORDER</a>`
      );
    } else if (req.url.startsWith("/images/")) {
      let parts = req.url.split("/")
      let image = parts.pop()
      html = ( await readFile(`./images/${image}`));

    } else if (req.url === "/order") {
      html = (await readFile("./templates/order.html")).toString();

    } else if (req.url === "/pay") {
      html = "TO BE PAYED!!!"

    } else if (req.url === "/contacts") {
      html = `<h1>Contact information</h1>`;
    } else {
      html = `Ooops, page not found`;
      res.writeHead(404);
    }
    // console.log(req.headers)
    // console.log(req.url)
    // res.write()
    // res.end("It's working!")
    res.end(html)
})

server.listen("3000", "localhost");
*/