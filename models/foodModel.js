const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    menuId: { type: String, required: true },
    vendorId: { type: String, required: true },
    vendorName: { type: String, required: true },
    foodItemName: { type: String, required: true },
    foodCategory: { type: String, required: true },
    cuisineType: { type: String, required: true },
    price: { type: String, required: true },
    availabilityStatus: { type: String, required: true },
    specialOffer: { type: String, default: "" },
    foodImageUrl: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema, "Foods");
