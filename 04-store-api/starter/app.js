require("dotenv").config();
const productsRouter = require("./routes/products");
const connectDB = require("./db/connect");

//async error handling

require("dotenv")
const express = require('express');
const app = express();
const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/error-handler');
require("express-async-errors");

// Middleware
app.use(express.json());

    //Routes
        
app.get('/', (req, res) => {
    res.send('<h1>Store Api</h1><a href="/api/v1/products">Products</a>');
});

// products Route

app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
    try { connectDB(process.env.MONGO_URI);
        await app.listen(port);
        console.log(`Server is listening on port ${port}`);
    } catch (error) {
        console.log(error);
    }
}

start();


