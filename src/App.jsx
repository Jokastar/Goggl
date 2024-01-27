
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import { useState } from "react";


function App() {
  const [darkTheme, setdarkTheme] = useState(false); 
  return(
    <>
   <div className={darkTheme ? "dark" : ""}>
    <NavBar onDarkTheme = {setdarkTheme} darkTheme={darkTheme}/>
   </div>
    </>
  )
}

export default App; 
