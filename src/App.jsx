import Mainroute from "./routes/Mainroute"
import Nav from "./component/Nav"
import GitHubCorner from "./component/GitHubCorner"
 const App = () => {
   return (
    <div
  style={{
    width: "100%",
    minHeight: "100vh",            // full screen height
    backgroundColor:  "#f0f4f8", // lighter modern gray
    padding: "20px",               // space inside the container
    boxSizing: "border-box",       // includes padding in total width/height
    fontFamily: "Arial, sans-serif", // clean font for the app
  }}
>

      <GitHubCorner />
    <Nav />
       <Mainroute />
       
     </div>
   )
 }
 
 export default App
 