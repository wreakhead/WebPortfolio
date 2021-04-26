const express = require("express");
const router = require("./routes");
const myErrorLogger = require("./utilities/errorlogger");
const myRequestLogger = require("./utilities/requestlogger");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(myRequestLogger);
app.use("/", router);
app.use(myErrorLogger);

app.get("/", (req, res) => {
  res.send("server started");
});

app.listen(7000, () => {
  console.log("server started at 7000");
});

module.exports = app;
