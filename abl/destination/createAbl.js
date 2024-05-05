const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv({ allErrors: true }); // Configuring AJV to show all validation errors
addFormats(ajv); // Adding support for formats such as date-time

const destinationDao = require("../../dao/destination-dao.js");

// Define a schema for destination creation
const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1 },
    description: { type: "string", minLength: 1 },
    location: { type: "string", minLength: 1 } // Assuming location is a simple string for this example
  },
  additionalProperties: false
};

async function createAbl(req, res) {
  try {
    const destination = req.body;

    // Validate input against the schema
    const valid = ajv.validate(schema, destination);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        errors: ajv.errors,
      });
      return;
    }

    // Create the destination
    const newDestination = destinationDao.create(destination);
    res.status(201).json(newDestination);
  } catch (e) {
    res.status(500).json({ message: e.message, error: "Failed to create destination" });
  }
}

module.exports = createAbl;
