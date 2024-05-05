const Ajv = require("ajv");
const ajv = new Ajv();

const itineraryDao = require("../../dao/itinerary-dao.js");

async function listAbl(req, res) {
  try {
    const itineraries = itineraryDao.list();  // Fetch all itineraries from the DAO
    res.json(itineraries);
  } catch (e) {
    res.status(500).json({ message: "Failed to retrieve itineraries due to an internal error", error: e.message });
  }
}

module.exports = listAbl;
