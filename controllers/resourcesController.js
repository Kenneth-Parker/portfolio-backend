const express = require("express");
const {
  getAllResources,
  getResource,
  createResource,
  deleteResource,
  updateResource,
} = require("../models/resources");

const resources = express.Router();
const { checkName, checkBrand, checkBoolean } = require('../validations/checkResources')

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

resources.post("/", checkName, checkBrand, checkBoolean, async (req, res) => {
  try {
    const postResource = await createResource(req.body);
    res.status(200).json(postResource);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

resources.put("/:id", checkName, checkBrand, checkBoolean, async (req, res) => {
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

module.exports = resources;
