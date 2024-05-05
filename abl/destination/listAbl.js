const Ajv = require("ajv");
const ajv = new Ajv();

const destinationDao = require("../../dao/destination-dao.js");

async function listAbl(req, res) {
  try {
    const destinations = destinationDao.list();  // Fetch all destinations from the DAO
    res.json(destinations);
  } catch (e) {
    res.status(500).json({ message: "Failed to retrieve destinations due to an internal error", error: e.message });
  }
}

module.exports = listAbl;
