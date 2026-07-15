const mongoose = require("mongoose");

const stallSchema = new mongoose.Schema(
  {
    bookingid: { type: String, required: true },
    vendorid: { type: String, required: true },
    vendorname: { type: String, required: true },
    stallno: { type: String, required: true },
    bookingdate: { type: String, required: true },
    bookigno: { type: String, required: true },
    rentalamount: { type: String, required: true },
    paymentstatus: { type: String, required: true },
    bookingstatus: { type: String, required: true },
    festivalday: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Stall", stallSchema, "Stalls");
