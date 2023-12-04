let Orders = {
  // _________ Queries __________________________________________________________________________

  insert_items_query: `INSERT INTO ORDER_ITEMS(ORDER_ID, ITEM_ID, QTY) VALUES(:1,:2,:3)`,
  insert_order_query: `INSERT INTO ORDERS(ORDER_ID, EMAIL, CAFE_ID, CONTACT , TOTAL) VALUES(:1,:2,:3,:4,:5)`,
  generateid_query: `SELECT MAX(ORDER_ID)+1 as "ID" FROM ORDERS`,
  customerOrders_query: `SELECT * from ORDERS where EMAIL=:1 and CAFE_ID=:2`,
  cafeOrders_query: `SELECT * from ORDERS where and CAFE_ID=:1`,
  getOrderItems_query: `SELECT O.ORDER_ID,M.Item_Name,M.Price,O.Qty,M.IMG FROM MENU M INNER JOIN ORDER_ITEMS O ON(M.Item_Id=O.ITEM_ID) WHERE ORDER_ID=:1`,
  removeOrder_query: `delete from orders where order_id=:1`,
  // _________Functions _________________________________________________________________________

  // Insert Order
  insertOrder: async function (con, order) {
    const res = await con.execute(this.generateid_query);
    const order_id = res.rows[0].ID;
    const customer_id = order.customer_id;
    const cafe_id = order.cafe_id;
    const contact = order.contact;
    const total = order.total;
    await con.execute(this.insert_order_query, [
      order_id,
      customer_id,
      cafe_id,
      contact,
      total,
    ]);
    con.commit();
    return order_id;
  },

  insertItems: async function (con, order_id, items) {
    for (let i = 0; i < items.length; i++) {
      await con.execute(this.insert_items_query, [
        order_id,
        items[i].ITEM_ID,
        items[i].QTY,
      ]);
    }
    con.commit();
  },

  //get Customer Orders
  customerOrders: async function (con, customer_id, cafe_id) {
    const res = await con.execute(this.customerOrders_query, [
      customer_id,
      cafe_id,
    ]);
    return res.rows;
  },
  // get Cafe ORders
  cafeOrders: async function (con, cafe_id) {
    const res = await con.execute(this.cafeOrders_query, [cafe_id]);
    return res.rows;
  },

  getOrderItems: async function (con, order_id) {
    const res = await con.execute(this.getOrderItems_query, [order_id]);
    if (!res.rows.length) {
      await con.execute(this.removeOrder_query, [order_id]);
      con.commit();
    }
    return res.rows;
  },
};

module.exports = Orders;
