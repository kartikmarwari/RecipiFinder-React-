 import {nanoid} from "nanoid"
 const hand=(e)=>{
  e.preventDefault();
 }
 
 const App = () => {
   return (
     <div>
      <form onSubmit={hand}>
        <input type="text" name="" id="" />
        <button type="submit">click</button>
      </form>
       
     </div>
   )
 }
 
 export default App
 