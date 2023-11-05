import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteEvents } from "../Store/eventSlice";

export default function EventDetails() {
  const { eventId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allEvents } = useSelector((state) => state.event);
  const event = allEvents.find((e) => e._id === eventId);
  // console.log(event);

  return (
    <div className="details-page">
      <p>Name: {event.eventName}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <p>Required Volunteer: {event.volunteers} </p>

      <div className="all-btns">
        <Link
          to={`/event/eventedit/${event._id}`}
          state={event}
          className="edit-btn"
        >
          Edit
        </Link>
        <button
          onClick={() => {
            dispatch(deleteEvents(event._id));
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
