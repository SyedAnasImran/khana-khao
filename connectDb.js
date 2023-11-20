const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

let clientOpts = {};
clientOpts = { libDir: "D:\\instantclient_21_11" };
oracledb.initOracleClient(clientOpts); // enable node-oracledb Thick mode

async function connectDb() {
  try {
    con = await oracledb.getConnection({
      user: "projdb",
      password: "anas",
      connectString: "localhost",
    });
    console.log("Connected to Databasse Successful");
    return con;
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDb;
