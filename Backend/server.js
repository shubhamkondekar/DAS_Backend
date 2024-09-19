const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const port = 8080;

dotenv.config();

const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
