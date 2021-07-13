const express = require("express");
const server = express();
const axios = require("axios");
const cors = require("cors");
// server.get("*", (request, response) => {
//   response.send("Hello, World!");
//   response.end();
// });

server.use(express.json());

server.use(cors());

server.get("/weather", async function (req, res) {
  const weather = await axios.get(
    "http://api.weatherstack.com/current?access_key=5a4893407f6520d0353810a4e0bf0ad6&query=Atlanta&units=f"
  );
  console.log(weather);
  res.send(weather.data);
});
server.listen(8080);
