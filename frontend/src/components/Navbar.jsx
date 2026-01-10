import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Quiz Platform
      </Link>

      <div className="nav-actions">
        {!token && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {token && (
          <>
            <span className="user-text">
              Logged in as <b>{email}</b>
            </span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
