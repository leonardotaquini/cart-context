import { useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { productReducer } from "./productReducer";
import { getProducts } from "../../helpers/productAxios";
import { TYPES } from "../types/types";

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, {
        products: [],
        isLoading:true
    }); 

    const init = async() => {
        const products = await getProducts();
        dispatch({
            type: TYPES.SET_PRODUCTS,
            payload: products
        })
    }

    useEffect(() => {
        init();
    }, [])
    

    return (
        <ProductContext.Provider value={{
         products: state.products,
         isLoading: state.isLoading
        }}>
            {children}
        </ProductContext.Provider>
    )
}