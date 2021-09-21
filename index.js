const express = require("express");
const app = express();
const quoteRouter = require("./routes/quotes");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//const Quote = require("./models/quotes");

mongoose.connect("mongodb://localhost:27017/LOTRquotes");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/quotes", quoteRouter);

// app.get("/quotes", async (req, res) => {
//   const quotes = await Quote.find({});
//   res.render("quotes/index", { quotes });
// });

// app.get("/quotes/new", (req, res) => {
//   res.render("quotes/new");
// });

// app.post("/quotes", async (req, res) => {
//   const newQuote = await new Quote(req.body);
//   await newQuote.save();
//   res.redirect("/quotes");
// });

// app.get("/quotes/:id", async (req, res) => {
//   const { id } = req.params;
//   const quote = await Quote.findById(id);
//   res.render("quotes/show", { quote });
// });

// app.get("/quotes/:id/edit", async (req, res) => {
//   const { id } = req.params;
//   const quote = await Quote.findById(id);
//   res.render("quotes/edit", { quote });
// });

// app.patch("/quotes/:id", async (req, res) => {
//   const { id } = req.params;
//   await Quote.findByIdAndUpdate(id, req.body, {
//     runValidators: true,
//     new: true,
//   });
//   res.redirect("/quotes");
// });

// app.delete("/quotes/:id", async (req, res) => {
//   const { id } = req.params;
//   await Quote.findByIdAndDelete(id);
//   res.redirect("/quotes");
// });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
