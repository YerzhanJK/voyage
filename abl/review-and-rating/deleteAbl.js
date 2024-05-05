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

async function deleteAbl(req, res) {
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

    // Attempt to delete the review
    const deleted = reviewDao.remove(id);
    if (deleted) {
      res.json({ message: `Review with ID ${id} successfully deleted.` });
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

module.exports = deleteAbl;
