const net = require("net");
const readline = require("readline");
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.252",
    port: 50541
  });

  // interpret incoming data as text
   conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connection Successful");
    conn.write("Name: MLY");
    conn.write("Move: up"); // send the "Move: up" message to the server
  });
  return conn;
};

module.exports = {connect};