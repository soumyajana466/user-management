const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");



const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use("/api", customerRoutes);

//start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});