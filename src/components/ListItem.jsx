import React from "react";
import Stars from "./Stars";

function ListItem({ product, onDoubleClick }) {
  return (
    <div className="list-item" onDoubleClick={onDoubleClick}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "350px", height: "250px" }} />
      <h2>Title: {product.title}</h2>
      <p>Price: ${product.price}</p>
      <Stars rating={product.rating} />
    </div>
  );
}

export default ListItem;