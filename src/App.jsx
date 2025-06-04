import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import Home from "./pages/Home";
import Women from "./pages/Women";
import MyCart from "./pages/myCart";
import Men from "./pages/Men";
import Limitededition from "./pages/Limitededition";
import Sale from "./pages/Sale";

import HighTop from "./pages/HighTop";
import LowTop from "./pages/LowTop";
import MidTop from "./pages/MidTop";
import Platform from "./pages/Platform";
import SlipOn from "./pages/SlipOn";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist.";
import Search from "./pages/Search";

const App = () => {
  const user = useSelector((state) => state.auth?.user); // Safe access

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={user ? <Layout /> : <Navigate to="/login" replace />}
        >
          {/* Nested routes under Layout */}
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="women" element={<Women />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="men" element={<Men />} />
          <Route path="limitededition" element={<Limitededition />} />
          <Route path="sale" element={<Sale />} />
          <Route path="HighTop" element={<HighTop />} />
          <Route path="MidTop" element={<MidTop />} />
          <Route path="Platform" element={<Platform />} />
          <Route path="SlipOn" element={<SlipOn />} />
          <Route path="LowTop" element={<LowTop />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="search" element={<Search />} />
            
        </Route>

        {/* Catch all unknown routes redirect to login or 404 */}
        <Route path="*" element={<Navigate to={user ? "/home" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
