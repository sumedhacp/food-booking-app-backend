const Vendor = require("../models/vendorModel");

exports.createVendor = async (request, response) => {
  try {
    const vendor = await Vendor.create(request.body);
    response.status(201).json({ status: "success", data: vendor });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.getVendors = async (request, response) => {
  try {
    const vendors = await Vendor.find();
    response.json(vendors);
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.updateVendor = async (request, response) => {
  try {
    const id = request.body.id || request.query.id;

    if (!id) {
      return response.status(400).json({ status: "error", message: "Vendor id is required" });
    }

    const { id: _, ...updateData } = request.body;
    const vendor = await Vendor.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!vendor) {
      return response.status(404).json({ status: "error", message: "Vendor not found" });
    }

    response.json({ status: "success", data: vendor });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.deleteVendor = async (request, response) => {
  try {
    const id = request.body.id || request.query.id;

    if (!id) {
      return response.status(400).json({ status: "error", message: "Vendor id is required" });
    }

    await Vendor.findByIdAndDelete(id);
    response.json({ status: "success" });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchVendor = async (request, response) => {
  try {
    const filters = request.body?.filters || request.body || request.query;
    const query = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (key === "id") return;
      if (value !== undefined && value !== null && value !== "") {
        if (typeof value === "string") {
          query[key] = { $regex: value, $options: "i" };
        } else {
          query[key] = value;
        }
      }
    });

    const vendors = await Vendor.find(query);
    response.json(vendors);
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};
