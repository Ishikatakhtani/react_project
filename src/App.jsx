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
  const user = useSelector((state) => state.auth?.user);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Public Layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="limitededition" element={<Limitededition />} />
          <Route path="sale" element={<Sale />} />
          <Route path="HighTop" element={<HighTop />} />
          <Route path="MidTop" element={<MidTop />} />
          <Route path="Platform" element={<Platform />} />
          <Route path="SlipOn" element={<SlipOn />} />
          <Route path="LowTop" element={<LowTop />} />
          <Route path="search" element={<Search />} />

          {/* Protected Routes */}
          <Route
            path="mycart"
            element={user ? <MyCart /> : <Navigate to="/login" replace />}
          />
          <Route
            path="Wishlist"
            element={user ? <Wishlist /> : <Navigate to="/login" replace />}
          />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
