const mongoose = require("mongoose");
const Quote = require("./models/quotes");

mongoose.connect("mongodb://localhost:27017/expressDemo2");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

const seedQuotes = [
  {
    author: "Aragorn",
    quote: "If by my life or death I can protect you, I will.",
  },
  {
    author: "Legolas",
    quote: "He stands not alone. You would die before your stroke fell.",
  },
  {
    author: "Gimli",
    quote:
      "I name you Elf-friend; and may the stars shine upon the end of your road!",
  },
  {
    author: "Gandalf",
    quote:
      "All we have to decide is what to do with the time that is given us.",
  },
  {
    author: "Merry",
    quote: "No! You don't understand! We're Hobbits! Halflings!Shire-folk!",
  },
  { author: "Pippin", quote: "Short cuts make long delays." },
  {
    author: "Sam",
    quote:
      "There's some good in this world, Mr. Frodo, and it's worth fighting for.",
  },
  {
    author: "I will take the Ring, though I do not know the way.",
  },
  { author: "Boromir", quote: "One does not simply walk into Mordor." },
];

Quote.insertMany(seedQuotes)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const seedQu = [
  { username: "trancos", quote: "cuenta con mi espada" },
  { username: "trancos", quote: "cuenta con mi espada" },
];
