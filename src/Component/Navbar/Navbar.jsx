import React, { useState } from 'react';
import './Navbar.css'; // Correct import statement
import logo from '../Assets/logo-pro.webp';
// const { FaShoppingCart } = from ('reac');
// import { FaShoppingCart } from 'react-icons/fa/index.esm';
import { FaShoppingCart} from 'react-icons/fa';



import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" style={{ height: '110px', width: '110px' }} />
        <p>SHOP MART</p>
      </div>
      
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Men") }}><Link style={{textDecoration :'none'}} to='/Mens'>Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Women") }}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Kids") }}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>  
      
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><FaShoppingCart size={24} /></Link> {/* Render the cart icon with size 24 */}
        <div className='nav-cart-count'>0</div>
      </div>     
    </div>
  );
}

export default Navbar;
