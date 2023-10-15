import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";


const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logout();
        navigate("/login");
    }
  return (
    <div>
        <h3>Profile Page</h3>
        <p>
            <strong>Name:</strong> {auth.user}
        </p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
