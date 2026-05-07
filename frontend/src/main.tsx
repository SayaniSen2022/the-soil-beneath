import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { CartProvider } from './context/CartContext.tsx';
import "./index.css"
import { AuthProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </StrictMode>,
)
