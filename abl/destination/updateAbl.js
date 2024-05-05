const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv({ allErrors: true }); // Show all validation errors
addFormats(ajv);

const destinationDao = require("../../dao/destination-dao.js");

// Define a schema for updating destinations
const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 }, // ID must be a non-empty string
    name: { type: "string", minLength: 1 }, // Optional update field
    description: { type: "string" }, // Optional update field
    location: { type: "string" } // Optional update field
  },
  required: ["id"], // Only ID is required for the operation
  additionalProperties: false
};

async function updateAbl(req, res) {
  try {
    const destinationUpdates = req.body;

    // Validate input against the schema
    const valid = ajv.validate(schema, destinationUpdates);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        errors: ajv.errors,
      });
      return;
    }

    // Check if the destination exists before attempting to update
    const existingDestination = destinationDao.get(destinationUpdates.id);
    if (!existingDestination) {
      res.status(404).json({
        code: "destinationNotFound",
        message: `Destination with ID ${destinationUpdates.id} not found`,
      });
      return;
    }

    // Perform the update operation
    const updatedDestination = destinationDao.update(destinationUpdates.id, destinationUpdates);
    if (updatedDestination) {
      res.json(updatedDestination);
    } else {
      res.status(404).json({
        code: "updateFailed",
        message: "Failed to update the destination",
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;
