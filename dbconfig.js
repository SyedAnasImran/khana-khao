const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

let clientOpts = {};
clientOpts = { libDir: "D:\\instantclient_21_11" };
oracledb.initOracleClient(clientOpts); // enable node-oracledb Thick mode

async function connectDb() {
  try {
    con = await oracledb.getConnection({
      user: "hr",
      password: "anas",
      connectString: "localhost",
    });
    // const data = await con.execute("SELECT * FROM Departments");
    // const res = data.rows;
    // console.log(res);
    // return res;
    console.log("Connected to Databasse Successful");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDb;
