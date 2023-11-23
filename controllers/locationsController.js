const express = require("express");
const {
  getAllLocations,
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation
} = require("../models/locations");

const locationsController = express.Router();

locationsController.get("/", async (req, res) => {
  try {
    const allLocations = await getAllLocations();
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

locationsController.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const oneLocation = await getLocation(id);
    res.status(200).json(oneLocation);
  } catch (error) {
    res.status(404).json({ error: "ID Not Found" });
  }
});

locationsController.post("/", async (req, res) => {
  try {
    const postLocation = await createLocation(req.body);
    res.status(200).json(postLocation);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

locationsController.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updatedLocation = await updateLocation(id, body);
    if (updatedLocation.location_id) {
      res.status(200).json(updatedLocation);
    } else {
      res.status(404).json({ error: "Check Location Params" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

locationsController.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedLocation = await deleteLocation(id);
    if (deletedLocation.location_id) {
      res.status(200).json(deletedLocation);
    } else {
      res.status(404).json({ error: "ID Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = locationsController;
