import React, { createContext, useEffect, useState } from 'react';

export const RecipeContext = createContext(null);

export const RecipeContextProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("recipe");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Optional: You can sync updates if needed
    localStorage.setItem("recipe", JSON.stringify(data));
  }, [data]);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
