
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, proDelete } from "../cartSlice";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const MyCart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cleanPrice = (price) => {
    if (typeof price !== "string") return Number(price) || 0;
    return Number(price.replace(/[^0-9.]/g, "")) || 0;
  };

  const totAmount = MyCart.reduce((acc, item) => {
    const price = cleanPrice(item.price);
    const qnty = Number(item.qnty) || 0;
    return acc + price * qnty;
  }, 0);

  const ans = MyCart.map((key) => {
    const price = cleanPrice(key.price);
    const qnty = Number(key.qnty) || 0;
    const total = price * qnty;

    return (
      <tr key={key.id}>
        <td>
          <img src={key.image} width="100" height="100" alt={key.name} />
        </td>
        <td>{key.name}</td>
        <td>{key.category}</td>
        <td>
          <PiCurrencyInrBold /> {price}
        </td>
        <td>
          <FaMinusCircle
            onClick={() => dispatch(qntyDec({ id: key.id }))}
            style={{ cursor: "pointer", marginRight: "8px" }}
          />
          {qnty}
          <FaPlusCircle
            onClick={() => dispatch(qntyInc({ id: key.id }))}
            style={{ cursor: "pointer", marginLeft: "8px" }}
          />
        </td>
        <td>
          <PiCurrencyInrBold /> {total}
        </td>
        <td style={{ color: "red", fontSize: "25px" }}>
          <MdDelete
            onClick={() => dispatch(proDelete(key.id))}
            style={{ cursor: "pointer" }}
          />
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1 align="center">My Cart</h1>
      <hr />
      <Table bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
      <h5 align="right" style={{ marginRight: "20px" }}>
        Total: <PiCurrencyInrBold /> {totAmount}
      </h5>
      <h1 align="right" style={{ marginRight: "20px" }}>
        <Button variant="warning" onClick={() => navigate("/checkout")}>
          Checkout
        </Button>
      </h1>
    </>
  );
};

export default MyCart;
