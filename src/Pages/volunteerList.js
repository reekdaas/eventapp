import { useNavigate } from "react-router-dom";

export default function VolunteerList({ data }) {
  const navigate = useNavigate();

  // console.log(data);

  return (
    <div className="volunteer-list">
      <table className="volunteer-table">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Contact Number</th>
          <th>Skills</th>
          <th>Available</th>
        </tr>
        {data.map((volunteer) => (
          <tbody>
            <tr
              onClick={() => {
                navigate(`/volunteer/${volunteer._id}`);
              }}
            >
              <td>{volunteer.name}</td>
              <td>{volunteer.age}</td>
              <td>{volunteer.gender}</td>
              <td>{volunteer.contact}</td>
              <td>{volunteer.skills}</td>
              <td>{volunteer.availability ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <button
        onClick={() => {
          navigate("/volunteer/volunteerForm");
        }}
      >
        Add Volunteer
      </button>
    </div>
  );
}
