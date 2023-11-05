import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postEvents, updateEvents } from "../Store/eventSlice";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const event = state ? state : "";

  const [eventDetails, setEventdetails] = useState({
    eventName: event ? event.eventName : "",
    location: event ? event.location : "",
    description: event ? event.description : "",
    volunteers: event ? event.volunteers : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      dispatch(updateEvents({ eventId: event._id, eventData: eventDetails }));
    } else {
      dispatch(postEvents(eventDetails));
    }
    navigate("/");
    setEventdetails({
      eventName: "",
      location: "",
      description: "",
      volunteers: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventdetails((event) => ({ ...event, [name]: value }));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="eventName"
            id="name"
            value={eventDetails.eventName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={eventDetails.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={eventDetails.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="volunteers">Volunteer</label>
          <input
            type="number"
            name="volunteers"
            id="volunteers"
            value={eventDetails.volunteers}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{event ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}
