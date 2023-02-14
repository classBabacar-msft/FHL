const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./route");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
