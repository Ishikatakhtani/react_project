import axios from "axios";
import { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { MdOutlineHorizontalRule } from "react-icons/md";
const Women=()=>{
const [data, setMydata]= useState([]);
const dispatch = useDispatch();
   const loadData=async()=>{
    let api="http://localhost:3000/shooes";
    const response = await axios.get(api);
    setMydata(response.data)
   }

useEffect(()=>{
    loadData()
}, []);

 const ans = data.map((key) => {
    // const isWishlisted = wishlist.some((item) => item.id === key.id);

    return (
      <>
     
      <Card style={{ width: "20rem", marginTop: "20px"}} key={key.id}>
        <div className="image-container">
        <Card.Img
          variant="top"
          src={key.image}
          style={{ height: "300px" }}
          onClick={() => {
            navigate(`/prodetail/${key.id}`);
          }}
          
        />
         {/* <button >
      
       Add to Cart

    </button> */}
     <Button className="add-to-cart-btn"  variant="primary"  onClick={()=>{dispatch(addToCart({id:key.id,  name:key.description, category:key.category,  image:key.image,  price:key.price,qnty:1}))}}> <FaCartArrowDown />  Add to Cart</Button>
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
          {/* <Button
            variant="outline-none"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "24px",
            }}
            onClick={() => {
              if (isWishlisted) {
                dispatch(removeFromWishlist(key.id));
              } else {
                dispatch(
                  addToWishlist({
                    id: key.id,
                    name: key.name,
                    desc: key.description,
                    price: key.price,
                    image: key.image,
                  })
                );
              }
            }}
          >
            {isWishlisted ? (
              <FaHeart color="red" />
            ) : (
              <FaRegHeart color="black" />
            )}
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addtoCart({
                  id: key.id,
                  name: key.name,
                  desc: key.description,
                  category: key.category,
                  price: key.price,
                  image: key.image,
                  qnty: 1,
                })
              );
            }}
          >
            Add to Cart
          </Button> */}
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
  <p style={{fontSize:"18px"}}> <input type="checkbox"/>  Male</p>
<p style={{fontSize:"18px"}}> <input type="checkbox"/>  Female</p>
<table  >
  <tr >
  <td> Low Top</td> 
   <td>High Top</td>
  </tr>
  <tr>
    <td>Mid Top</td>
     <td>Platform</td>
  </tr>
  <tr>
     <td>Slip on</td>
      <td>Boot</td>
  </tr>
</table>
      </div>
      <div id="womens">
        {ans}
      </div>
     
      </div>
    </>
  );
};
   

export default Women;