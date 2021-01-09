const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: 'ALBETO GANDOY FLORIDO' });
});
require("./routes/customer.routes.js")(app);
app.listen(3000, () => {
  console.log("PUERTO: 3000.");
});