const express = require("express");
const { getInventory } = require("../controllers/inventoryController");

const router = express.Router();

router.get("/inventory", getInventory);

module.exports = router;
