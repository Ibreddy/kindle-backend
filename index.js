const express = require('express');
const methodOverride = require('method-override');
const { Book } = require('./mongo');  // Ensure this points to your MongoDB connection and Book model
let port=process.env.PORT||10000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');


// Function to initialize sample books in the database
const initializeBooks = async () => {
    try {
        const count = await Book.countDocuments();
        console.log(`Book count in the database: ${count}`); // Debugging line
        if (count === 0) {
            await Book.insertMany(sampleBooks);
            console.log("Sample books added to the database");
        } else {
            console.log("Books already present in the database");
        }
    } catch (error) {
        console.error("Error initializing books:", error);
    }
};

// Route to render the books page
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.render('books', { books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a book by ID
app.delete('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const result = await Book.findByIdAndDelete(bookId);
        if (result) {
            res.send("Book deleted successfully!");
        } else {
            res.status(404).send("Book not found.");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting book.");
    }
});

// Start the server and initialize sample books

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);
    await initializeBooks();  // Insert sample books if database is empty
});
