import React, { useContext } from "react";
import { CartContext } from "../context/Cart/CartContext";

export const Card = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  const {
    id,
    category,
    description,
    image,
    price,
    title,
    rating: { count },
  } = product;

  const handleAddToCart = (product) => {
    addToCart(product);
  }
  return (
    <>
      <div className="card m-3 p-3 shadow" style={{maxWidth: "24rem", maxHeight:"18rem"}}>
        <div className="row g-0">
          <div className="col-4">
            <img src={image} className="img-fluid rounded-start" alt={title} />
          </div>
          <div className="col-8 d-flex flex-column  h-100">
            <div className="card-body">
              <h5 className="card-title text-truncate">{title}</h5>
              <p className="card-text text-truncate">
                {description}
              </p>
              <div className="card-text d-flex flex-column">
                <small className="text-body-secondary">
                  Stock: {count}
                </small>
                <small className="text-success">
                  Price: ${price}
                </small>
                <small className="text-body-secondary">
                  Category: {category}
                </small>
              </div>
            </div>
            <button className="btn btn-outline-success m-2" onClick={ ()=> handleAddToCart(product)}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
