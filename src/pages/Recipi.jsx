import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipiContext';
import RecipiCard from '../component/recipicard';

const Recipi = () => {
  const { data } = useContext(RecipeContext);
  const renderrecipi = data.map((recipe) => (
        <RecipiCard key={recipe.id} recipi={recipe} />
      )) 
      console.log(renderrecipi);
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
    {data.length > 0? renderrecipi:"no recipi found"}
    </div>
  );
};

export default Recipi;
