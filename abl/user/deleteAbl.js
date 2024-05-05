const Ajv = require("ajv");
const ajv = new Ajv();

const userDao = require("../../dao/user-dao");

const schema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 32, maxLength: 32 },
  },
  required: ["id"],
  additionalProperties: false,
};

async function deleteAbl(req, res) {
  try {
    // Get request query or body
    const reqParams = req.body;

    // Validate input
    const valid = ajv.validate(schema, reqParams);
    if (!valid) {
      res.status(400).json({
        code: "dtoInIsNotValid",
        message: "DTO in is not valid",
        validationError: ajv.errors,
      });
      return;
    }

    // Perform deletion
    const deleted = userDao.remove(reqParams.id);
    if (deleted) {
      res.json({ message: `User ${reqParams.id} successfully deleted.` });
    } else {
      res.status(404).json({ message: `User ${reqParams.id} not found.` });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = deleteAbl;
