//react icon 
import { FaShippingFast } from "react-icons/fa";
import { RiRefundFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Home=()=>{
    return(
        <>
        <div id="h1">
        <img src="https://www.converse.in/media/wysiwyg/Desktop.jpg?auto=webp&format=webp&quality=70" alt="" />
        </div>
        <Link to="/Limitededition"> <button id="b1"  >Shop Now</button> </Link>
        <div id="h2">
            <img src="https://www.converse.in/media/wysiwyg/May_25_homepage_copy-16-1_1.jpg?auto=webp&format=webp&quality=70" alt="" height={"600px"}/>
            <img src="https://www.converse.in/media/wysiwyg/May_22_homepage_copy-15.jpg?auto=webp&format=webp&quality=70" alt=""  height={"600px"} />
            <img src="https://www.converse.in/media/wysiwyg/May_25_homepage_copy-17-1.jpg?auto=webp&format=webp&quality=70" alt=""  height={"600px"} />
        </div>

        <div id="h3">
            <h2>Shop By Style</h2>
        </div>
        <div id="h4">
        <div id="i1">
            <img src="https://www.converse.in/media/wysiwyg/Frame_37_1__1.png?auto=webp&format=webp&quality=70" alt=""  />
          <p id="d1"><Link to="/HighTop" className="link" > High Top </Link></p></div>
          <div id="i1">
            <img src="https://www.converse.in/media/wysiwyg/Frame_38_4.png?auto=webp&format=webp&quality=70" alt="" />
            <p id="d1"><Link to="/LowTop" className="link" >Low Top </Link></p></div>
            <div id="i1">
            <img src="https://www.converse.in/media/wysiwyg/Frame_39_2.png?auto=webp&format=webp&quality=70" alt="" />
            <p id="d1"><Link to="/Platform" className="link" >PLatform</Link></p></div>
            <div id="i1">
            <img src="https://www.converse.in/media/wysiwyg/Frame_40_3.png?auto=webp&format=webp&quality=70" alt="" />
            <p id="d1"><Link to="/MidTop"className="link">Kids</Link></p></div>
        </div>
        
        <div id="h5">
            
<div id="h2">
    <img src="https://www.converse.in/media/wysiwyg/rick_owens_desktop-22-1.png?auto=webp&format=webp&quality=70" alt="" height={"700px"} />
    <div>
    <img src="https://www.converse.in/media/wysiwyg/rick_owens_desktop-21.png?auto=webp&format=webp&quality=70" alt="" height={"700px"} />
 <Link to="/Men">  <button  id="b2"> Shop now </button> </Link>  </div> 
    <img src="https://www.converse.in/media/wysiwyg/rick_owens_desktop-23-1.png?auto=webp&format=webp&quality=70" alt="" height={"700px"} />
</div>
</div>

<div id="h2">
<div>
<img src="https://www.converse.in/media/wysiwyg/May_22_homepage_copy-07-1.jpg?auto=webp&format=webp&quality=70" alt="" />
<Link to="/Men"> <button  id="b3">Shop now</button> </Link></div>
<img src="https://www.converse.in/media/wysiwyg/May_22_homepage_copy-08-1.jpg?auto=webp&format=webp&quality=70" alt="" />
</div>

<div id="h2">
<div id="h3">
    <div>
        <img src="https://www.converse.in/media/wysiwyg/May_22_homepage_copy-04.jpg?auto=webp&format=webp&quality=70" alt=""    />
      <Link to="/Women">  <button id="b4">Shop now</button></Link>
        <img src="https://www.converse.in/media/wysiwyg/april_slicespng-05_1.png?auto=webp&format=webp&quality=70" alt=""  />
        
        </div>
        <img src="https://www.converse.in/media/wysiwyg/april_slicespng-06_1.png?auto=webp&format=webp&quality=70" alt=""  />
</div>
</div>

<div id="h3">
<div>
    <img src="https://www.converse.in/media/wysiwyg/May_25_homepage_copy-03-1.jpg?auto=webp&format=webp&quality=70" alt="" />
</div>
<div>
    <img src="https://www.converse.in/media/wysiwyg/May_22_homepage_copy-01_1.jpg?auto=webp&format=webp&quality=70" alt="" />
   <Link to="/Sale"> <button id="b5">Shop now</button></Link>
    <img src="https://www.converse.in/media/wysiwyg/May_25_homepage_copy-02-1.jpg?auto=webp&format=webp&quality=70" alt="" />
</div>
</div>
<div id="h3">
    <img src="https://www.converse.in/media/wysiwyg/app.jpg?auto=webp&format=webp&quality=70" alt=""  height={"600px"}/>
  <Link to="/Limitededition"><button id="b6">Shop now</button></Link>  
    <img src="https://www.converse.in/media/wysiwyg/acc.jpg?auto=webp&format=webp&quality=70" alt="" height={"600px"}/>
  <Link to="/Women"><button id="b7">Shop now</button></Link>  
</div>
<div >
    <h2 id="p1"> <b>From our Community </b> </h2>
    <div id="h3">
<div>
    <img src="https://www.converse.in/media/wysiwyg/ugc2-04.png?auto=webp&format=webp&quality=70" alt="" />
   
    <img src="https://www.converse.in/media/wysiwyg/ugc2-05.png?auto=webp&format=webp&quality=70" alt="" />

</div>
<div>  
    <img src="https://www.converse.in/media/wysiwyg/ugc2-06.png?auto=webp&format=webp&quality=70" alt="" />
   <Link to="/Women"><button id="b8">Shop now</button></Link>   
    </div>
</div>
</div>
<div id="h2">
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
        <div class="footer-contain">
       <div  class="footer-logo">
           <h2><span>Conversa</span> Shoes</h2> 
       </div> 
       <div class="footer-links">
       <Link to="/men">Men</Link>
  <Link to="/women">Women</Link>
   <a href="#A">About Us</a>
   <a href="#contact">Contact</a>
   <Link to="/">Home</Link>
   </div>
     
       <div class="footer-copy">
           <p>&copy;  All Rights Reserved.</p>
       </div>
 </div>
 
 

        </>
    )
}
export default Home

