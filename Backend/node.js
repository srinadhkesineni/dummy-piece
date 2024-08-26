const mongoose = require("mongoose");
const initData = require("../Frontend/src/dataset.js");
const Path = require("./models/Path");
const mongo_url = "mongodb://127.0.0.1:27017/sihproj";

main()
  .then(() => {
    console.log("connnected to db");
  })
  .catch(() => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  // delete all listings from the database
  await Path.insertMany(initData.data);
  console.log("data saved");
};

initDB();
