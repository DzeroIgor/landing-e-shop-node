import { createServer } from 'node:http'

const server = createServer( (req, res) => {
    // HW: rewrite this code using switch/case
    let html
    switch (req.url) {
        case "/":
           html = `<h1>Home page</h1>`; 
        break;
        case "/order":
            html = `<h1>Order page</h1>`;
        break;
        case "/contacts":
            html = `<h1>Contact page</h1>`;
        break;
        default:
            html = `Ooops, page not found`
            res.writeHead(404)
    }
    
    res.end(html)
})

server.listen("3000", "localhost")


/*
const server = createServer( (req, res) => {
    // HW: rewrite this code using switch/case
    let html
    if (req.url === "/") {
      html = `<h1>Home page</h1>`;
    } else if (req.url === "/order") {
      html = `<h1>Order page</h1>`;
    } else if (req.url === "/contacts") {
      html = `<h1>Contact information</h1>`;
    } else {
        html = `Ooops, page not found`
        res.writeHead(404)
    }
    // console.log(req.headers)
    // console.log(req.url)
    // res.write()
    // res.end("It's working!")
    res.end(html)
})
*/