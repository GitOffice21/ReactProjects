import React from "react";
import { useParams } from "react-router-dom";


function User(){
    const {userid} = useParams()
    return(
        <>
        <div className="flex justify-center items-center bg-gray-600 p-4 text-white">
    
          User ID: <span className="font-semibold">{userid}</span>
      
      </div>
 
            </>
    )
}

export default User
