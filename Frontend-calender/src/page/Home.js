import React, { useState, useEffect } from "react";
import CalendarView from "../components/CalenderView";
import EventModal from "../components/EventModal";
import EventActionModal from "../components/EventActionModal";
import { getEvents, createEvent, deleteEvent } from "../api/events";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventActionModalOpen, setEventActionModalOpen] = useState(false);

  const loadEvents = async () => {
    const res = await getEvents();
    const formatted = res.data.map((e) => ({
      id: e._id,
      title: e.title,
      start: new Date(e.start),
      end: new Date(e.end),
    }));
    setEvents(formatted);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleSelectSlot = ({ start }) => {
    const end = new Date(start.getTime() + 15 * 60 * 1000);
    setSelectedSlot({ start, end });
    setModalOpen(true);
  };

  const handleSaveEvent = async (name) => {
    if (!name || !selectedSlot) return;

    await createEvent({
      title: name,
      start: selectedSlot.start,
      end: selectedSlot.end,
    });

    setModalOpen(false);
    setSelectedSlot(null);
    loadEvents();
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setEventActionModalOpen(true);
  };

  const handleDeleteEvent = async (event) => {
    await deleteEvent(event.id);
    setEventActionModalOpen(false);
    loadEvents();
  };

  return (
    <div>
      <CalendarView
        events={events}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />
      <EventModal
        show={modalOpen}
        start={selectedSlot?.start}
        onSave={handleSaveEvent}
        onClose={() => {
          setModalOpen(false);
          setSelectedSlot(null);
        }}
      />
      <EventActionModal
        isOpen={eventActionModalOpen}
        event={selectedEvent}
        onClose={() => setEventActionModalOpen(false)}
        onDelete={handleDeleteEvent}
      />
    </div>
  );
};

export default Home;
