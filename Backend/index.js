// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { spawnSync } = require("child_process");
// const path = require("path");
// const mongoose = require("mongoose");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Define the route for predictions
// app.post("/predict", (req, res) => {
//   const { interests, strengths } = req.body;

//   // Call the Python script with the new data
//   const pythonProcess = spawnSync("python", [
//     path.join(__dirname, "predict.py"),
//     interests,
//     strengths,
//   ]);

//   const output = pythonProcess.stdout.toString();
//   const error = pythonProcess.stderr.toString();

//   if (error) {
//     return res.status(500).json({ error: error });
//   }

//   return res.json({ careerPath: output.trim() });
// });

// main() //Establishing connection b/w server and express
//   .then(() => {
//     console.log("connection to DB is successful");
//   }) //if no error
//   .catch((err) => console.log(err)); //if error print the error

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/sihProject"); //port number and db name for connecting express with DB
// }

// app.post('/BookASession',(req,res)=>{
//   console.log(req.query)

// })

// app.listen(5000, () => {
//   console.log("Server is running on port 5000");
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { spawnSync } = require("child_process");
const path = require("path");
const mongoose = require("mongoose");

// Import the Booking model
const Booking = require("./models/BookASession");

const app = express();
// app.use(cors());
app.use(
  cors({
    origin: [
      // "https://b2b-transaction-manager.netlify.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    credentials: true, // Allow cookies and credentials
  })
);
app.use(bodyParser.json());

// Define the route for predictions
app.post("/predict", (req, res) => {
  const { interests, strengths } = req.body;

  const pythonProcess = spawnSync("python", [
    path.join(__dirname, "predict.py"),
    interests,
    strengths,
  ]);

  const output = pythonProcess.stdout.toString();
  const error = pythonProcess.stderr.toString();

  if (error) {
    return res.status(500).json({ error: error });
  }

  return res.json({ careerPath: output.trim() });
});

main()
  .then(() => {
    console.log("Connection to DB is successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sihProject");
}

// Route to handle session booking
app.post("/BookASession", async (req, res) => {
  const { collegeName, email, mobile, timeSlot, calender, venue } = req.body;
  console.log(req.body);

  if (!collegeName || !email || !mobile || !timeSlot || !calender || !venue) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBooking = new Booking({
      collegeName,
      email,
      mobile,
      timeSlot,
      venue,
      calender, // Using `calender` date for the createdAt field
    });

    await newBooking.save();

    res.status(200).json({ message: "Booking submitted successfully!" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error saving booking", error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
