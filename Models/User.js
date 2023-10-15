const connectDb = require("../connectDb");

let User = {
  //CHECK USER EXISTS

  //INSERT USER
  insertUser: function (data) {
    connectDb().then(async (con) => {
      const res = await con.executeMany(
        `Insert into users(email,password,first_name,last_name) values(:1,:2,:3,:4)`,
        data
      );
      console.log("User Inserted");
      con.commit();
      con.close();
    });
  },
};

module.exports = User;
