import { Link } from "react-router-dom";
function NavBar({darkTheme, onDarkTheme}) {
    return ( 
        <>
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center">
            <div className="flex justify-between items-center space-x-5 w-screen ">
                <Link to="/" className="text-2xl bg-blue-500 font-bold text-white px-5 py-1 rounded-md">Goggl</Link>
                <button 
                    onClick={()=> onDarkTheme(prev=>!prev)}
                    className="px-3 py-1 bg-gray-200 text-black rounded hover:shadow-lg"
                 >
                {darkTheme ? "light": "dark"}
              </button>
            </div>
        </div>
        </>
    );
}

export default NavBar;