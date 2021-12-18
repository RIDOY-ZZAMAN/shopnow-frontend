import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';


const ProductDetails = ({ handleAddToCart, setDisplayProducts }) => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch('https://salty-harbor-63032.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [productId])
    useEffect(() => {
        const foundProduct = productDetails.find((product) => product._id === productId);
        setSingleProduct(foundProduct)
    }, [productDetails, productId]);

    return (
        <div className='container my-3'>
            <h2 className='mb-3 text-primary'>Details of The Product</h2>
            <div className="row">
                <div className="col-lg-12">
                    <div class="card mb-3" style={{ maxWidth: "940px" }}>
                        <div class="row g-0">
                            <div class="col-md-5">
                                <img src={singleProduct?.image} style={{ height: "100%" }} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-7">
                                {!singleProduct?.id ? <div class="spinner-border text-primary mx-auto" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>

                                    : <div class="card-body text-start">
                                        <h5>Product ID: {singleProduct?.id}</h5>
                                        <h5 class="card-title">Name: {singleProduct?.title}</h5>
                                        <p class="card-text"><span className='fw-bold'>Description:</span> {singleProduct?.description}</p>
                                        <p class="card-text"><span className='fw-bold'>Category:</span>  {singleProduct?.category}</p>
                                        <p class="card-text"><span className='fw-bold'>Price: $</span>  {singleProduct?.price}</p>
                                        <p class="card-text"><span className='fw-bold'>Stock:</span>  {singleProduct?.rating?.count}</p>
                                        <p><span className='fw-bold'>Ratings</span>  </p>
                                        <Rating
                                            initialRating={singleProduct?.rating?.rate}
                                            readonly
                                        /> <br />

                                        <button type="button" onClick={() => handleAddToCart(singleProduct)} class="btn btn-danger px-5">Add To Cart</button>
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