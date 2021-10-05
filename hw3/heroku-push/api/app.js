const express = require("express");
const cors = require("cors");
const cardRouter = require("./routes/cardRoutes");
const app = express();

// Global middlewares
app.use(cors());
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/api/card", cardRouter);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  s;
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
module.exports = app;
