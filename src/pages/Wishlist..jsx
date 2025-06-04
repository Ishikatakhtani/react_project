import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../wishlistSlice";
import { addtoCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";


const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2 align="center">Your Wishlist</h2>
      <div className="wishlist-container">
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <div key={product.id} className="wishlist-card">
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => navigate(`/prodetail/${product.id}`)}
                />
                <button
                  className="heart-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeFromWishlist(product.id));
                  }}
                >
                  <FaHeart color="red" />
                </button>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      addtoCart({
                        id: product.id,
                        name: product.name,
                        desc: product.description,
                        price: product.price,
                        image: product.image,
                        qnty: 1,
                      })
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="card-body">
                <h5>{product.name}</h5>
                <p>{product.desc}</p>
                <h4>{product.price}</h4>
              </div>
            </div>
          ))
        ) : (
          <h4>No items in Wishlist</h4>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
