const express = require('express'),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require("cors"),
      house = require("./routes/house");

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.use("/house", house);

app.listen(3000, () => {
  console.log("Server conected!");
})
