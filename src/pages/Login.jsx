import { FaShippingFast } from "react-icons/fa";
import { RiRefundFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { login } from "./authSlice"; // Import login action
import { useNavigate } from "react-router-dom";
import { login } from "./authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/user"); // Fetch users from db.json
      const users = await response.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        dispatch(login(user)); // Store full user data in Redux
        navigate("/Home.jsx"); 
      } else {
        setError("Invalid email or password!");
      }
    } catch (err) {
      setError("Error connecting to server!");
    }
  };

  return (
    <>
    <h4 id="login-heading">Sign in to access your Converse member perks.</h4>
    <div id="login-h2">
       <div id="d3">
        <div id="d1">
        <FaShippingFast />  </div>
      <p id="d2">  Fast, Free Shipping  </p> 
        <p>  
    Sign up for Converse.in account and get free shipping on <br /> every order
    <br />
    <a href="" id="a">
    Learn More</a>
    </p>
         </div>
        <div id="d3">
            <div id="d1"> 
        <RiRefundFill />
        </div>
      <p id="d2">  Worry-Free Returns  </p>
      <p>
    Not happy? Return your purchase for free within 7 days.
     <br />
    <br />
    <a href="" id="a">
    Learn More</a>
    </p>
         </div>
         <div id="d3">
            <div id="d1">
        <FaSquareXTwitter />
        <IoLogoInstagram />
        <FaFacebook />
        </div>
       <p id="d2"> Follow Us </p> 
    Keep up with the latest Converse news on our social channels.
    
         </div>
    </div>
    <div className="login-container">
        
      <h2>Login</h2>
      
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
    </>
  );
};

export default Login;