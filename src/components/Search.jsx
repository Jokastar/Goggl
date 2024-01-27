function Search({onSearchTerm, searchTerm}) {
    const handleChange = (e) =>{
        onSearchTerm(e.target.value)
    }
    return (
        <>
            <input type="text" onChange={(e)=>handleChange(e)} value={searchTerm}className="grow border rounded-2xl mx-15 px-6 py-1 dark:bg-gray-800 dark:text-white dark:border-white" />
        </>
    );
}

export default Search;