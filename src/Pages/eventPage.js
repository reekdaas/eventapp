import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../Store/eventSlice";
import EventList from "./eventList";

export default function EventPage() {
  const dispatch = useDispatch();
  const { allEvents, status, error } = useSelector((state) => state.event);
  // console.log(allEvents);

  useEffect(() => {
    if (status === "idle") dispatch(fetchEvents());
  }, [dispatch, status]);

  return (
    <div>
      <h2>All Events</h2>
      {status === "idle" && <h1>Loading...</h1>}
      {error && <h2>Error</h2>}

      {status === "fulfilled" && <EventList data={allEvents} />}
    </div>
  );
}
