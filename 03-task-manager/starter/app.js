
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
require("dotenv").config();

const port = 3000;

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`server listening to port ${port}`);
        });
    } catch (error) {
        console.log("connection error", error);
    }
}

start();

