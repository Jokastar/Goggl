import { Link } from "react-router-dom";
import Search from "./Search";
function NavBar({darkTheme, onDarkTheme}) {
    return ( 
        <>
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center">
            <div className="flex justify-between items-center space-x-5 w-screen ">
                <Link to="/" className="text-2xl bg-blue-500 font-bold text-white px-6 py-2 rounded-md">Goggl</Link>
                <Search style={{flexGrow:1}}/>
                <button 
                    onClick={()=> onDarkTheme(prev=>!prev)}
                    className="px-5 py-1 bg-black text-white rounded-full mx-0 dark:bg-white dark:text-black"
                 >
                {darkTheme ? "light": "dark"}
              </button>
            </div>
        </div>
        </>
    );
}

export default NavBar;