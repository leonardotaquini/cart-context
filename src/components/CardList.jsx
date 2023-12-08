import { useContext } from "react";
import { ProductContext } from "../context/Product/ProductContext";
export const CardList = () => {


    const { products } = useContext(ProductContext);
    console.log(products);
  return (
    <div>
        Products
    </div>
  )
}
