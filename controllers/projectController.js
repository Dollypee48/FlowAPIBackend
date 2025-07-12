// server/controllers/projectController.js
const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
  const projects = await Project.find({ user: req.user.id });
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const { name, endpoints } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Project name is required" });
  }

  const project = await Project.create({
    user: req.user.id,
    name,
    endpoints: endpoints || [],
  });

  res.status(201).json(project);
};

exports.deleteProject = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id, user: req.user.id });

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  await project.remove();
  res.json({ message: "Project deleted" });
};