
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { qntyInc, qntyDec, proDelete } from "../cartSlice";
import { PiCurrencyInrBold } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const MyCart = () => {
  const MyCart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 let totAmount = 0;

  const ans = MyCart.map((key) => {
     totAmount += (Number(key.price) || 0) * (Number(key.qnty) || 0 );
  const price = Number(key.price);
  const qnty = Number(key.qnty);
  const total = !isNaN(price) && !isNaN(qnty) ? price * qnty : 0;

     return (
      <>
        <tr>
          <td>
            <img src={key.image} width="100" height="100" />
          </td>
          <td> {key.name} </td>
          <td> {key.category} </td>
          <td> {key.price} </td>
          <td>
            <FaMinusCircle
              onClick={() => {
                dispatch(qntyDec({ id: key.id }));
              }}
            />
            {key.qnty}
            <FaPlusCircle
              onClick={() => {
                dispatch(qntyInc({ id: key.id }));
              }}
            />
          </td>
         <td>{total}</td>

          <td style={{ color: "red", fontSize: "25px" }}>
            <MdDelete
              onClick={() => {
                dispatch(proDelete(key.id));
              }}
            />
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1 align="center"> My Cart</h1>

      <hr />

      <Table bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity </th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
      <h5 align="right">
        Total:
        <PiCurrencyInrBold />
        {totAmount}
      </h5>
      <h1 align="right">
        <Button
          variant="warning"
          onClick={() => {
            navigate("/checkout");
          }}
        >
          Checkout
        </Button>
      </h1>
    </>
  );
};
export default MyCart;
