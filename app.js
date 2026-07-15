require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const {
  createFood,
  getFoods,
  updateFood,
  deleteFood,
  searchFood
} = require("./controllers/foodController");

const {
  createVendor,
  getVendors,
  updateVendor,
  deleteVendor,
  searchVendor
} = require("./controllers/vendorController");

const {
  createStall,
  getStalls,
  updateStall,
  deleteStall,
  searchStall
} = require("./controllers/stallController");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

app.post("/add-food", createFood);
app.post("/view-food", getFoods);
app.post("/update-food", updateFood);
app.post("/delete-food", deleteFood);
app.post("/search-food", searchFood);

app.post("/add-vendor", createVendor);
app.post("/view-vendor", getVendors);
app.post("/update-vendor", updateVendor);
app.post("/delete-vendor", deleteVendor);
app.post("/search-vendor", searchVendor);

app.post("/add-stall", createStall);
app.post("/view-stall", getStalls);
app.post("/update-stall", updateStall);
app.post("/delete-stall", deleteStall);
app.post("/search-stall", searchStall);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});