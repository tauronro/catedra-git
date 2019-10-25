const express = require("express");
const app = express();

app.get("/get/users", function(req, res) {
  res.send("Esto mostrara todos los usuarios");
});
app.get("/add/user", function(req, res) {
  res.send("Esto agregara un usuario");
});
app.get("/update/user", function(req, res) {
  res.send("Esto actualizara un usuario");
});
app.get("/delete/user", function(req, res) {
  res.send("Esto eliminara un usuario");
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
