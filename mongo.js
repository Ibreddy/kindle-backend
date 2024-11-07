const mongoose = require('mongoose');

// MongoDB URI (replace with your actual connection string if needed)
const MONGODB_URI = 'mongodb://localhost:27017/kindleDB';

// Connect to MongoDB (no need for useNewUrlParser and useUnifiedTopology)
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define the Book schema and model
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: false },
  publishedYear: { type: Number, required: false },
  summary: { type: String, required: false },
  image: { type: String, required: false } // Optional field for image URL
});

const Book = mongoose.model('Book', bookSchema);

module.exports = { Book };
