let Cafe = {
  // _________ Queries __________________________________________________________________________

  get_name_query: `SELECT first_name FROM CUSTOMERS `,

  // _________Functions __________________________________________________________________________

  //Find User
  getName: async function (con) {
    let result = await con.execute(this.get_name_query);
    return result.rows;
  },
};

module.exports = Cafe;
