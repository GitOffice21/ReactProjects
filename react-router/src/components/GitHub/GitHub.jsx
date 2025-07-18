// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function GitHub(){

const data = useLoaderData()


// const [data,setData]=useState([])
//     useEffect(()=> {
//         fetch('http://api.github.com/users/hiteshchoudhary')
//         .then(response=> response.json())
//         .then(data =>{
//             console.log(data);
//             setData(data)

            
//         })
//     } , [])
    return(
        <div className="text-centre m-4 bg-gray-600 text-white p-4 text-3xl">Github followers :{data.followers}</div>
    )
}

export default GitHub


// eslint-disable-next-line react-refresh/only-export-components
export const gitHubInfoFolder = async ()=>{
     const response = await fetch('http://api.github.com/users/hiteshchoudhary')
     return response.json()
}