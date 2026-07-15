const Food = require("../models/foodModel");

exports.createFood = async (request, response) => {
  try {
    const food = await Food.create(request.body);
    response.status(201).json({ status: "success", data: food });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.getFoods = async (request, response) => {
  try {
    const foods = await Food.find();
    response.json(foods);
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.updateFood = async (request, response) => {
  try {
    const id = request.body.id || request.query.id;

    if (!id) {
      return response.status(400).json({ status: "error", message: "Food id is required" });
    }

    const { id: _, ...updateData } = request.body;
    const food = await Food.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });

    if (!food) {
      return response.status(404).json({ status: "error", message: "Food not found" });
    }

    response.json({ status: "success", data: food });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.deleteFood = async (request, response) => {
  try {
    const id = request.body.id || request.query.id;

    if (!id) {
      return response.status(400).json({ status: "error", message: "Food id is required" });
    }

    await Food.findByIdAndDelete(id);
    response.json({ status: "success" });
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};

exports.searchFood = async (request, response) => {
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

    const foods = await Food.find(query);
    response.json(foods);
  } catch (error) {
    response.status(500).json({ status: "error", message: error.message });
  }
};
