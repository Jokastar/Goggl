import { Link } from "react-router-dom";

function InfoTypeBar({onType}) {
    const infoTypes = {
        search:"websearch", 
        images:"imagesearch",
        videos:"videosearch"
    }
        
    
    return (
        <>
        <ul className="flex justify-evenly align-center mt-10 w-full">
            {Object.entries(infoTypes).map(([key, value]) => <Link to={value} key={key} onClick={()=>onType(value)}>{key}</Link>)}
        </ul>
        </>
    );
}

export default InfoTypeBar;