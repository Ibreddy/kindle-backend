const mongoose = require('mongoose');

// MongoDB URI (replace with your actual connection string if needed)
const MONGODB_URI = 'mongodb+srv://subbareddymeruva97:fgWcX2DieKskziOT@cluster0.x6665.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
// Book.insertMany([
//   {
//              title: "Pride and Prejudice",
//              author: "Jane Austen",
//              genre: "Romance",
//              publishedYear: 1813,
//              summary: "A classic novel that explores the issues of marriage, social status, and love through the life of Elizabeth Bennet.",
//              image: "https://covers.openlibrary.org/b/id/8197540-L.jpg"
//          },
//          {
//              title: "Moby-Dick",
//              author: "Herman Melville",
//              genre: "Adventure",
//              publishedYear: 1851,
//              summary: "The journey of the Pequod, led by the obsessive Captain Ahab, as he hunts for the elusive white whale, Moby-Dick.",
//              image: "https://covers.openlibrary.org/b/id/10201388-L.jpg"
//          },
//          {
//              title: "The Catcher in the Rye",
//              author: "J.D. Salinger",
//             genre: "Fiction",
//              publishedYear: 1951,
//              summary: "The story of Holden Caulfield, a troubled teenage boy who experiences the ups and downs of adolescence in New York City.",
//              image: "https://covers.openlibrary.org/b/id/10503072-L.jpg"
//          },
//          {
//              title: "1984",
//              author: "George Orwell",
//              genre: "Dystopian",
//              publishedYear: 1949,
//              summary: "A dystopian novel that explores totalitarianism, mass surveillance, and the oppression of individual thought in a society governed by a totalitarian regime.",
//              image: "https://covers.openlibrary.org/b/id/9296691-L.jpg"
//          },
//          {
//             title: "The Hobbit",
//              author: "J.R.R. Tolkien",
//              genre: "Fantasy",
//              publishedYear: 1937,
//              summary: "The adventures of Bilbo Baggins, a hobbit who embarks on an unexpected journey with a group of dwarves to reclaim a treasure.",
//              image: "https://covers.openlibrary.org/b/id/8637435-L.jpg"
//          },
//          {
//              title: "To Kill a Mockingbird",
//              author: "Harper Lee",
//              genre: "Fiction",
//              publishedYear: 1960,
//              summary: "The novel addresses the themes of racism and injustice in the Deep South through the eyes of young  Scout            Finch.",
                       
//              image: "https://covers.openlibrary.org/b/id/8999057-L.jpg"
//          },
//         {
//             title: "War and Peace",
//              author: "Leo Tolstoy",
//              genre: "Historical",
//              publishedYear: 1869,
//              summary: "A historical novel that chronicles the lives of Russian aristocratic families during the Napoleonic wars.",
//              image: "https://covers.openlibrary.org/b/id/11183549-L.jpg"
//         },
//         {
//             title: "Crime and Punishment",
//              author: "Fyodor Dostoevsky",
//             genre: "Psychological Fiction",
//             publishedYear: 1866,
//             summary: "A philosophical novel about a young man, Raskolnikov, who commits a crime and struggles with his", 
                        
