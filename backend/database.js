const mongoose = require("mongoose");

// MongoDB connection URI (replace with your own connection URI)
const mongoURI =
  "mongodb+srv://ankita:assignment@cluster0.rwahsfs.mongodb.net/assignment?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle database connection errors
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
