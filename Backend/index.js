const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// Database Connection with Mongodb

mongoose.connect(
  "mongodb+srv://ecommerceMern:use123@cluster0.liura.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// APIC reation

app.get("/", (req, res) => {
  res.send("Express is Running");
});

//Image Stoage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cd) => {
    return cd(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creating upload endpoint for Images

app.use("/images", express.static("Upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    suCcess: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//Schema for Creating Products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addprodtct", async (req, res) => {
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
});

// User Authentication

app.listen(port, (error) => {
  if (!error) {
    console.log("Server listening on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
