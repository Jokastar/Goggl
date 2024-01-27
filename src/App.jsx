
import NavBar from "./components/NavBar"; 
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import InfoTypeBar from "./components/InfoTypeBar";
import { useState } from "react";


function App() {
  const [darkTheme, setdarkTheme] = useState(false); 
  const [searchTerm, setSearchTerm] = useState(""); 
  return(
    <>
   <div className={darkTheme ? "dark" : ""}>
    <NavBar onDarkTheme = {setdarkTheme} darkTheme={darkTheme} onSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
    <InfoTypeBar/>
    <AppRoutes searchTerm={searchTerm}/>
    <Footer /> 
   </div>
    </>
  )
}

export default App; 
