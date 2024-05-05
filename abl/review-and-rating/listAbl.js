const reviewDao = require("../../dao/review-and-rating-dao.js");

async function listAbl(req, res) {
  try {
    const reviews = reviewDao.list();  // Fetch all reviews from the DAO
    res.json(reviews);
  } catch (e) {
    res.status(500).json({ message: "Failed to retrieve reviews due to an internal error", error: e.message });
  }
}

module.exports = listAbl;
