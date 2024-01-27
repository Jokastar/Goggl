
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { useState } from "react";


function App() {
  const [darkTheme, setdarkTheme] = useState(false); 
  return(
    <>
   <div className={darkTheme ? "dark" : ""}>
    <NavBar onDarkTheme = {setdarkTheme} darkTheme={darkTheme}/>
    <AppRoutes/>
    <Footer /> 
   </div>
    </>
  )
}

export default App; 
