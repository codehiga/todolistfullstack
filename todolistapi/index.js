const express = require('express');
const app = express();
const router = require("./routes");
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(router);

app.listen(port , () => {
  console.log(`Servidor na porta: ${port}`)
});
