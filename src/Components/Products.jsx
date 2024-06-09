import React from 'react'
import NavBar from './NavBar'

const Products = () => {
  return (
    <div>
<NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">ID</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">TITLE</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">PRICE</label>
                <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label htmlFor="" className="form-label">DESCRIPTION</label>
                <textarea name="" id="" className="form-control"></textarea>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">CATEGORY</label>
                <select name="" id="" className="form-control">
                    <option value="Men's clothing">Men's clothing</option>
                    <option value="women's clothing">Womens's clothing</option>
                    <option value="Jwellery">Jwellery</option>
                    <option value="Electronics">Electronics</option>
                </select>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">IMAGE</label>
                <input type="file" name="" id="" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <button className="btn btn-success">REGISTER</button>

                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Products