const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true },
    petName: { type: String, required: true },
    petType: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    weightKg: { type: String, required: true },
    vaccinationStatus: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerPhone: { type: String, required: true },
    ownerEmail: { type: String, required: true },
    checkInDate: { type: String, required: true },
    checkOutDate: { type: String, required: true },
    kennelNumber: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema, "Vendors");
