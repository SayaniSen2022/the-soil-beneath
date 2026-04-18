import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/layout/SharedLayout"
import Home from "./pages/Home/Home"
import ProductList from "./pages/ProductList"
import Cart from "./pages/Cart"
import "./App.css"
import Login from "./pages/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
