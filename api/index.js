const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Import Routes
const authRoute = require("./routes/auth");
const bookRoute = require("./routes/book");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
	console.log("connected to DB")
);

//Middleware
app.use("/static", express.static("public/images"));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/book", bookRoute);

app.listen(process.env.PORT, () => console.log("server running"));
