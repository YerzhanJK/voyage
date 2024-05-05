const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const destinationFolderPath = path.join(__dirname, "storage", "destinationList");

// Method to read a destination from a file
function get(destinationId) {
  try {
    const filePath = path.join(destinationFolderPath, `${destinationId}.json`);
    const fileData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    if (error.code === "ENOENT") return null; // No such file or directory
    throw { code: "failedToReadDestination", message: error.message };
  }
}

// Method to write a destination to a file
function create(destination) {
  try {
    destination.id = crypto.randomBytes(16).toString("hex"); // Generate a unique ID
    const filePath = path.join(destinationFolderPath, `${destination.id}.json`);
    const fileData = JSON.stringify(destination);
    fs.writeFileSync(filePath, fileData, "utf8");
    return destination;
  } catch (error) {
    throw { code: "failedToCreateDestination", message: error.message };
  }
}

// Method to update a destination in a file
function update(destination) {
  try {
    const currentDestination = get(destination.id);
    if (!currentDestination) return null;
    const newDestination = { ...currentDestination, ...destination };
    const filePath = path.join(destinationFolderPath, `${destination.id}.json`);
    const fileData = JSON.stringify(newDestination);
    fs.writeFileSync(filePath, fileData, "utf8");
    return newDestination;
  } catch (error) {
    throw { code: "failedToUpdateDestination", message: error.message };
  }
}

// Method to remove a destination from a file
function remove(destinationId) {
  try {
    const filePath = path.join(destinationFolderPath, `${destinationId}.json`);
    fs.unlinkSync(filePath);
    return {};
  } catch (error) {
    if (error.code === "ENOENT") {
      return {}; // Handle the case where the file doesn't exist
    }
    throw { code: "failedToRemoveDestination", message: error.message };
  }
}

// Method to list destinations in a folder
function list() {
  try {
    const files = fs.readdirSync(destinationFolderPath);
    const destinationList = files.map((file) => {
      const fileData = fs.readFileSync(
        path.join(destinationFolderPath, file),
        "utf8"
      );
      return JSON.parse(fileData);
    });
    return destinationList; // Optionally, sort or filter the results here
  } catch (error) {
    throw { code: "failedToListDestinations", message: error.message };
  }
}

module.exports = {
  get,
  create,
  update,
  remove,
  list,
};
