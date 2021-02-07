const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
const bookRoute = require("./routes/book");

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
	console.log("connected to DB")
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/book", bookRoute);

app.listen(3000, () => console.log("server running"));
