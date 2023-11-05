import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage from "./Pages/eventPage";
import VolunteerPage from "./Pages/volunteerPage";
import VolunteerDetails from "./Pages/volunteerDetails";
import EventDetails from "./Pages/eventDetails";
import VolunteerForm from "./Pages/volunteerForm";
import Form from "./Pages/eventForm";

function App() {
  return (
    <div className="App">
      <h1>Event Management App</h1>
      <div className="navbar">
        <Link to="/">Event</Link>
        <Link to="/volunteer">Volunteer</Link>
      </div>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/volunteer/:volunteerId" element={<VolunteerDetails />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/volunteer/volunteerForm" element={<VolunteerForm />} />
        <Route path="/event/eventForm" element={<Form />} />
        <Route path="event/eventedit/:eventId" element={<Form />} />
        <Route
          path="/volunteer/volunteeredit/:volunteerId"
          element={<VolunteerForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
