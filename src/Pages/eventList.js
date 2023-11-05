import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventList({ data }) {
  const navigate = useNavigate();

  return (
    <div className="eventList">
      <table className="event-table">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Location</th>
          <th>Volunteers Required</th>
        </tr>
        {data.map((event) => (
          <tbody>
            <tr
              onClick={() => {
                navigate(`/event/${event._id}`);
              }}
            >
              <td>{event.eventName}</td>
              <td>{event.description}</td>
              <td>{event.location}</td>
              <td>{event.volunteers}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button
        onClick={() => {
          navigate("/event/eventForm");
        }}
      >
        Add Event
      </button>
    </div>
  );
}
