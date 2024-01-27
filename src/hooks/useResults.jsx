import {useState, useEffect} from "react"; 
import apiClient from "../services/apiClient";

function useResults(type) {
    const [results, setResults] = useState([]); 
    const [isLoading, setLoading] = useState(false); 
    const [searchTerm, setSearchTerm] = useState("Elon Musk"); 
    const [error, setError] = useState(""); 

    useEffect(()=>{
        setLoading(true); 

        apiClient.get(`/${type}`, {params:{query:searchTerm, limit:"10"}})
        .then(({data}) => {
            setResults(data.results); 
            setLoading(false); 
        })
        .catch(err => {
            setError(err.message); 
            console.log(error)
            setLoading(false); 
        })
        return {error, isLoading, results}; 
    }, []); 
}

export default useResults;