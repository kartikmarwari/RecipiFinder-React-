import React from 'react';
import { Link } from 'react-router-dom';

const RecipiCard = (props) => {
  const { inst, image, title, desc, chef, id, ingredient } = props.recipi;

  return (
   <Link
  to={`/recipi/detail/${id}`}
  style={{
    backdropFilter: "blur(10px)",
    background: "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(245,245,245,0.3))",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "350px",
    textDecoration: "none",
    color: "#333",
    margin: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    transition: "transform 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>

      <img
        style={{
          borderRadius: "12px",
          objectFit: "cover",
          width: "100%",
          height: "200px"
        }}
        src={image}
        alt={title}
      />

      <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2c3e50", marginBottom: "5px" }}>
        {title}
      </h2>

      <p style={{ margin: "0", fontSize: "0.95rem", color: "#555" }}>
        <strong>👨‍🍳 Chef:</strong> {chef}
      </p>

      <p style={{ margin: "0", fontSize: "0.95rem", color: "#555" }}>
        <strong>🧂 Ingredients:</strong> {ingredient || "N/A"}
      </p>

      <p style={{ fontSize: "0.95rem", lineHeight: "1.4", color: "#444" }}>
        <strong>📋 Instructions:</strong> {inst.slice(0, 60)}... <span style={{ color: "#2980b9" }}>more</span>
      </p>

      <p style={{ fontSize: "0.95rem", lineHeight: "1.4", color: "#444" }}>
        <strong style={{ color: "#e67e22" }}>📝 Description:</strong> {desc.slice(0, 60)}... <span style={{ color: "#2980b9" }}>more</span>
      </p>
    </Link>
  );
};

export default RecipiCard;
