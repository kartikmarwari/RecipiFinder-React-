import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { RecipeContext } from '../context/RecipiContext';
import { toast  } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { data, setData } = useContext(RecipeContext);
  const { register, handleSubmit, reset } = useForm();
 const navigate=useNavigate();
  const submithandler = (formdata) => {
    formdata.id=nanoid();
    const copydata=[...data];
    copydata.push(formdata);
    setData(copydata);

     localStorage.setItem("recipe",JSON.stringify(copydata))
    
    toast.success("New Recipi Added")
  reset();
  navigate("/recipi")
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

  return (
     <div
    style={{
      background:
        "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      paddingTop: "40px",
      paddingBottom: "40px",
    }}
  >
    <form
      onSubmit={handleSubmit(submithandler)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#f9f9f9",
        borderRadius: "55px",
        boxShadow: "0 3px 24px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "10px",
          fontSize: "28px",
        }}
      >
        🍽️ Add a New Recipe
      </h2>

      <input
        {...register("image")}
        type="url"
        placeholder="Image URL"
        style={inputStyle}
      />

      <input
        {...register("title")}
        type="text"
        placeholder="Recipe Title"
        style={inputStyle}
      />

      <input
        {...register("chef")}
        type="text"
        placeholder="Chef Name"
        style={inputStyle}
      />

      <textarea
        {...register("desc")}
        placeholder="Short Description"
        style={textareaStyle}
      />

      <textarea
        {...register("ingridient")}
        placeholder="Ingredients (comma-separated)"
        style={textareaStyle}
      />

      <textarea
        {...register("inst")}
        placeholder="Instructions"
        style={{ ...textareaStyle, minHeight: "120px" }}
      />

      <select {...register("category")} style={inputStyle}>
        <option value="">Select Category</option>
        <option value="cat-1">Breakfast</option>
        <option value="cat-2">Lunch</option>
        <option value="cat-3">Dinner</option>
         <option value="cat-4">Anytime Meal</option>
            <option value="cat-5">Drinks</option>
             <option value="cat-6">Sweets</option>
      </select>

      <button
        type="submit"
        style={{
          backgroundColor: "#ff6b6b",
          color: "white",
          padding: "12px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = "#ff4c4c")
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = "#ff6b6b")
        }
      >
        Submit Recipe
      </button>
    </form>
  </div>

  );
};

export default Create;
