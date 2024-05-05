const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/destination/createAbl");
const GetAbl = require("../abl/destination/getAbl");
const UpdateAbl = require("../abl/destination/updateAbl");
const DeleteAbl = require("../abl/destination/deleteAbl");
const ListAbl = require("../abl/destination/listAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);


module.exports = router;
