const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv({ allErrors: true }); // To show all validation errors
addFormats(ajv);

const itineraryDao = require("../../dao/itinerary-dao.js");

// Define a schema for itinerary updates
const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 },
    date: { type: "string", format: "date-time" },
    name: { type: "string", minLength: 1 },
    desc: { type: "string" },
  },
  required: ["id"],
  additionalProperties: false,
};

async function updateAbl(req, res) {
  try {
    const itineraryUpdates = req.body;

    // Validate input against the schema
    const valid = ajv.validate(schema, itineraryUpdates);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        errors: ajv.errors,
      });
      return;
    }

    // Check if the itinerary exists before attempting to update
    const existingItinerary = itineraryDao.get(itineraryUpdates.id);
    if (!existingItinerary) {
      res.status(404).json({
        code: "itineraryNotFound",
        message: `Itinerary with ID ${itineraryUpdates.id} not found`,
      });
      return;
    }

    // Perform the update operation
    const updatedItinerary = itineraryDao.update(itineraryUpdates.id, itineraryUpdates);
    if (updatedItinerary) {
      res.json(updatedItinerary);
    } else {
      res.status(404).json({
        code: "updateFailed",
        message: "Failed to update the itinerary",
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;
