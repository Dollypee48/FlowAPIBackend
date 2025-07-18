const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    endpoints: [
      {
        method: String,
        url: String,
        headers: Object,
        body: Object,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);