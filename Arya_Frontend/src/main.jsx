import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Context/CartProvider';
import UserProvider from './Context/UserProvider';

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </CartProvider >
  </UserProvider>
)
