import { useReducer } from "react"
import { CartContext } from "./CartContext"
import { cartReducer } from "./cartReducer"
import { TYPES } from "../types/types"

export const CartProvider = ({ children }) => {

  const init = () => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    return {
      cart: cart ? cart : [],
    }
  }

  const updateLocalStorage = () => {
    const cart = JSON.stringify([...state.cart])
    localStorage.setItem('cart', cart);
  }

  const [state, dispatch] = useReducer(cartReducer, {}, init);

  const addToCart = (payload) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload
    });
    updateLocalStorage();
  }

  const emptyCart = () => {
    dispatch({
      type: TYPES.EMPTY_CART
    });
  }

  const removeFromCart = (payload) => {
    dispatch({
      type: TYPES.REMOVE_FROM_CART,
      payload
    });
    updateLocalStorage();
  }

  

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      removeFromCart,
      emptyCart
  }}>
      {children}
    </CartContext.Provider>
  )
}
