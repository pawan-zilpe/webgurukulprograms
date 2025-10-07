const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");

// database connection
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
