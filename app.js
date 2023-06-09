const express = require('express');
let axios = require('axios');
var app = express();

app.post('/users/username', function(req, res, next) {
  try {
    

const user =  req.params.username;
let results = req.body.developers.map(async d => {
  return await axios.get(`https://api.github.com/users/${user}`);
  });
 
let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
  return res.send(JSON.stringify(out));
  }

catch {
    next(err);
  }

});

app.listen(3000, function() {
  console.log("Localhost:3000")
});


// ---------Test code section---------


// app.get("/users/:username", function(req, res, next){
//   try {
//     const user = USERS.find(u => u.username === req.params.username);
//     if (!user) throw new ExpressError("Not found!", 404);
//     return res.json({ user });
//   } catch (err) {
//     return next(err);
//   }
// })


// app.get('//:name', function(req, res) {
//   if (req.params.name !== 'Whiskey') {
//     return res
//             .status(403)
//             .json('Only Whiskey is Allowed.');
//   }

//   return res.json('Hello Whiskey!');
// });