const mongoose = require('mongoose');

// Local MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/DawoodzaiMallDb'; // Replace with your actual database name
const connectDB = async () => {
    console.log("hit")

    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
