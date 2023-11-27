import express from 'express';
import colors from 'colors';
import  dotenv from 'dotenv'
import connectDb from './Config/db.js';
import authRoutes from './Route/authRoute.js'

const app = express();

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


app.listen(port, () => {
  console.log(`Server  is on ${process.env.DEV_MODE} MODE    listening at http://localhost:${port}`.red);
});
