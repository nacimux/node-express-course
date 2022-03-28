const express = require("express");
const app = express();
const {products} = require("./data");


// setup static and middleware

const logger = (res,req,next) => {
    Console.log("middleware");
    next()
}

app.use(logger)

app.get("/",(req,res) => {
    
    res.json(products)
})
app.get("/api/products/:productID",(req,res) => {

    let detailPage = products.find(element => element.id === Number(req.params.productID))
    res.json(detailPage);
    res.end()
})

app.listen(5000, ()=> {
    console.log("server listening to port 5000");
})
