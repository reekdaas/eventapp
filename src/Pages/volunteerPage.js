import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolunteers } from "../Store/volunteerSlice";
import VolunteerList from "./volunteerList";

export default function VolunteerPage() {
  const dispatch = useDispatch();
  const { allVolunteers, status, error } = useSelector(
    (state) => state.volunteer
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchVolunteers());
  }, [dispatch, status]);
  // console.log(allVolunteers);
  return (
    <div className="volunteer-page">
      <h2>All Volunteers</h2>
      {status === "idle" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {status === "fulfilled" && <VolunteerList data={allVolunteers} />}
    </div>
  );
}
