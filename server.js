const express=require("express");
const app=express();
const db_connect=require("./connect_db");



require("dotenv").config();
db_connect()
app.use(express.json());
app.use("/user",require("./Routes/user"));

app.use("/product",require("./Routes/product"));


app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("Server is running on port 5000"));


