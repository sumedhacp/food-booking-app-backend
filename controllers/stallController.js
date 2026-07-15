const Stall = require("../models/stallModel");

exports.createStall = async (request, response) => {
  try {
    const stall = await Stall.create(request.body);
    response.status(201).json({ status: "success", data: stall });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.getStalls = async (request, response) => {
  try {
    const stalls = await Stall.find();
    response.json(stalls);
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.updateStall = async (request, response) => {
  try {
    const id = request.body.id || request.query.id;

    if (!id) {
      return response.status(400).json({ status: "error", message: "Stall id is required" });
    }

    const { id: _, ...updateData } = request.body;
    const stall = await Stall.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!stall) {
      return response.status(404).json({ status: "error", message: "Stall not found" });
    }

    response.json({ status: "success", data: stall });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.deleteStall = async (request, response) => {
  try {
    const id = request.body.id || request.query.id;

    if (!id) {
      return response.status(400).json({ status: "error", message: "Stall id is required" });
    }

    await Stall.findByIdAndDelete(id);
    response.json({ status: "success" });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchStall = async (request, response) => {
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

    const stalls = await Stall.find(query);
    response.json(stalls);
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};
