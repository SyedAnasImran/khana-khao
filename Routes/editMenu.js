const express = require("express");
const connectDb = require("../connectDb.js");
const router = express.Router();
const Menu = require("../Models/Menu.js");

router.post("/editMenu/insert", (req, res) => {
  connectDb().then(async (con) => {
    const item = req.body;
    const result = await Menu.insertItem(con, item);
    res.status(200).send(result);
    con.close();
  });
});

router.post("/editMenu/remove", (req, res) => {
  connectDb().then(async (con) => {
    const item = req.body;
    const result = await Menu.removeItem(con, item.ITEM_ID);
    res.status(200).send(result);
    con.close();
  });
});

router.post("/editMenu/editPrice", (req, res) => {
  connectDb().then(async (con) => {
    const item_id = req.body.ITEM_ID;
    const price = req.body.PRICE;
    const result = await Menu.updatePrice(con, item_id, price);
    res.status(200).send(result);
    con.close();
  });
});

module.exports = router;
