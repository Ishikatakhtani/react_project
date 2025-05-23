import { BrowserRouter, Routes,Route } from "react-router-dom";
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
const App=()=>{
    return(
    
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="home" element={<Home/>} />
      <Route path="women" element={<Women/>} />
      <Route path="mycart" element={<MyCart/>} />
      <Route path="men" element={<Men/>} />
      <Route path="limitededition" element={<Limitededition/>} />
      <Route path="sale" element={<Sale/>} />
     
      <Route path="HighTop" element={<HighTop/>} />
      <Route path="MidTop" element={<MidTop/>} />
      <Route path="Platform" element={<Platform/>} />
      <Route path="SlipOn" element={<SlipOn/>} />
      <Route path="LowTop" element={<LowTop/>} />
      <Route path="LowTop" element={<LowTop/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Signup" element={<Signup/>} />
      <Route path="Wishlist" element={<Wishlist/>} />
      <Route path="search" element={<Search/>} />
      </Route>
      
      </Routes>
      
      </BrowserRouter>
      
      </>
    )
    }
    export default App;
    