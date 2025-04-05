const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEvents,
  deleteEvent,
} = require("./../controllers/eventController");

router.get("/", getEvents);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
