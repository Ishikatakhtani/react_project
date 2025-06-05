import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice";
import { addToWishlist, removeFromWishlist } from "./wishlistSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Wishlist from "./Wishlist.";

const Product = () => {
  const [prodata, setProData] = useState([]);
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loadData = async () => {
  //   let api = "http://localhost:3000/shooes";
  //   const response = await axios.get(api);
  //   setProData(response.data);
  // };
  const loadData = async () => {
  const api = "https://bbf4-2401-4900-8820-48a4-1006-76b0-207a-9d65.ngrok-free.app/shooes?gender=Female";

  try {
    const response = await axios.get(api, {
      headers: {
        "ngrok-skip-browser-warning": "true"
      }
    });
    console.log("Status:", response.status);
    console.log("Fetched Data:", response.data);

    if (Array.isArray(response.data)) {
      setProData(response.data);
    } else {
      console.error("Expected array, got:", typeof response.data, response.data);
      setProData(response.data);
    }
  } catch (err) {
    console.error("API call failed:", err.message);
    setProData(response.data);
  }
};


const user = useSelector(state => state.auth?.user);
  useEffect(() => {
    loadData();
  }, []);

  const ans = prodata.map((product) => {
    const isWishlisted = Wishlist.some((item) => item.id === product.id);

    return (
      <Card style={{ width: "16rem", marginTop: "20px" }} key={product.id}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "300px" }}
          onClick={() => {
            navigate(`/prodetail/${product.id}`);
          }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
            <h4> Price: {product.price}</h4>
          </Card.Text>
          <Button
            variant="outline-none"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "24px",
            }}
            onClick={() => {
              if (isWishlisted) {
                dispatch(removeFromWishlist(product.id));
              } else {
                dispatch(
                  addToWishlist({
                    id: product.id,
                    name: product.name,
                    desc: product.description,
                    price: product.price,
                    image: product.image,
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
                  id: product.id,
                  name: product.name,
                  desc: product.description,
                  category: product.category,
                  price: product.price,
                  image: product.image,
                  qnty: 1,
                })
              );
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h2 align="center">Sneakers</h2>
      <div id="cardData">{ans}</div>
    </>
  );
};

export default Product;