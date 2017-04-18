const express = require("express"),
      router = express.Router(),
      controller = require("../controllers/house_controller");

router.get("/", controller.dataHouse);
router.get("/:id", controller.dataHouseById);
router.post("/", controller.createDataHouse);
router.put("/:id", controller.updateDataHouse);
router.delete("/:id", controller.deleteDataHouse);

module.exports = router
