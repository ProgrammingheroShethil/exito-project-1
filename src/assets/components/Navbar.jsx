import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiBell,
  FiLogOut,
  FiMenu,
  FiMoon,
  FiSun,
  FiUser,
} from "react-icons/fi";

function Navbar({ onMenuClick, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("exiposUser");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuClick}>
          <FiMenu />
        </button>

        <Link to="/dashboard" className="logo">
          Exi<span>POS</span>
        </Link>
      </div>

      <div className="navbar-right">
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        <button className="icon-btn notification">
          <FiBell />
          <span></span>
        </button>

        <div className="profile-wrapper">
          <button
            className="profile-btn"
            onClick={() => setOpen(!open)}
          >
            <div className="avatar">
              <FiUser />
            </div>

            <div className="profile-info">
              <strong>Admin User</strong>
              <small>Administrator</small>
            </div>
          </button>

          {open && (
            <div className="profile-menu">
              <Link to="/settings">
                <FiUser />
                Profile
              </Link>

              <button onClick={logout}>
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;