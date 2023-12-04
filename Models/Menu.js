let Menu = {
  // _________ Queries __________________________________________________________________________

  insert_query: `INSERT INTO MENU(ITEM_ID,ITEM_NAME,DESCRIPTION,PRICE,IMG,CAFE_ID)VALUES((SELECT MAX(ITEM_ID) FROM MENU WHERE CAFE_ID=:1)+10,:2,:3,:4,:5,:6)`,
  remove_query: `DELETE FROM  MENU where ITEM_ID=:1`,
  remove_query_childRec: `DELETE FROM ORDER_ITEMS where ITEM_ID=:1`,

  update_price_query: `UPDATE MENU SET PRICE=:1 WHERE ITEM_ID=:2`,

  // _________Functions __________________________________________________________________________

  insertItem: async function (con, item_obj) {
    const item = Object.values(item_obj); // converted item object to array
    item.push(item[0]); // push cafe_id again for second binding of cafe_id in query
    const res = await con.execute(this.insert_query, item);
    con.commit();
    return res;
  },

  removeItem: async function (con, item_id) {
    let res;
    await con.execute(this.remove_query_childRec, [item_id]);
    await con.execute(this.remove_query, [item_id]);
    con.commit();
    return res;
  },

  updatePrice: async function (con, item_id, price) {
    const res = await con.execute(this.update_price_query, [price, item_id]);
    con.commit();
    return res;
  },
};

module.exports = Menu;
