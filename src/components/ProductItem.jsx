import React from "react";
import "../App.css";

const ProductItem = ({ name, price, description }) => {
	return (
		<div className="product-item">
			<h2>{name}</h2>
			<p className="product-price">${price.toFixed(2)}</p>
			<p className="product-description">{description}</p>
		</div>
	);
};

export default ProductItem;
