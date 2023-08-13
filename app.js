const express = require('express');
let axios = require('axios');
var app = express();

app.post('/', function(req, res, next) {
  try {

let results = req.body.developers.map(async d => {
  return await axios.get(`https://api.github.com/users/${d}`)
  });
 
let out = results.map(r => ({
      name: r.data.name,
      bio: r.data.bio
    }));

catch (err) {
  return res.json(out);
  }

});

app.listen(3000, function() {
  console.log("Localhost:3000")
});

