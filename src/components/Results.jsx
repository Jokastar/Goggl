import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"; 
import apiClient from "../services/apiClient";

function results({searchTerm}) {

    const [results, setResults] = useState([]); 
    const [isLoading, setLoading] = useState(false); 
    const [error, setError] = useState(""); 

    const type = useLocation().pathname; 
  

    const requestData = {
        text: searchTerm,
        safesearch: 'off',
        timelimit: '',
        region: 'wt-wt',
        max_results: 20
      };
    
       /* useEffect(() => {
        setLoading(true);
    
        apiClient.post(type, requestData)
          .then(({ data }) => {
            setResults(data.result);
            setLoading(false);
          })
          .catch(err => {
            setError(err.error || "an error occured")
            setLoading(false);
          });
      }, []); */
    
      
    if(error) return(<p>{error}</p>)

    return (
        <>
        {isLoading && <p>Loading...</p>}
        <h1>{searchTerm}</h1>
        <ul>
            {results && results.map((result, index) => (<li key={index}>{result.title}</li>))}
        </ul>
        </>
    );
}

export default results;