const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const reviewDao = require("../../dao/review-and-rating-dao.js");

// Define a schema for updating reviews and ratings
const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 },            // ID is required to identify the review
    rating: { type: "integer", minimum: 1, maximum: 5 },  // Rating is between 1 and 5
    comment: { type: "string", maxLength: 1000 }     // Comment is optional and has a max length
  },
  required: ["id"],  // Only ID is required for operation
  additionalProperties: false
};

async function updateAbl(req, res) {
  try {
    const reviewUpdates = req.body;

    // Validate input against the schema
    const valid = ajv.validate(schema, reviewUpdates);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        errors: ajv.errors,
      });
      return;
    }

    // Check if the review exists before attempting to update
    const existingReview = reviewDao.get(reviewUpdates.id);
    if (!existingReview) {
      res.status(404).json({
        code: "reviewNotFound",
        message: `Review with ID ${reviewUpdates.id} not found`,
      });
      return;
    }

    // Perform the update operation
    const updatedReview = reviewDao.update(reviewUpdates.id, reviewUpdates);
    if (updatedReview) {
      res.json(updatedReview);
    } else {
      res.status(404).json({
        code: "updateFailed",
        message: "Failed to update the review",
      });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = updateAbl;
