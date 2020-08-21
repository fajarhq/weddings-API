var express = require("express");

const routes = require("./router/index");
const EditRoutes = require("./router/edit");
const DeleteRoutes = require("./router/delete");

const app = express();
const bodyParser = require("body-parser");
const { fileParser } = require("express-multipart-file-parser");
const path = require("path");
const cors = require("cors");
app.use(cors());
app.use(
  fileParser({
    rawBodyOptions: {
      limit: "10mb",
    },
  })
);

app.use(bodyParser.json());

app.use("/", routes);
app.use("/edit", EditRoutes);
app.use("/delete", DeleteRoutes);

app.use(express.static(path.join(__dirname, "uploads"))); //  "public" off of current is root

module.exports = app;
