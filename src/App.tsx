import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./pages/user/Register"
import { Provider } from "react-redux"
import store from "./store/store"
import Login from "./pages/user/Login"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import Singleproduct from "./pages/Single-product/SingleProduct"
import MyCart from "./pages/cart/MyCart"
import Checkout from "./pages/checkout/Checkout"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Singleproduct />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/my-checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App