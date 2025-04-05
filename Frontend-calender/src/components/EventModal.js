import React, { useState } from "react";

const EventModal = ({ show, onClose, onSave, start }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    onSave(name);
    setName("");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-md w-80 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Create Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 w-full mb-4 rounded"
        />
        <div className="flex justify-between">
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
