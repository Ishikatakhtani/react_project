import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch("http://localhost:3000/user");
      const response = await fetch(import.meta.env.VITE_API_URL_USER,{
  headers: {
    "ngrok-skip-browser-warning": "true"
  }});
      const users = await response.json();

      const userExists = users.find((u) => u.email === email);

      if (userExists) {
        setError("User with this email already exists!");
        return;
      }

      const newUser = {
        id: users.length + 1, // Generate a new user ID
        name,
        email,
        password, // In real-world apps, hash passwords before storing
        phone,
        address,
        role: "customer", // Default role for new users
        profilePic: "https://randomuser.me/api/portraits/lego/1.jpg", // Default profile pic
      };

      // await fetch("http://localhost:3000/user", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newUser),
      // });

      await fetch(import.meta.env.VITE_API_URL_USER, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
  body: JSON.stringify(newUser),
});

      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      setError("Error connecting to server!");
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/Login">Login</Link>

      </p>
    </div>
  );
};

export default Signup;