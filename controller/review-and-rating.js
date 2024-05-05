const express = require("express");
const router = express.Router();

const CreateAbl = require("../abl/review-and-rating/createAbl");
const GetAbl = require("../abl/review-and-rating/getAbl");
const UpdateAbl = require("../abl/review-and-rating/updateAbl");
const DeleteAbl = require("../abl/review-and-rating/deleteAbl");
const ListAbl = require("../abl/review-and-rating/listAbl");

router.get("/get", GetAbl);
router.get("/list", ListAbl);
router.post("/create", CreateAbl);
router.post("/update", UpdateAbl);
router.post("/delete", DeleteAbl);

module.exports = router;
