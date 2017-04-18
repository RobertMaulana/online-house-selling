const express = require('express'),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require("cors"),
      house = require("./routes/house");

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/house", house);

app.listen(3000, () => {
  console.log("Server conected!");
})
