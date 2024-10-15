const express = require('express');
const mongoose = require('mongoose');
const Product =require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());



//routes
app.use("/api/products",productRoute);



app.get('/', (req, res)=>{
    res.send("Hello from node api server updates")

});


mongoose.connect("mongodb+srv://ravitejamannam88:%40100XDEVS@crud-api.iusbf.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=CRUD-API")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch((err) => {  // Capture and log the error
    console.error("Connection failed! Error: ", err);  // Log the error details
  });

