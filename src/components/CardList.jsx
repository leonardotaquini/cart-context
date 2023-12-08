import { useContext } from "react";
import { ProductContext } from "../context/Product/ProductContext";
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Spinner } from "./Spinner";
export const CardList = () => {


    const { products, isLoading } = useContext(ProductContext);
  return (
    <div className="vh-100 d-flex flex-column">
    <Navbar/>
    <div className="d-flex flex-wrap justify-content-around h-100">
        {
          isLoading
          ? <Spinner/>
          :products.map(product => <Card product={product} key={product.id}/>)
        }
    </div>
    </div>
  )
}
