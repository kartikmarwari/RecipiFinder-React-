import React from "react";

const About = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f9f9f9, #e6e9f0)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#2c3e50",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About Us</h1>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "24px" }}>
          Welcome to <strong>My Recipi Book</strong> – your digital kitchen companion where
          passion meets simplicity!
        </p>

        <h2 style={{ fontSize: "1.8rem", marginTop: "30px" }}>👨‍🍳 What You Can Do Here</h2>
        <ul style={{ marginTop: "12px", paddingLeft: "20px", fontSize: "1rem" }}>
          <li>🧾 Discover and share delicious recipes</li>
          <li>📝 Create and store your personal favorites</li>
          <li>📖 Follow easy instructions for cooking success</li>
          <li>💾 Save recipes for later – anytime, anywhere</li>
        </ul>

        <h2 style={{ fontSize: "1.8rem", marginTop: "30px" }}>💡 Why We Built This</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
          Cooking connects people. We wanted to create a space where recipes aren't just steps –
          they're memories, culture, and love. Our goal is to make it easier for anyone to find,
          save, and enjoy the food they love.
        </p>

        <h2 style={{ fontSize: "1.8rem", marginTop: "30px" }}>🧪 Tech Behind the Scenes</h2>
        <ul style={{ marginTop: "12px", paddingLeft: "20px", fontSize: "1rem" }}>
          <li>⚛️ Built with React.js</li>
          <li>🪝 React Hook Form for easy input</li>
          <li>🌐 React Router for smooth page navigation</li>
          <li>🧠 Context API for state management</li>
        </ul>

        <h2 style={{ fontSize: "1.8rem", marginTop: "30px" }}>🤝 Let's Connect</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
          Want to contribute or say hi? Check out the <strong>GitHub icon</strong> on the bottom
          right corner of any page and connect with us there!
        </p>
      </div>
    </div>
  );
};

export default About;
