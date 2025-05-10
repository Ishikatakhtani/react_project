import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Women from "./pages/Women";
import MyCart from "./pages/myCart";
const App=()=>{
    return(
    
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path="home" element={<Home/>} />
      <Route path="women" element={<Women/>} />
      <Route path="mycart" element={<MyCart/>} />
      
      
      
      </Route>
      
      </Routes>
      
      </BrowserRouter>
      
      </>
    )
    }
    export default App;
    