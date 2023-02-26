import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resourceActions } from '../state'

function AddResource() {
  const [singleProduct,setsingleProduct]=useState([])
  const navigate=useNavigate()
  const[error,setError]=useState([])
  const dispatch=useDispatch()
  const onChangeHandler=(e)=>{
    setsingleProduct({...singleProduct,[e.target.name]:e.target.value})
  }
  const addDetails=(e,singleresource)=>{
    e.preventDefault();
    setError("")
    console.log(singleProduct)
    if(!singleProduct.resourceName || !singleProduct.description || !singleProduct.price || !singleProduct.instock || !singleProduct.categoryname)
    {
      setError("Please input all the fields")
    }
    else{
      console.log("entered successfull")
    dispatch(resourceActions.addResource(singleresource))
    navigate("/")
    setError("")  
  }
}

  return (
    <div>AddResource
            <div>
              {error}
         {/* {!error && <div className="alert alert-primary" role="alert">{error}</div>}
      <div className="container py-5"> */}
      <div className="card border-0 shadow p-3 mx-auto" style={{ width: '30rem' }}>
        <form>
          <h3 className="form-header nav-background">Add Resource</h3>
          <div className="form-group ">
            <label htmlFor="username">Resource Name </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Resource Name"
              name="resourceName"
              defaultValue={singleProduct.resourceName}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="description">Resource Description: </label>
            <input
              type="textfield"
              name="description"
              className="form-control"
              placeholder="Enter Resource Description"
              defaultValue={singleProduct.description}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="Category">Resource Category: </label>
            <select  value={singleProduct.categoryname} id='categoryname' onChange={onChangeHandler} name="categoryname">
                        {/* { categories.map((single)=>{
                            return <option value={single.CategoryName}>{single.CategoryName}</option>
                        })} */}
                        <option value="Utensils">Utensils</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Electronics">Electronics</option>
                    </select>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="price">Resource Unit  Price: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Price in Rs."
              name="price"
              defaultValue={singleProduct.price}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="text">Resource In Stock: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Product Rating"
              name="instock"
              defaultValue={singleProduct.instock}
              onChange={onChangeHandler}
            />
          </div>
          <br />
          <button className="button btn btn-success" type="submit" onClick={(e) => addDetails(e, singleProduct)}>Add Product</button>
        </form>
      </div>
      <ToastContainer />
    </div>
    </div>

  )
}

export default AddResource