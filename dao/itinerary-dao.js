const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const itineraryFolderPath = path.join(__dirname, "storage", "itineraryList");

// Ensure the itinerary storage directory exists
if (!fs.existsSync(itineraryFolderPath)) {
    fs.mkdirSync(itineraryFolderPath, { recursive: true });
}

// Method to read an itinerary from a file
function get(itineraryId) {
  try {
    const filePath = path.join(itineraryFolderPath, `${itineraryId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null; // No such file or directory
    throw { code: "failedToReadItinerary", message: error.message };
  }
}

// Method to write an itinerary to a file
function create(itinerary) {
  try {
    itinerary.id = crypto.randomBytes(16).toString("hex"); // Generate a unique ID
    const filePath = path.join(itineraryFolderPath, `${itinerary.id}.json`);
    const fileData = JSON.stringify(itinerary);
    fs.writeFileSync(filePath, fileData, "utf8");
    return itinerary;
  } catch (error) {
    throw { code: "failedToCreateItinerary", message: error.message };
  }
}

// Method to update an itinerary in a file
function update(itinerary) {
  try {
    const currentItinerary = get(itinerary.id);
    if (!currentItinerary) return null;
    const newItinerary = { ...currentItinerary, ...itinerary };
    const filePath = path.join(itineraryFolderPath, `${itinerary.id}.json`);
    const fileData = JSON.stringify(newItinerary);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newItinerary;
  } catch (error) {
    throw { code: "failedToUpdateItinerary", message: error.message };
  }
}

// Method to remove an itinerary from a file
function remove(itineraryId) {
  try {
    const filePath = path.join(itineraryFolderPath, `${itineraryId}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") return {}; // Handle the case where the file doesn't exist
    throw { code: "failedToRemoveItinerary", message: error.message };
  }
}

// Method to list itineraries in a folder
function list() {
  try {
    const files = fs.readdirSync(itineraryFolderPath);
    const itineraryList = files.map((file) => {
      const fileData = fs.readFileSync(
        path.join(itineraryFolderPath, file),
        "utf8"
      );
      return JSON.parse(fileData);
    });
    return itineraryList; // Optionally, sort or filter the results here
  } catch (error) {
    throw { code: "failedToListItineraries", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
