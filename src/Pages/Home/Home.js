import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { setProducts } from "../Redux/Actions/productActions";
import DisplayProducts from './DisplayProducts/DisplayProducts';
import './Home.css'

const Home = () => {
    const products = useSelector(state => state.allProducts.products);
    const [displayProducts, setDisplayProducts] = useState([]);

    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://salty-harbor-63032.herokuapp.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
        setDisplayProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
    return (
        <div className='homeBackground'>
            <div className="container">
                <div className="search-field">
                    <div className="search-box">
                        <input type="search" onChange={handleSearch} className="form-control" placeholder="Search your products" />
                        <button type="submit" className="btn  buttonStyle">Search</button>
                    </div>
                </div>
            </div>


            <div className="container mt-4 my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {products.length === 0 ? <div class="spinner-border text-primary mx-auto" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        :
                        displayProducts.map(product => <DisplayProducts
                            key={product.id}
                            product={product}
                        ></DisplayProducts>)
                    }
                    {/* {displayProducts.length === 0 && <div className='mx-auto'> <h4 className='text-danger'>No Resul Found!!!</h4> </div>} */}
                </div>
            </div>



        </div>
    );
};

export default Home;