import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Women from "./pages/Women";
import MyCart from "./pages/myCart";
import Men from "./pages/Men";
import Limitededition from "./pages/Limitededition";
import Sale from "./pages/Sale";
import Search from "./pages/Search";
import HighTop from "./pages/HighTop";
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
      <Route path="Search" element={<Search/>} />
      <Route path="HighTop" element={<HighTop/>} />
      </Route>
      
      </Routes>
      
      </BrowserRouter>
      
      </>
    )
    }
    export default App;
    