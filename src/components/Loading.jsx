import {Puff} from "react-loader-spinner"; 
function Loading() {
    return (
        <div className="flex justify-center items-center">
           <Puff visible={true} height="80" width="80" color="#4fa94d" ariaLabel="puff-loading" wrapperStyle={{}} wrapperClass=""/>
        </div>
    );
}

export default Loading;