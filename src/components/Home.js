import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { resourceActions } from '../state'
function Home() {
     //useselector is a hook used to select the particular reducer from combinereducers
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const resources = useSelector(state=>state.resource)
    useEffect( ()=>{
        dispatch(resourceActions.getAllResourcers())
    },[])
    console.log(resources)
    const deleteHandler=(e,id)=>{
        {
            if(window.confirm("Are you sure wanted to delete the record")){
                e.preventDefault();
                dispatch(resourceActions.deleteResource(id))
                // dispatch(resourceActions.getAllResourcers())
                // displayData();
            }
        }
    }

    
  return (
    <div>
        <button type="button" className="btn btn-secondary mt-2" onClick={()=>{navigate("/addResource")}}>Add Resource</button>
        {/* {
        resources && resources.map((single)=>{
           return <h1>{single.name}</h1>
        })} */}
        <div className="table-responsive-sm ms-3 me-3 mt-3">

        <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Resource Name</th>
      <th scope="col">Resource Description</th>
      <th scope="col">Instock</th>
      <th scope="col">Unit price</th>
      <th scope="col">Category</th>
      <th scope="col">Edit & Delete</th>
    </tr>
  </thead>
  {
     resources.map((single,index)=>{      
        return <>
        <tbody>
        <tr>
          <th scope="row">{index+1}</th>
          <td>{single.resourceName}</td>
          <td>{single.description}</td>
          <td>{single.instock}</td>
          <td>{single.price}</td>
          <td>{single.categoryname}</td>
          <td><button onClick={(e)=>{e.preventDefault();navigate("/updateResource",{state:single})} }>Edit</button><button className='ms-2' onClick={(e)=>deleteHandler(e,single.id)}>Delete</button></td>
        </tr>
 
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
  </>
  })}
</table>
        </div>
        
    </div>
  )
}

export default Home