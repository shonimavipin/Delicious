// routes/menuRoutes.js

const express=require("express");
const {getAllMenus,addMenuItem}=require("../controller/menuController.js");
const router = express.Router();
router.get("/", getAllMenus);
router.post("/", addMenuItem);


module.exports = router;