import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RecipeContext } from '../context/RecipiContext';
import { toast } from 'react-toastify';

const SingleRecipi = () => {
  const { data, setData } = useContext(RecipeContext);
  const { register, handleSubmit, reset } = useForm();
  const params = useParams();
  const navigate = useNavigate(); // ✅ move this to top-level

  const recipe = data.find((recipe) => params.id === recipe.id);
  console.log(recipe);

  const submithandler = (formdata) => {
    const index = data.findIndex((item) => params.id === item.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...formdata };
    setData(copydata);
    localStorage.setItem("recipe",JSON.stringify(copydata))
    toast.success("Updated successfully");
    navigate("/recipi");
  };

  const deletehandler = () => {
    const filterdata = data.filter((r) => r.id !== params.id);
    setData(filterdata);
localStorage.setItem("recipe",JSON.stringify(filterdata))
    toast.success("Deleted Succesfully ");
    navigate("/recipi");
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "80px",
  };

  return recipe ? (
   <div style={{ display: "flex", flexWrap: "wrap", width: "100%", padding: "20px" }}>
  <div className="left" style={{
    width: "50%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  }}>
    <h1 style={{ fontSize: "2.5rem", color: "#2c3e50", marginBottom: "10px" }}>
      {recipe.title}
    </h1>

    <img
      style={{
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
      src={recipe.image}
      alt={recipe.title}
    />

    <h2 style={{ fontSize: "1.2rem", color: "#555" }}>
      👨‍🍳 Made by: <span style={{ color: "#2980b9" }}>{recipe.chef}</span>
    </h2>

    <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
      <strong>📝 Description:</strong><br />
      {recipe.desc}
    </p>

    <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
      <strong>🧂 Ingredients:</strong><br />
      {recipe.ingridient || "Not available"}
    </p>

    <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#444" }}>
      <strong>📋 Instructions:</strong><br />
      {recipe.inst || "Not available"}
    </p>
  </div>

      <form
        onSubmit={handleSubmit(submithandler)} // ✅ form handles submit
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          margin: "40px auto",
          padding: "30px",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}>
          Recipe Details
        </h2>

        <input {...register("image")} type="url" defaultValue={recipe.image} placeholder="Image URL" style={inputStyle} />
        <input {...register("title")} type="text" defaultValue={recipe.title} placeholder="Recipe Title" style={inputStyle} />
        <input {...register("chef")} type="text" defaultValue={recipe.chef} placeholder="Chef Name" style={inputStyle} />
        <textarea {...register("desc")} placeholder="Description" defaultValue={recipe.desc} style={textareaStyle} />
        <textarea {...register("ingr")} placeholder="Ingredients" defaultValue={recipe.ingridient} style={textareaStyle} />
        <textarea {...register("inst")} placeholder="Instructions" defaultValue={recipe.inst} style={{ ...textareaStyle, minHeight: "120px" }} />

        <select {...register("category")} style={inputStyle} defaultValue={recipe.category}>
          <option value="">Select Category</option>
          <option value="cat-1">Breakfast</option>
          <option value="cat-2">Lunch</option>
          <option value="cat-3">Dinner</option>
           <option value="cat-4">Anytime Meal</option>
            <option value="cat-5">Drinks</option>
            <option value="cat-6">Sweets</option>
        </select>

        <button
          type="submit" // ✅ submit form
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "12px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Update Recipe
        </button>

        <button
          type="button" // ✅ not a submit button
          onClick={deletehandler}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "12px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "No Recipi"
  );
};

export default SingleRecipi;
