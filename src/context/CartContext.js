import { createContext } from "react";
import ProductDetails from "../Pages/Home/DisplayProducts/ProductDetails";




export const CartContext = createContext();

const cartProvider = ({ children }) => {
    const allContext = ProductDetails();
    return (
        <CartContext.Provider value={allContext}>
            {children}
        </CartContext.Provider>
    )

}

export default cartProvider