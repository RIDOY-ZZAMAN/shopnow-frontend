import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import ProductDetails from './Pages/Home/DisplayProducts/ProductDetails';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order';
import Swal from 'sweetalert2'


function App() {
  const [cartItem, setCartItem] = useState([]);
  const handleAddToCart = (product) => {
    const exist = cartItem.find(item => item.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map(item => item.id === product.id ? { ...exist, quantity: exist.quantity + 1 }
          :
          item)
      )

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Order Added To Cart',
        showConfirmButton: false,
        timer: 1500
      })
    }

    else {
      setCartItem([...cartItem, { ...product, quantity: 1 }])
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Order Added To Cart',
      showConfirmButton: false,
      timer: 1500
    })
  }


  const handleConfirm = (cartProductId) => {
    const newCartProduct = cartItem.filter(item => item.id !== cartProductId);
    setCartItem(newCartProduct)
  }

  const handleCancelOrder = (cartProductId) => {
    const newCartProduct = cartItem.filter(item => item.id !== cartProductId);
    setCartItem(newCartProduct)
  }



  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItem={cartItem} ></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/productDetails/:productId">
            <ProductDetails handleAddToCart={handleAddToCart} />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/cart">
            <Cart cartItem={cartItem} handleConfirm={handleConfirm} handleCancelOrder={handleCancelOrder} ></Cart>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
