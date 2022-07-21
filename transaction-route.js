const express = require("express");
const CartService = require("./cart-service");

class PurchaseRoutes {
  static setup(root) {
    const purchaseRouter = express.Router();

    // TRANSACTION API
    purchaseRouter.post("/transaction", (req, res, next) => {
      let bill = req.body.bill;
      CartService.purchase(bill)
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((err) => {
          next(err);
        });
    });

    root.use(purchaseRouter);
  }
}

module.exports = PurchaseRoutes;
