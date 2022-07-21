const express = require("express");
const FruitService = require("./fruit-service");

class FruitRoutes {
  /**
   * Setups the routes for fruit related REST api calls
   */
  static setup(root) {
    const fruitRouter = express.Router();

    /**
     * TODO-2 - need to expose an api that allows a caller to get a list of all fruits in the system
     *  @requirements use the @FruitService methods to interact with the fruit inventory
     *  @notes remember all methods are @see async on the FruitService
     */

    /**
     * TODO-3 - need to expose an api that allows a caller to get a specific fruit in the system
     *  @requirements use the @FruitService methods to interact with the fruit inventory
     *  @requirements take consideration when fruit does not exist
     *  @notes remember all methods are @see async on the FruitService
     */
    // GETTING ALL FRUITS
    fruitRouter.get("/getAllFruits", (req, res, next) => {
      FruitService.getAllFruits(req)
        .then((response) => {
          res.status(200).json(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    // GETTING SPECIFIC FRUIT
    fruitRouter.get("/getFruit/:name", (req, res, next) => {
      let name = req.params.name;
      FruitService.getFruit(name)
        .then((response) => {
          if (response == undefined) {
            res.status(200).json("Fruit is not available");
          }
          res.status(200).json(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    root.use(fruitRouter);
  }
}

module.exports = FruitRoutes;
