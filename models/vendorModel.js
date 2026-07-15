const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorId: { type: String, required: true },
  vendorName: { type: String, required: true },
  ownerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  businessName: { type: String, required: true },
  foodCategory: { type: String, required: true },
  cuisineType: { type: String, required: true },
  numberOfStaff: { type: Number, required: true },
  licenseNumber: { type: String, required: true },
  bookingDate: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  stallNumber: { type: String, required: true }
});

module.exports = mongoose.model("Vendor", vendorSchema);

/*module.exports = mongoose.model("Vendor", vendorSchema, "Vendors");*/
