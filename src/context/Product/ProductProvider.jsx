import { useReducer } from "react";
import { ProductContext } from "./ProductContext";
import { productReducer } from "./productReducer";
import { getProducts } from "../../helpers/productAxios";

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, {products: []}); 

    const init = async() => {
        const products = await getProducts();
        disp
        return{
          products
        }
    }


    console.log(state);

    return (
        <ProductContext.Provider value={{
         products: state.products
        }}>
            {children}
        </ProductContext.Provider>
    )
}