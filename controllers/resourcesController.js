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
  const allResources = await getAllResources();
  if (allResources[0]) {
    res.status(200).json(allResources);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

resources.get("/:id", async (req, res) => {
  const id = req.params.id;
  const oneResource = await getResource(id);
  if (oneResource) {
    res.status(200).json(oneResource);
  } else {
    res.status(404).json({ error: "ID Not Found" });
  }
});

resources.post("/", checkName, checkBrand, checkBoolean, async (req, res) => {
  const postResource = await createResource(req.body);
  res.status(200).json(postResource);
});

resources.put("/:id", checkName, checkBrand, checkBoolean, async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedResource = await updateResource(id, body);
  if (updatedResource.id) {
    res.status(200).json(updatedResource);
  } else {
    res.status(404).json({ error: "Check Resource Params" });
  }
});

resources.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedResource = await deleteResource(id);
  if (deletedResource.id) {
    res.status(200).json(deletedResource);
  }
});

module.exports = resources;
