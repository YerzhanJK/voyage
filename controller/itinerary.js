const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/itinerary/createAbl");
const GetAbl = require("../abl/itinerary/getAbl");
const UpdateAbl = require("../abl/itinerary/updateAbl");
const DeleteAbl = require("../abl/itinerary/deleteAbl");
const ListAbl = require("../abl/itinerary/listAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;
