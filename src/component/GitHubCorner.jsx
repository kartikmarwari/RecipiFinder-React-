import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubCorner = () => {
  return (
    <a
      href="https://github.com/Kartikmarwari" // 🔁 Replace with your GitHub
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "50%",
        padding: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        zIndex: 1000,
        fontSize: "24px",
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Connect with me on GitHub"
    >
      <FaGithub />
    </a>
  );
};

export default GitHubCorner;
