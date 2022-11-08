import React from "react";
import { auth } from "../firebase1";
import { useSelector } from "react-redux";
import "../style/profile.css";
import Nav from "./Nav";
import { selectUser } from "../features/user/userSlice";
import { signOut } from "firebase/auth";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profie img"
          />
          <div className="profile-details">
            <h2>{user.email}</h2>
            <div className="profile-plans">
            <h3>Plans</h3>
              <button onClick={() => signOut(auth)} className="profile-SignOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
