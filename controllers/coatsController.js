const express = require("express");
const {
  getAllCoats,
  getCoat,
  createCoat,
  deleteCoat,
  updateCoat,
  getAllCoatsWithLocations,
  getCoatWithLocationById
} = require("../models/coats");

const coatsController = express.Router();
const { checkName, checkBrand, checkBoolean, checkLocationId } = require('../validations/checkCoats');

// New route to get all coats with their associated locations
coatsController.get("/all", async (req, res) => {
  try {
    const allCoatsWithLocations = await getAllCoatsWithLocations();
    res.status(200).json(allCoatsWithLocations);
  } catch (error) {
    res.status(500).json({ error: "allCoatsWithLocations Server error" });
  }
});

// Updated route to get a single coat by ID
coatsController.get("/all/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const oneCoatWithLocation = await getCoatWithLocationById(id);

    if (oneCoatWithLocation) {
      res.status(200).json(oneCoatWithLocation);
    } else {
      res.status(404).json({ error: `Coat with ID ${id} not found` });
    }
  } catch (error) {
    console.error(`Error fetching coat with location by ID ${id}:`, error.message);
    res.status(500).json({ error: `Server error while fetching coat with ID ${id}` });
  }
});

coatsController.get("/", async (req, res) => {
  try {
    const allCoats = await getAllCoats();
    res.status(200).json(allCoats);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

coatsController.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const oneCoat = await getCoat(id);
    res.status(200).json(oneCoat);
  } catch (error) {
    res.status(404).json({ error: "ID Not Found" });
  }
});

coatsController.post("/", checkName, checkBrand, checkBoolean, checkLocationId, async (req, res) => {
  try {
    const postCoat = await createCoat(req.body);
    res.status(200).json(postCoat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

coatsController.put("/:id", checkName, checkBrand, checkBoolean, checkLocationId, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updatedCoat = await updateCoat(id, body);
    if (updatedCoat.id) {
      res.status(200).json(updatedCoat);
    } else {
      res.status(404).json({ error: "Check Coat Params" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

coatsController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedCoat = await deleteCoat(id);
    if (deletedCoat.id) {
      res.status(200).json(deletedCoat);
    } else {
      res.status(404).json({ error: "ID Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = coatsController;
