import Loading from "./Loading";
import useResults from "../hooks/useResults";



function results({searchTerm, type}) {

    const {results, error, isLoading} = useResults(searchTerm, type); 
      
    if(error) return(<p>{error}</p>)

    return (
        <>
        {isLoading && <Loading/>}
        <h1>{searchTerm}</h1>
        <h1>{}</h1>
        <ul>
            {results && results.map((result, index) => (<li key={index}>{result.title}</li>))}
        </ul>
        </>
    );
}

export default results;