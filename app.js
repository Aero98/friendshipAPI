const express = require("express");
const bodyParser = require("body-parser");
const mountRoutes = require("./routes");

const app = express();

app.use(bodyParser.json(), bodyParser.urlencoded());

app.listen(3000, () => console.log("running.."));
mountRoutes(app);
