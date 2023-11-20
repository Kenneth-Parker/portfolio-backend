const express = require("express");
const {
  getAllResources,
  getResource,
  createResource,
  deleteResource,
  updateResource,
} = require("../models/resources");

const {
  getAllLocations,
  getLocation,
  createLocation,
  deleteLocation,
  updateLocation
} = require("../models/locations");

const resources = express.Router();
const { checkName, checkBrand, checkBoolean, checkLocationId } = require('../validations/checkResources');

resources.get("/", async (req, res) => {
  try {
    const allResources = await getAllResources();
    res.status(200).json(allResources);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

resources.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const oneResource = await getResource(id);
    res.status(200).json(oneResource);
  } catch (error) {
    res.status(404).json({ error: "ID Not Found" });
  }
});

resources.post("/", checkName, checkBrand, checkBoolean, checkLocationId, async (req, res) => {
  try {
    const postResource = await createResource(req.body);
    res.status(200).json(postResource);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

resources.put("/:id", checkName, checkBrand, checkBoolean, checkLocationId, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updatedResource = await updateResource(id, body);
    if (updatedResource.id) {
      res.status(200).json(updatedResource);
    } else {
      res.status(404).json({ error: "Check Resource Params" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

resources.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedResource = await deleteResource(id);
    if (deletedResource.id) {
      res.status(200).json(deletedResource);
    } else {
      res.status(404).json({ error: "ID Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Location routes...
resources.get("/locations", async (req, res) => {
  try {
    const allLocations = await getAllLocations();
    res.status(200).json(allLocations);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

resources.get("/locations/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const oneLocation = await getLocation(id);
    res.status(200).json(oneLocation);
  } catch (error) {
    res.status(404).json({ error: "ID Not Found" });
  }
});

resources.post("/locations", async (req, res) => {
  try {
    const postLocation = await createLocation(req.body);
    res.status(200).json(postLocation);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

resources.put("/locations/:id", async (req, res) => {
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

resources.delete("/locations/:id", async (req, res) => {
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

module.exports = resources;
