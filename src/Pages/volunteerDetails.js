import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteVolunteer } from "../Store/volunteerSlice";

export default function VolunteerDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { volunteerId } = useParams();

  const { allVolunteers } = useSelector((state) => state.volunteer);
  const volunter = allVolunteers.find((v) => v._id === volunteerId);
  // console.log(volunteerId);

  return (
    <div className="details-page">
      <p>Name: {volunter.name} </p>
      <p>Age: {volunter.age}</p>
      <p>Gender: {volunter.gender}</p>
      <p>Contact: {volunter.contact}</p>
      <p>Skills: {volunter.skills}</p>

      <div className="all-btns">
        <Link
          className="edit-btn"
          to={`/volunteer/volunteeredit/${volunteerId}`}
          state={volunter}
        >
          Edit
        </Link>
        <button
          onClick={() => {
            dispatch(deleteVolunteer(volunter._id));
            navigate("/volunteer");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
