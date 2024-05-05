const Ajv = require("ajv");
const ajv = new Ajv();

const itineraryDao = require("../../dao/itinerary-dao.js");

const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 }, // Assuming ID is a string with minimum length
  },
  required: ["id"],
  additionalProperties: false,
};

async function deleteAbl(req, res) {
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

    // Attempt to delete the itinerary
    const deleted = itineraryDao.remove(id);
    if (deleted) {
      res.json({ message: `Itinerary with ID ${id} successfully deleted.` });
    } else {
      res.status(404).json({
        code: "itineraryNotFound",
        message: `Itinerary with ID ${id} not found.`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = deleteAbl;
