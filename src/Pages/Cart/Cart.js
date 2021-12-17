import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItem, handleConfirm, handleCancelOrder }) => {
    return (
        <div className='container my-4'>
            <h2 className='text-primary'>Your Cart's Details</h2>
            <Link to="/"><button type="button" class="btn btn-success px-5 my-3"><i class="fas fa-arrow-left me-3"></i>SHOP MORE</button></Link>

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                {cartItem.map(item =>
                    <div class="col">
                        <div class="card">
                            <img src={item.image} className='ps-5' height="230px" width="300px" alt="..." />
                            <div class="card-body text-center" >
                                <h5 class="card-title">P ID: {item.id}</h5>
                                <h5 class="card-title">Price: ${item.price}</h5>
                                <h5 class="card-title">Quantity: {item.quantity}</h5>
                                <div className='d-flex justify-content-between'>
                                    <Link to="/order"> <button onClick={() => handleConfirm(item.id)} type="button" class="btn btn-primary">Confirm Order</button></Link>
                                    <button onClick={() => handleCancelOrder(item.id)} type="button" class="btn btn-warning">Cancel Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Cart;



// <div class="card mb-3" style={{ maxWidth: "530px" }}>
//                 <div class="row g-0">
//                     <div class="col-md-4">
//                         <img src={item.image} class="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div class="col-md-8">
//                         <div class="card-body">
//                             <h5 class="card-title">Name: {item.title}</h5>
//                             <h5 class="card-title">Price: ${item.price}</h5>
//                             <h5 class="card-title">Quantity: {item.quantity}</h5>

//                         </div>
//                     </div>
//                 </div>
//             </div>