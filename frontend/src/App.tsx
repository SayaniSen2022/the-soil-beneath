import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/layout/SharedLayout"
import Home from "./pages/Home/Home"
import ProductList from "./pages/ProductList"
import ProductDetails from"./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart"
import "./App.css"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AuthLayout from "./components/layout/AuthLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
          </Route>
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
