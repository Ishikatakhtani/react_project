import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
             <div class="footer-container">
      <div class="footer-logo">
          <h2><span>Conversa</span> Shoes</h2> 
      </div> 
      <div class="footer-links">
      <Link to="/men">Men</Link>
  <Link to="/women">Women</Link>
  <a href="#A">About Us</a>
  <a href="#contact">Contact</a>
  <Link to="/">Home</Link>
  </div>
      <div class="footer-social">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
      <div class="footer-copy">
          <p>&copy;  All Rights Reserved.</p>
      </div>
</div>
        </>
    )
}

export default Footer