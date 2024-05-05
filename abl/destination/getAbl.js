const Ajv = require("ajv");
const ajv = new Ajv();

const destinationDao = require("../../dao/destination-dao.js");

// Schema to validate the destination ID input
const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 }, // Assumption: ID is a non-empty string
  },
  required: ["id"],
  additionalProperties: false,
};

async function getAbl(req, res) {
  try {
    const { id } = req.params; // Assuming the ID is passed as a URL parameter

    // Validate input against the schema
    const valid = ajv.validate(schema, { id });
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // Fetch the destination
    const destination = destinationDao.get(id);
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({
        code: "destinationNotFound",
        message: `Destination with ID ${id} not found`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = getAbl;
