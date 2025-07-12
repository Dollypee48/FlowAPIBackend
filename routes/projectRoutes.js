const express = require("express");
const {
  getProjects,
  createProject,
  deleteProject,
} = require("../controllers/projectController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getProjects);
router.post("/", protect, createProject);
router.delete("/:id", protect, deleteProject);

module.exports = router;