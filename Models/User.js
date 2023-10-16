const connectDb = require("../connectDb");

let User = {
  //QUERIES
  insert_query: `Insert into users(email,password,first_name,last_name) values(:1,:2,:3,:4)`,
  find_query: `SELECT * FROM USERS where EMAIL=:1`,

  //FUNCTIONS
  signUp: function (res, data) {
    console.log(data);
    connectDb().then(async (con) => {
      let result = await con.execute(this.find_query, [data[0]]);
      result = result.rows;
      if (!result.length) {
        await con.execute(this.insert_query, data); // USER CREATED
        con.commit();
        res.send("User Created");
      } else {
        res.send("User Exists");
      }
    });
  },
};

module.exports = User;

// const res = await con.executeMany(this.insertQuery, data);
//       console.log("User Inserted");
//       const res = await con.executeMany(
//         `SELECT * FROM USERS where EMAIL=:ali@email.com`,
//         data
//       );
//       con.close();
//       res = res.rows;
//       if (!res.length) return false;
//       return true;