//            image: "https://covers.openlibrary.org/b/id/12127777-L.jpg"
//          },
//          {
//              title: "The Odyssey",
//              author: "Homer",
//              genre: "Epic Poetry",
//              publishedYear: -700,
//              summary: "The epic journey of Odysseus as he tries to return home after the Trojan War, facing numerous challenges along the way.",
//              image: "https://covers.openlibrary.org/b/id/10273690-L.jpg"
//        },
//          {
//            title: "Frankenstein",
//           author: "Mary Shelley",
//             genre: "Horror",
//             publishedYear: 1818,
//             summary: "The story of a scientist, Victor Frankenstein, who creates a living being from dead tissue, leading to disastrous consequences.",
//             image: "https://covers.openlibrary.org/b/id/11003734-L.jpg"
//         },
//         {
//             title: "Brave New World",
//           author: "Aldous Huxley",
//             genre: "Dystopian",
//             publishedYear: 1932,
//             summary: "A novel about a future society where people are genetically engineered, socially conditioned, and kept in a state of passive happiness.",
//             image: "https://covers.openlibrary.org/b/id/15753524-L.jpg"
//         },
//         {
//             title: "The Great Gatsby",
//             author: "F. Scott Fitzgerald",
//             genre: "Fiction",
//             publishedYear: 1925,
//             summary: "A story of wealth, decadence, and love set in the Jazz Age, focusing on the mysterious Jay Gatsby and his love for Daisy Buchanan.",
//             image: "https://covers.openlibrary.org/b/id/11900608-L.jpg"
//         },
//     {
//             title: "The Picture of Dorian Gray",
//           author: "Oscar Wilde",
//             genre: "Philosophical Fiction",
//             publishedYear: 1890,
//             summary: "The novel explores the effects of vanity and indulgence through the story of Dorian Gray, a man whose portrait ages instead of him.",
//             image: "https://covers.openlibrary.org/b/id/10713888-L.jpg"
//         },
//         {
//             title: "Alice's Adventures in Wonderland",
//             author: "Lewis Carroll",
//             genre: "Fantasy",
//             publishedYear: 1865,
//             summary: "The adventures of a young girl named Alice as she falls down a rabbit hole and encounters strange creatures in a fantastical world.",
//             image: "https://covers.openlibrary.org/b/id/10543249-L.jpg"
//       },
//       {
//              title: "The Divine Comedy",
//              author: "Dante Alighieri",
//              genre: "Epic Poetry",
//              publishedYear: 1320,
//              summary: "A journey through Hell, Purgatory, and Heaven, depicting the soul's journey towards God.",
//              image: "https://covers.openlibrary.org/b/id/10169424-L.jpg"
//          },
//          {
//              title: "The Brothers Karamazov",
//              author: "Fyodor Dostoevsky",
//              genre: "Philosophical Fiction",
//              publishedYear: 1880,
//              summary: "A novel that examines morality, faith, and the existence of God through the lives of three brothers and their father.",
//              image: "https://covers.openlibrary.org/b/id/9735035-L.jpg"
//          },
//          {
//              title: "The Catcher in the Rye",
//              author: "J.D. Salinger",
//              genre: "Fiction",
//          publishedYear: 1951,
//              summary: "A novel about Holden Caulfield, a teenage boy who grapples with the struggles of growing up and the complexities of adulthood.",
//              image: "https://covers.openlibrary.org/b/id/10135880-L.jpg"
//          },
//        {
//              title: "Lord of the Flies",
//              author: "William Golding",
//              genre: "Fiction",
//              publishedYear: 1954,
//              summary: "A group of British boys stranded on an uninhabited island descends into chaos as they struggle to govern themselves.",
//            image: "https://covers.openlibrary.org/b/id/9507676-L.jpg"
//          },
//          {
//              title: "The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe",
//              author: "C.S. Lewis",
//              genre: "Fantasy",
//              publishedYear: 1950,
//              summary: "Four siblings step into the magical world of Narnia and help Aslan, the lion, battle the White Witch and bring peace to the land.",
//              image: "https://covers.openlibrary.org/b/id/8557951-L.jpg"
//          },
//          {
//              title: "The Stranger",
//              author: "Albert Camus",
//              genre: "Philosophical Fiction",
//              publishedYear: 1942,
//              summary: "The story of Meursault, a man who is emotionally detached from the world and struggles with the meaning of life.",
//              image: "https://covers.openlibrary.org/b/id/8035091-L.jpg"
//          },
//          {
//              title: "Heart of Darkness",
//              author: "Joseph Conrad",
//              genre: "Adventure",
//              publishedYear: 1899,
//           summary: "A voyage up the Congo River into the Congo Free State in the heart of Africa that reflects on the evils of imperialism.",
//              image: "https://covers.openlibrary.org/b/id/7650354-L.jpg"
//         },
//          {
//            title: "The Fountainhead",
//              author: "Ayn Rand",
//              genre: "Philosophical Fiction",
//         publishedYear: 1943,
//             summary: "A story about the life of an individualistic architect named Howard Roark who refuses to conform to societal standards.",
//        image: "https://covers.openlibrary.org/b/id/7305869-L.jpg"
//      },
//     {
//             title: "The Godfather",
//              author: "Mario Puzo",
//             genre: "Crime",
//              publishedYear: 1969,
//              summary: "The saga of the powerful Corleone crime family, led by Don Vito Corleone, and the rise of his son Michael.",
//              image: "https://covers.openlibrary.org/b/id/7884484-L.jpg"
//        },
//          {
//              title: "Gone with the Wind",
//              author: "Margaret Mitchell",
//              genre: "Historical Fiction",
//            publishedYear: 1936,
//              summary: "A sweeping historical novel about love, war, and survival during the American Civil War and Reconstruction era.",
//              image: "https://covers.openlibrary.org/b/id/10814504-L.jpg"
//        },
//          {
//              title: "The Shining",
//              author: "Stephen King",
//            genre: "Horror",
//             publishedYear: 1977,
//             summary: "A story of a family staying in an isolated hotel for the winter, where a father's mental state begins to deteriorate under the influence of malevolent forces.",
//            image: "https://covers.openlibrary.org/b/id/7506424-L.jpg"
//         }
// ])

module.exports = { Book };
