import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { RecipeContextProvider } from './context/RecipiContext';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
 

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecipeContextProvider>
      <ToastContainer   position="top-center"/>
      <App />
    </RecipeContextProvider>
  </BrowserRouter>
);
