import { NavLink } from 'react-router-dom';

const Nav = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#ffffff" : "#f1f1f1",
    backgroundColor: isActive ? "#9b59b6" : "transparent",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "500",
    textDecoration: "none",
    transition: "all 0.3s ease",
  });

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #6a0dad, #9b59b6)",
        padding: "14px 30px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        alignItems: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
      <NavLink to="/recipi" style={linkStyle}>
        Recipes
      </NavLink>
      <NavLink to="/create-recipi" style={linkStyle}>
        Create
      </NavLink>
    </div>
  );
};

export default Nav;
