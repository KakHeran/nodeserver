const express = require("express");
const app = express();
rateLimit = require("express-rate-limit"),
schedule = require('node-schedule');
const PORT = 3000

app.listen(PORT, () => {
    console.log("Server running on port 3000")
})

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

module.exports = app