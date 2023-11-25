let Cafe = {
  // _________ Queries __________________________________________________________________________

  get_name_query: `SELECT CAFE_ID,CAFE_NAME,LOCATION,IMAGE FROM CAFE `,
  get_menu_query: `SELECT ITEM_ID,ITEM_NAME,DESCRIPTION,PRICE,IMG FROM MENU WHERE CAFE_ID=:1`,

  // _________Functions __________________________________________________________________________

  //Get All Cafe Names
  getName: async function (con) {
    let result = await con.execute(this.get_name_query);
    return result.rows;
  },

  // Get selected Cafe Menu
  getMenu: async function (con, cafe_id) {
    let result = await con.execute(this.get_menu_query, [cafe_id]);
    return result.rows;
  },
};

module.exports = Cafe;
