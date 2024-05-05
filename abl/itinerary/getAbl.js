const Ajv = require("ajv");
const ajv = new Ajv();

const itineraryDao = require("../../dao/itinerary-dao.js"); // Correcting the file path and name spelling

const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 }, // Assume the ID is a string of any length greater than zero
  },
  required: ["id"],
  additionalProperties: false,
};

async function getAbl(req, res) {
  try {
    const { id } = req.params; // Assuming ID is coming from route parameters

    // Validate input
    const valid = ajv.validate(schema, { id });
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // Fetch itinerary
    const itinerary = itineraryDao.get(id);
    if (itinerary) {
      res.json(itinerary);
    } else {
      res.status(404).json({
        code: "itineraryNotFound",
        message: `Itinerary with ID ${id} not found`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = getAbl;
