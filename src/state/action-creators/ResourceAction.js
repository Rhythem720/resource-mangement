import axios from "axios"
export const getAllResourcers=()=>{
    return (dispatch)=>{
        // const data= await fetch(`http://localhost:500/resources`);
        // const parseddata=await data.json();
        axios.get(`${process.env.REACT_APP_API}`).then((resp)=>{
            console.log("resp",resp)
            dispatch({type:"get_all_resource",payload:resp.data})
        }).catch((error)=>console.log(error))

        // dispatch({type:"get_all_resource",payload:parseddata})
    }
}
export const getResource=(id)=>{
    return (dispatch)=>{
        dispatch({type:"get_single_resource",payload:id})
    }
}

// const deleteResource=(id)=>{
//     return async(dispatch)=>{
//         const data=await fetch(`http://localhost:5000/resources/${action.payload}`,{method:'delete'})
//             const response =await data.json();     
//             state=response;  
//         dispatch({type:"delete_resource",payload:id})
//     }
// }
// export const updateResource=()=>{
//     return (dispatch)=>{
//         axios.
//     }
// }
export const deleteResource=(id)=>{
    return async(dispatch)=>{
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            console.log("resp",resp)
            dispatch({type:"delete_resource",payload:resp.data})
            dispatch(getAllResourcers());
        }).catch((error)=>console.log(error))
        }
    }
export const addResource=(resource)=>{
    return async(dispatch)=>{
        axios.post(`${process.env.REACT_APP_API}`,resource)
        .then((resp)=>{
            console.log("resp",resp)
            dispatch({type:"add_resource"})
        }).catch((error)=>console.log(error))
    }
}
export const updateResource=(resource,id)=>{
    return async(dispatch)=>{
        axios.put(`${process.env.REACT_APP_API}/${id}`,resource)
        .then((resp)=>{
            console.log("resp",resp)
            dispatch({type:"update_resource"})
        }).catch((error)=>console.log(error))
    }
}