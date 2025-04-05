import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = ({ events, onSelectSlot, onSelectEvent }) => {
  const [view, setView] = useState("week");
  const [date, setDate] = useState(new Date());

  const handlePrev = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };

  return (
    <div>
      {view === "day" && (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "10px" }}>
          <button onClick={handlePrev} style={{ padding: "6px 12px", backgroundColor: "#ccc", border: "none", borderRadius: "4px" }}>
            Previous
          </button>
          <button onClick={handleNext} style={{ padding: "6px 12px", backgroundColor: "#ccc", border: "none", borderRadius: "4px" }}>
            Next
          </button>
        </div>
      )}

      <Calendar
        localizer={localizer}
        events={events}
        selectable
        view={view}
        onView={(newView) => setView(newView)}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
        views={["month", "week", "day"]}
        step={15}
        timeslots={1}
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        style={{ height: "90vh", margin: "20px" }}
      />
    </div>
  );
};

export default CalendarView;
