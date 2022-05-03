var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) 
  throw err;
  console.log("Connected!");
});
