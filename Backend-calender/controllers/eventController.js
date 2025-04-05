const Event = require("./../model/EventModel");


exports.createEvent = async (req, res) => {
    try {
      console.log("Incoming Event Data:", req.body);
      const { title, start, end } = req.body;
  
      const event = new Event({ title, start, end }); 
      await event.save();
      res.status(201).json(event);
    } catch (err) {
      console.error("Error while creating event:", err);
      res.status(500).json({ error: "Failed to create event" });
    }
  };
  
  

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ time: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};


exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete event" });
  }
};
