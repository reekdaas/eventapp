import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { postVolunteer, updateVolunteer } from "../Store/volunteerSlice";

export default function VolunteerForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const volunteer = state ? state : null;
  const [volunteerDetails, setVolunteerdetails] = useState({
    age: volunteer ? volunteer.age : "",
    name: volunteer ? volunteer.name : "",
    gender: volunteer ? volunteer.gender : "",
    availability: volunteer ? volunteer.availability : "",
    contact: volunteer ? volunteer.contact : "",
  });
  console.log(volunteerDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (volunteer) {
      dispatch(
        updateVolunteer({
          volunterId: volunteer._id,
          volunteerData: volunteerDetails,
        })
      );
      // navigate();
    } else {
      dispatch(postVolunteer(volunteerDetails));
    }
    navigate("/volunteer");
    setVolunteerdetails({
      age: "",
      name: "",
      gender: "",
      availability: "",
      contact: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVolunteerdetails((state) => ({ ...state, [name]: value }));
  };

  const formDetails = [
    { label: "Age", value: "age" },
    { label: "Name", value: "name" },
    { label: "Gender", value: "gender" },
    { label: "Availability", value: "availability" },
    { label: "Contact", value: "contact" },
  ];

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {formDetails.map((detail) => (
          <div className="form-row" key={detail.label}>
            <label htmlFor={detail.value}>{detail.label}</label>
            <input
              type={detail.value === "contact" ? "number" : "text"}
              name={detail.value}
              id={detail.value}
              value={volunteerDetails[detail.value]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">{volunteer ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}
