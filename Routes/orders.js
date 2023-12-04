const express = require("express");
const connectDb = require("../connectDb.js");
const Orders = require("../Models/Orders.js");
const router = express.Router();

/*

order={
    customer_id: pk@pk.pk,
    cafe_id : 4002,
    contact:9898,
    total:400
    items:[
      {
        ITEM_ID:4011
        QTY:2
      },....
    ],
}


sad*/

router.post("/confirm", (req, res) => {
  let order = req.body;
  connectDb().then(async (con) => {
    order.order_id = await Orders.insertOrder(con, order);
    await Orders.insertItems(con, order.order_id, order.items);
    res.status(200).send({ order_id: order.order_id });
    con.close();
  });
});

router.post("/myOrders", (req, res) => {
  const customer_id = req.body.customer_id;
  const cafe_id = req.body.cafe_id;
  connectDb().then(async (con) => {
    const myOrders = await Orders.customerOrders(con, customer_id, cafe_id);
    res.status(200).send({ myOrders });
    con.close();
  });
});
router.post("/cafeOrders", (req, res) => {
  const cafe_id = req.body.cafe_id;
  connectDb().then(async (con) => {
    const cafeOrders = await Orders.cafeOrders(con, customer_id, cafe_id);
    res.status(200).send({ cafeOrders });
    con.close();
  });
});

router.post("/items", (req, res) => {
  const order_id = req.body.ORDER_ID;
  connectDb().then(async (con) => {
    const myOrderItems = await Orders.getOrderItems(con, order_id);
    res.status(200).send({ myOrderItems });
    con.close();
  });
});

module.exports = router;
