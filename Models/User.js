const connectDb = require("../connectDb");

let User = {
  // _________ Queries __________________________________________________________________________

  insert_query: `Insert into users(email,password,first_name,last_name) values(:1,:2,:3,:4)`,
  find_query: `SELECT * FROM USERS where EMAIL=:1`,
  insert_loggedin_query: `INSERT INTO TOKEN(USERID) VALUES(:1)`,
  isloggedin_query: `SELECT * FROM TOKEN`,
  logout_query: `DELETE FROM TOKEN`,

  // _________Functions __________________________________________________________________________

  //Find User
  findUser: async function (con, email_id) {
    let result = await con.execute(this.find_query, [email_id]);
    return result.rows;
  },

  //Insert User
  insertUser: async function (con, user) {
    await con.execute(this.insert_query, user);
    con.commit();
  },

  // insertLoggedin User
  insertLoggedIn: async function (con, id) {
    await con.execute(this.insert_loggedin_query, [id]);
    con.commit();
  },

  // isLoggedIn
  isLoggedIn: async function (con) {
    let result = await con.execute(this.isloggedin_query);
    return result.rows;
  },
  //logout User
  logOutUser: async function (con) {
    await con.execute(this.logout_query);
    con.commit();
  },
};

module.exports = User;
