import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/Cart/CartContext';

export const Navbar = () => {

  const { cart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cart.length); 
  }, [cart])
  

  return (
    <nav className="navbar navbar-expand-lg shadow sticky-top bg-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >Products Page</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <Link to='/' className="nav-link" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/products' className="nav-link" >Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link fw-bold" >
              <FaShoppingCart className='text-muted'/> {quantity }
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
