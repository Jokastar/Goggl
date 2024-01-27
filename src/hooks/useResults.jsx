import {useState, useEffect} from "react"; 
import apiClient from "../services/apiClient";
import buildHttpRequest from "../services/buildHttpRequest"; 
import  {useDebounce}  from "use-debounce";



function useResults(searchTerm, type){

    const [results, setResults] = useState([]); 
    const [isLoading, setLoading] = useState(false); 
    const [error, setError] = useState(""); 
    const [debounceSearchTerm] = useDebounce(searchTerm, 1000); 
   
     
    const requestBody = searchTerm && buildHttpRequest(searchTerm, type, 10); 
    console.log(requestBody); 

        useEffect(() => {
        setLoading(true);
    
        apiClient.post(type, requestBody)
          .then(({ data }) => {
            setResults(data.result);
            setLoading(false);
          })
          .catch(err => {
            setError(err.error || "an error occured")
            setLoading(false);
          });
      }, [debounceSearchTerm, type]);
      return {results, error, isLoading} 
}

export default useResults;