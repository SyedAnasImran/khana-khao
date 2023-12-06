let User = {
  // _________ Queries __________________________________________________________________________

  insert_query: `Insert into CUSTOMERS(email,password,first_name,last_name) values(:1,:2,:3,:4)`,
  find_query: `SELECT * FROM CUSTOMERS where EMAIL=:1`,

  // _________Functions __________________________________________________________________________

  //Find User
  findUser: async function (con, email_id) {
    let result = await con.execute(this.find_query, [email_id]);
    return result.rows;
  },

  //Insert User
  insertUser: async function (con, user) {
    let regex = /^[a-zA-Z]+$/;
    await con.execute(this.insert_query, user);
    if (regex.test(user[2]) && regex.test(user[3])) {
      con.commit();
      return "User Created";
    }
    //Rollback If user name is not alphabetical
    con.rollback();
    return "Choose Suitable Name | Special Characters Not allowed";
  },
};

module.exports = User;
