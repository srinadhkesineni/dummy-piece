const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PathSchema = new Schema(
  {
    id: { type: Number },
    parentId: { type: Number },
    title: { type: String },
    description: { type: String },
    avgSalary: { type: Number },
    averageNumberOfSalaries: { type: Number },
  },
  { timestamps: true }
);

const Path = mongoose.model("Path", PathSchema);

module.exports = Path;
