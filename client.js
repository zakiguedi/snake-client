const net = require("net");
const readline = require("readline");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
   conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("connection Successful");
    conn.write("Name: MLY");
  });
  return conn;
};

module.exports = {connect};