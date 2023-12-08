import { useContext } from "react";
import { MdExposureNeg1, MdExposurePlus1 } from "react-icons/md";
import { CartContext } from "../context/Cart/CartContext";
export const CartList = ({ products }) => {
  const {addToCart, removeFromCart} = useContext(CartContext);
  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  return (
    <>
      <table className="table table-hover shadow">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>

        <tbody>
          {
          
          products.length > 0 &&
          products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="d-flex justify-content-center align-items-center flex-column flex-lg-row">
                {product.quantity}
                <button className="btn btn-outline-success mx-2" onClick={ ()=> addToCart(product) }>
                <MdExposurePlus1 />
                </button>
                <button className="btn btn-outline-danger" onClick={ ()=> removeFromCart(product) }>
                <MdExposureNeg1 />
                </button>
              </td>
              <td>${parseFloat(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          )
          )}
        </tbody>

        {/* Última fila para la suma total */}
        <tfoot>
          <tr>
            <td colSpan="4" className="fw-bold">Total</td>
            <td>${parseFloat(total).toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
