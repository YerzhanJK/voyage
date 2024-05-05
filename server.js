const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 5001;


const destinationController = require("./controller/destination");
const userController = require("./controller/user");
const itineraryController = require("./controller/itinerary");
const reviewAndRatingController = require("./controller/review-and-rating");

app.use(express.json());  // Support for application/json
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from Voyage-Voyage Travel Planner!");
  });


app.use("/destinations", destinationController);
app.use("/users", userController);
app.use("/itineraries", itineraryController);
app.use("/reviews", reviewAndRatingController);

app.listen(PORT, () => {console.log(`Server started on port: http://localhost:${PORT}`)})

