import { useState, useEffect } from 'react';

import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
const Search=()=>{
 const [mydata, setMydata]= useState([]);
 const dispatch = useDispatch();
 const [product, setProduct] = useState("");


 const loadData=async()=>{
  let api="http://localhost:3000/shooes";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
 }
 useEffect(()=>{
    loadData();
 }, []);


const handleInput=(e)=>{
      let value= e.target.value;
      setProduct(value);
}







 const ans=mydata.map((key)=>{
     let myval= product.toLocaleLowerCase();
     let mystr= key.name.toLocaleLowerCase();
   let status= mystr.includes(myval);
   
   if (status)
   {


    return(
        <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <Card.Text>
         Description :{key.description}
         Price : {key.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description, category:key.category,  image:key.image,qnty:1,  price:key.price}))}}>Add to Cart</Button>
      </Card.Body>
    </Card>        
        </>
    )
   }  
 })

    return(
        <> 
      <h1> Our Latest Products</h1>
        
        <center>

       
        Enter Product Name : <input type="text" value={product}
        onChange={handleInput} />
       </center>
       <br /> <br /> <br />
      <div id='cardData'>
      {ans}
      </div>     
        </>
    )
}
export default Search;