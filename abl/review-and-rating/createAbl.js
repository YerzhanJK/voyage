const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const reviewDao = require("../../dao/review-and-rating-dao.js");

// Define a schema for creating reviews and ratings
const schema = {
  type: "object",
  properties: {
    destinationId: { type: "string", minLength: 1 }, // Assuming every review is linked to a destination
    userId: { type: "string", minLength: 1 },       // Assuming user identity is required
    rating: { type: "integer", minimum: 1, maximum: 5 },
    comment: { type: "string", maxLength: 1000 }
  },
  required: ["destinationId", "userId", "rating"], // Comment is optional
  additionalProperties: false
};

async function createAbl(req, res) {
  try {
    const reviewData = req.body;

    // Validate input against the schema
    const valid = ajv.validate(schema, reviewData);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        errors: ajv.errors,
      });
      return;
    }

    // Create the review
    const newReview = reviewDao.create(reviewData);
    res.status(201).json(newReview);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = createAbl;
