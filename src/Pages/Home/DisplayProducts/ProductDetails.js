import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';


const ProductDetails = ({ handleAddToCart }) => {
    const { id } = useParams()
    const [product, setProduct] = useState({})




    useEffect(() => {
        fetch('https://salty-harbor-63032.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data[parseInt(id) - 1]))
    }, [id])


    return (
        <div className='container my-3'>
            <h2 className='mb-3 text-primary'>Details of The Product</h2>
            <div className="row">
                <div className="col-lg-12">
                    <div class="card mb-3" style={{ maxWidth: "940px" }}>
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={product?.image} style={{ height: "100%" }} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-7">
                                {!product.id ? <div class="spinner-border text-primary mx-auto" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>

                                    : <div class="card-body text-start">
                                        <h5>Product ID: {product?.id}</h5>
                                        <h5 class="card-title">Name: {product?.title}</h5>
                                        <p class="card-text"><span className='fw-bold'>Description:</span> {product?.description}</p>
                                        <p class="card-text"><span className='fw-bold'>Category:</span>  {product?.category}</p>
                                        <p class="card-text"><span className='fw-bold'>Price: $</span>  {product?.price}</p>
                                        <p class="card-text"><span className='fw-bold'>Stock:</span>  {product?.rating?.count}</p>
                                        <p><span className='fw-bold'>Ratings</span>  </p>
                                        <Rating
                                            initialRating={product?.rating?.rate}
                                            readonly
                                        /> <br />

                                        <button type="button" onClick={() => handleAddToCart(product)} class="btn btn-danger px-5">Add To Cart</button>
                                    </div>}

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-lg-4"></div> */}
            </div>
            <Link to="/"><button type="button" class="btn btn-success px-5 my-3"><i class="fas fa-arrow-left me-3"></i>Back To Home</button></Link>

        </div>
    );
};

export default ProductDetails;