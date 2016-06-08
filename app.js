var http = require("http");

http.createServer( function( req, res ){
  console.log("Server is wurking");
  res.writeHead(200); // tells client all is good! 404 = bad
  res.write("Server is loaded from herokuInClass from Tarrasquebeast" + "\n");

  // res.write( modOne(6,7) );

  res.end(); // must call or client/page wont work
}).listen(9001); // listen must be attached AFTER createServer is ran

console.log("9001... It's over 9000!!!!!");
