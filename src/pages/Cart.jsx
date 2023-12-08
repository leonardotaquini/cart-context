import { useContext } from "react"
import { CartContext } from "../context/Cart/CartContext";
import { Navbar } from "../components/Navbar";
import { CartList } from "../components/CartList";
import { SiMercadopago } from "react-icons/si";

export const Cart = () => {
    const { cart } = useContext(CartContext);
  return (
    <div className="vh-100 d-flex flex-column">
        <Navbar/>
        <h2 className="text-center mt-2">Resume</h2>
        <div className="d-flex flex-column my-5 w-100">
            <div className="col-10 col-sm-6 col-lg-8 m-auto my-3 p-3">
                <CartList products={cart} />
            </div>
            <div className="col-10 col-sm-6 col-lg-8 m-auto ">
                <button className="btn col-12 border flex-column col-lg-4 d-flex shadow ">
                    <SiMercadopago className="text-dark h1 m-auto" />
                </button>
            </div>
        </div>
    </div>
  )
}
