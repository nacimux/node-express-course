const mongoose = require("mongoose");
const connectionString = 
"mongodb+srv://nacimux:@t2ib7r2A@cluster0.c2fs4.mongodb.net/nodeExpress?retryWrites=true&w=majority";



mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Error", err.message);
}   );