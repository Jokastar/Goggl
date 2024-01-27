function buildHttpRequest( text, type, max_results){
    let requestBody = {
        text:text,
        safesearch: "off",
        timelimit: "",
        region: 'wt-wt',
        max_results: max_results 

    }
    switch(type){
        case "/websearch":
            requestBody =  requestBody;
            break; 
        case "/imagesearch":
            requestBody =  {...requestBody, 
            color: "",
            size: "",
            type_image: "",
            layout: ""
        }
            break; 
        case "/videosearch":
            requestBody =  {...requestBody, 
                duration: "",
                resolution: "",
            }
            break;
        case "/":
            requestBody ={
                text: text,
                region: wt-wt,
                max_results: max_results
            } 
         default :
            requestBody = {}   

    }
    return requestBody; 

}
export default buildHttpRequest; 