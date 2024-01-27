import Loading from "./Loading";
import useResults from "../hooks/useResults";



function results({searchTerm, type}) {

    const {results, error, isLoading} = useResults(searchTerm, type); 
      
    //if(error) return(<p>{error}</p>)

    if (isLoading) {
      return <Loading />;
    }
  
    switch (type) {
      case "websearch":
        return <h2>Web Search</h2>;
      case "imagesearch":
        return <h2>Image Search</h2>;
      case "videosearch":
        return <h2>Video Search</h2>;
      default:
        return <h2>Results</h2>;
    }
  
}

export default results;