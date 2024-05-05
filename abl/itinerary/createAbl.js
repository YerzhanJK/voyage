const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const validateDateTime = require("../../helpers/validate-data-time.js");
ajv.addFormat("date-time", { validate: validateDateTime });

const itineraryDao = require("../../dao/itinerary-dao.js");

const schema = {
  type: "object",
  properties: {
    date: { type: "string", format: "date-time" },
    name: { type: "string" },
    desc: { type: "string" },
  },
  required: ["date", "name"],
  additionalProperties: false,
};

async function createAbl(req, res) {
  try {
    let itinerary = req.body;

    // Validate input
    const valid = ajv.validate(schema, itinerary);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // Create itinerary
    itinerary = itineraryDao.create(itinerary);
    res.json(itinerary);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = createAbl;
