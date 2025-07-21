import React from 'react';
import { Link } from 'react-router-dom';
import axios from "../utils/axios"
const Home = () => {

const getproduct=async ()=>{
try{
 const response =await axios.get("/products")
console.log(response.data);
}
catch (error){
console.log(error);
}


}








  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f7f9fc',
    padding: '60px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#333',
  };

  const subheadingStyle = {
    fontSize: '1.3rem',
    maxWidth: '800px',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '40px',
  };

  const buttonStyle = {
    backgroundColor: '#6a0dad',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const hoverStyle = {
    backgroundColor: '#520c8e',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to RecipeVerse 🍽️</h1>

      <p style={subheadingStyle}>
        Discover, share, and relive the joy of cooking with <strong>RecipeVerse</strong> — your digital cookbook built by food lovers, for food lovers.
        Whether you're a home chef looking to store your favorite recipes, or a foodie hunting for creative meal ideas, RecipeVerse is the place to be.
        Explore diverse cuisines, save your favorites, and manage your personalized collection — all in one simple, elegant platform.
      </p>
   
      <Link to="/recipi" style={buttonStyle}>Browse Recipes</Link>
    </div>
  );
};

export default Home;
