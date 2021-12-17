import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProducts = ({ product }) => {
    const { title, price, image, id } = product;


    return (
        <div>
            <div className="col h-100 text-center">
                <div className="card py-2 border-2 shadow-lg" style={{ height: '310px' }}>
                    <img src={image} className="mx-auto" height="150px" width="150px" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 20)}</h5>
                        <h6 className="card-title">${price}</h6>

                        <Link to={`/details/${id}`}>
                            <button type="button" class="btn btn-danger">See More Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DisplayProducts;