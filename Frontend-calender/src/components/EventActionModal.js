import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EventActionModal = ({ isOpen, event, onClose, onDelete }) => {
  if (!event) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Event Options"
      className="flex justify-center items-center h-screen"
      overlayClassName="fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">
        <h3 className="text-lg font-semibold mb-2">Delete this event?</h3>
        <p className="text-gray-700 mb-4 font-medium">{event.title}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => onDelete(event)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EventActionModal;
