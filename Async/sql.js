const mysql = require('mysql');

let con = mysql.createConnection({
  user: 'admin',
  password: 'admin',
  server: 'localhost',
  //database: 'projecteam',
  port: 1235//,
  //dialect: "mssql",
  //dialectOptions: {
  //    "instanceName": "SQLEXPRESS01"  
  //  }
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("select * from test", function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });

