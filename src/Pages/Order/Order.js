import React from 'react';
import { Link } from 'react-router-dom';
import orderImg from '../../Images/order.gif'

const Order = () => {
    return (
        <div className="text-center mt-5">
            <div>
                <img src={orderImg} style={{ maxWidth: "420px" }} alt="" />
            </div>
            <h5 className="text-success text-uppercase mt-3"> Your Order has been successfully placed!!!</h5>
            <Link to="/home">
                <Link to="/"><button type="button" class="btn btn-success px-5 my-3"><i class="fas fa-arrow-left me-3"></i>Back To Home</button></Link>
            </Link>
        </div>
    );
};

export default Order;