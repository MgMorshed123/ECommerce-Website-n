import express from 'express';
import colors from 'colors';
import  dotenv from 'dotenv'
// import connectDb from './Config/db.js';
import authRoutes from './Server/Route/authRoute.js'
import CategoryRoutes from './Server/Route/categoryRoutes.js'
import ProductsRoutes from './Server/Route/ProductRoutes.js'
import cors from 'cors'
import path from 'path'
import morgan from 'morgan';
import connectDb from './Server/Config/db.js';
const app = express();
app.use(morgan("dev"))
app.use(express.json());
// app.use(express.static(path.join(__dirname, './clinet/build')))



app.use(cors())
dotenv.config()
const port = process.env.PORT;
console.log(port)



// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


connectDb()
// Start the server




// routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/category", CategoryRoutes)
app.use("/api/v1/products", ProductsRoutes)

// rest api 

// app.use('*' , function (req,res) {
//   res.sendFile(path.join(__dirname, *./client/build/indexedDB.html* ));})



  app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/indexedDB.html"));
  });


app.listen(port, () => {
  console.log(`Server  is on ${process.env.DEV_MODE} MODE    listening at http://localhost:${port}`.red);
});
