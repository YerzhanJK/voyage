const Ajv = require("ajv");
const ajv = new Ajv();

const reviewDao = require("../../dao/review-and-rating-dao.js");

// Schema to validate the review ID input
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

    // Fetch the review
    const review = reviewDao.get(id);
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({
        code: "reviewNotFound",
        message: `Review with ID ${id} not found`,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = getAbl;
