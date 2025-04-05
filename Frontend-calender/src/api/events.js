import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const getEvents = () => API.get("/events");
export const createEvent = (data) => API.post("/events", data);
export const deleteEvent = (id) => API.delete(`/events/${id}`);
