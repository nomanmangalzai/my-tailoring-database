// server.js

const express = require('express');
const connectDB = require("./src/db/connection")
const cors = require("cors");

// Create an Express application
const app = express();

// Middleware to handle JSON requests
app.use(express.json());

//allowing request from frontend 
// app.use(cors({
//     origin: 'http://localhost:5173' // Your frontend's URL
//   }));
  
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  }));
  

// Define a simple route to confirm the server is running
// app.get('/', (req, res) => {
//     res.send('Server is running!');
// });

naafRoute = require("./src/routes/postNaaf");

app.use("/naaf", naafRoute);
// start server
const startServer = async () => {
    await connectDB(); // Wait for the DB connection to finish
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// Call the function to start the server
startServer();
