import React, { useState, useEffect } from "react";
import "../style/nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  const [show, handleShow] = useState(false);
  const transitonNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitonNavBar);
    return () => window.removeEventListener("scroll", transitonNavBar);
  }, []);
  return (
    <div className={`nav ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Login"
        />
      </div>
    </div>
  );
}
export default Nav;
