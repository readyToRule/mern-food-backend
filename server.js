// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const dishRoutes = require('./routes/dishes');

const app = express();

// UPDATED CORS SETUP
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://mern-food-client.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', dishRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    // These options are now optional/deprecated, but no harm keeping for now
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection failed:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
