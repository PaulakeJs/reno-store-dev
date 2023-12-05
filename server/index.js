const express = require("express");
require("dotenv").config();
const database = require("./configurations/database");
const cors = require('cors')

const usersRoute = require("./routes/usersRoute");

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.port || 5000;

app.use("/api/users", usersRoute);

app.listen(PORT, () => console.log(`Express Server Running On ${PORT}`));
