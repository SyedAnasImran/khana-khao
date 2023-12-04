let Vendors = {
  // _________ Queries __________________________________________________________________________

  insert_query: `Insert into VENDORS(email,password,first_name,last_name) values(:1,:2,:3,:4)`,
  find_query: `SELECT * FROM VENDORS where EMAIL=:1`,

  // _________Functions __________________________________________________________________________

  //Find
  findUser: async function (con, email_id) {
    let result = await con.execute(this.find_query, [email_id]);
    return result.rows;
  },

  //Insert
  insertUser: async function (con, user) {
    await con.execute(this.insert_query, user);
    con.commit();
  },
};

module.exports = Vendors;
