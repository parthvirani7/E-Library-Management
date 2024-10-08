const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.route');
const bookRoutes = require('./routes/book.route');
require('dotenv').config();
const cors = require("cors")
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend to access backend
  credentials: true,  // Allow cookies to be sent
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error: ", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

