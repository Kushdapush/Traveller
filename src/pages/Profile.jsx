import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";

const Profile = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const logoutUser = async (e) => {
        e.preventDefault();
        console.log("Logging out...");
        await signOut(auth);
        navigate("/");
    }
    const goToStats = () => {
        navigate("/stats");
    }

    return (
        <div className="" >
            <div className="" >
                <div className="">
                    <p>Welcome <em className="">{user.email}</em>. You are logged in !</p >
                    <div className="" >
                        <button type="submit" className="" onClick={(e) => logoutUser(e)}> Logout</button >
                    </div >
                    <div>
                        <button type="button" className="" onClick={goToStats}> Go travellll</button>
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Profile