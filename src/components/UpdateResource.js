import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resourceActions } from '../state';

function UpdateResource() {
    const location = useLocation();
    const navigate=useNavigate()
    const [singleProduct,setsingleProduct]=useState(location.state)
    const[error,setError]=useState([])
    const dispatch=useDispatch()
    const onChangeHandler=(e)=>{
      setsingleProduct({...singleProduct,[e.target.name]:e.target.value})
    }
    const updateDetails=(e,singleresource,id)=>{
      e.preventDefault();
      setError("")
      console.log(singleresource)
      if(!singleProduct.resourceName || !singleProduct.description || !singleProduct.price || !singleProduct.instock || !singleProduct.categoryname)
      {
        setError("Please input all the fields")
      }
      else{
        console.log("entered successfull")
      dispatch(resourceActions.updateResource(singleresource,id))
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
            <h3 className="form-header nav-background">Update Resource</h3>
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
            <button className="button btn btn-success" type="submit" onClick={(e) => updateDetails(e,singleProduct,singleProduct.id)}>Update  Product</button>
          </form>
        </div>
        
      </div>
      </div>
  
    )
}

export default UpdateResource