import axios from "axios";
import { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addtoCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../wishlistSlice";
import { Link } from "react-router-dom";
const Women=()=>{
  const navigate= useNavigate();
const [data, setMydata]= useState([]);
const dispatch = useDispatch();
const wishlist = useSelector((state) => state.wishlist.items);
  //  const loadData=async()=>{
  //   let api="http://localhost:3000/shooes?gender=Female";
  //   const response = await axios.get(api);
  //   setMydata(response.data)
  //  }
 
//   const loadData = async () => {
//   const api = "https://f2c3-2401-4900-8820-48a4-1006-76b0-207a-9d65.ngrok-free.app/shooes?gender=Female";
//   const response = await axios.get(api);
//   setMydata(response.data);
// };
const loadData = async () => {
    const gender = "Female";
  const baseUrl = import.meta.env.VITE_API_URL;  // <-- use import.meta.env here

  console.log("API URL:", baseUrl);  // to check if env var is loaded

  const api = `${baseUrl}?gender=${encodeURIComponent(gender)}`;
  try {
    const response = await axios.get(api, {
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    });
    console.log("Status:", response.status);
    console.log("Fetched Data:", response.data);

    if (Array.isArray(response.data)) {
      setMydata(response.data);
    } else {
      console.error("Expected array, got:", typeof response.data, response.data);
      setMydata([]);
    }
  } catch (err) {
    console.error("API call failed:", err.message);
    setMydata([]);
  }
};




const user = useSelector(state => state.auth?.user);
useEffect(()=>{
    loadData()
}, []);

 const ans = data.map((key) => {
     const isWishlisted = wishlist.some((item) => item.id === key.id);

    return (
      <>
     
     <Card style={{ width: "20rem", marginTop: "20px" }} key={key.id}>
  <div className="image-container">
    <Card.Img
      variant="top"
      src={key.image}
      style={{ height: "300px" }}
      onClick={() => {
        navigate(`/prodetail/${key.id}`);
      }}
    />

       
<Button
          className="add-to-cart-btn"
          variant="primary"
          onClick={() => {
            if (!user) {
              alert("Please login to add items to cart.");
              navigate("/login");
              return;
            }
            dispatch(
              addtoCart({
                id: key.id,
                name: key.description,
                category: key.category,
                image: key.image,
                price: key.price,
                qnty: 1,
              })
            );
          }}
        >
          <FaCartArrowDown /> Add to Cart
        </Button>

    <p
          className="add-to-btn"
          onClick={() => {
            if (!user) {
              alert("Please login to add items to wishlist.");
              navigate("/login");
              return;
            }
            if (isWishlisted) {
              dispatch(removeFromWishlist(key.id));
            } else {
              dispatch(
                addToWishlist({
                  id: key.id,
                  desc: key.description,
                  price: key.price,
                  image: key.image,
                  gender: key.gender,
                  category: key.category,
                })
              );
            }
          }}
        >
          {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart color="black" />}
        </p>
  </div>

  <Card.Body>
    <Card.Title>{key.name}</Card.Title>
    <Card.Text>
      {key.description} <br />
      {key.category}
      <br />
      {key.discount}
      <h6> Price: {key.price}</h6>
    </Card.Text>
  </Card.Body>
</Card>

      </>
    );
  });

  return (
    <>
      <h2 style={{display:"flex",justifyContent:"center",paddingTop:"3%" ,paddingBottom:"2%"}} >Converse Women's Collection</h2>
      <div id="mwomen">
         <div style={{paddingLeft:"2%" , paddingRight:"3%"}}>
       <h2 >Gender</h2>
  <p style={{fontSize:"18px"}}  onClick={() => navigate('/Men')}> <input type="checkbox"/>  Male</p>
<p style={{fontSize:"18px"}} onClick={() => navigate('/Women')}> <input type="checkbox"/>  Female</p>


<div class="shoe-style-container">
  <div class="title">Shoe Style</div>
  <div class="grid">
    <div class="item" onClick={() => navigate('/HighTop')} >
      <img src="data:image/png;base64,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" alt="High Top" />
      <div >High Top</div>
    </div>
    <div class="item" onClick={() => navigate('/LowTop')}>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQERUTERITFhUUFRgYFxIVGBQfHxcYHRgYGRYYFhUZHyogGBolIBgYIjMhMSo3NzEuGCI1ODMsNysuLisBCgoKBwgHGg8HGisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAQgAvwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwcCAf/EAEcQAAIBAwIEBAMEBgYGCwAAAAECAwAEERIhBRMxQQYiUWEUMnEjQlKBBzNikaGxFSRDcpLRU4KDosHxNERUY3N0s8LS4fD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9xpSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlAqjuvFNurtFCstzKpw0dsuvQfSSQkRxn2ZgaouKcZjvCwe5EFihKllfRJeMDpZYiCGWHPlyu7nYEDdr7h3DPslRQIIAPJb25C4X9qVN89/IRg58zdaCNJ4okiGu5sLqCIfNOzWrrGPxSCKVmVR3bBAG5wASNGDmq6TgNqwIMQ3BBbLaiDsftM6v41k24+3BVFnMutF/6LPLLHGhhHSOWVztJHlU2BLKVb8RAb6q/i/Gre0CmZyC50oiq7u56kJFGC74G5wNhuajcL8RwzQSTPmHkahPHLgGEqNTaiCQV04YMDhlIIqg4ffOEn4jJFmabTDbRNnUAWxFAPwZYqZD2bXnaMGg1XCeLQXSloXzpbSylWVkbrpeNwGRsEHBA2IqdXm3FfDF/BJ8Y1+8jnlq7RxrGUGW1MunKzIpI0xSK3pqUnVW18M8Qe5tIZZAut0GrRnSWGzMmd9JIyPYigtKUpQKUpQKUpQKUpQKUqFxy+FtbTTnpDFJ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" alt="Low Top" />
      <div  >Low Top</div>
    </div>
    <div class="item" onClick={() => navigate('/Platform')}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOESPUUKp0-V9L1eLErhfbdYAgRZcIuknk2A&s" alt="Platform" />
      <div >Platform</div>
    </div> <div class="item" onClick={() => navigate('/SlipOn')}>
      <img src="data:image/png;base64,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" alt="Slip On" />
      <div >Slip On</div>
    </div>
    <div class="item full-width" onClick={() => navigate('/MidTop')}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASVYyztC8Q1CTEHQ_c6AqGd-VeZ1a-_VisQ&s" alt="Mid Top" />
      <div >Mid Top</div>
    </div>
  </div>
</div>

      </div>
      <div id="womens">
        {ans}
        <div class="footer-container">
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
 </div>
      </div>
     
    </>
  );
};
   

export default Women;