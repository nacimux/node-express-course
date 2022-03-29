
require("dotenv").config();
const connectDB = require("./db/connect");
const ProductModel = require("./models/product");
jsonProducts = require("./products.json");


const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await ProductModel.deleteMany();
    await ProductModel.create(jsonProducts);
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

populate();