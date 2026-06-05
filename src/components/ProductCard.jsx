import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className="product-card" key={product.id}>
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      ></img>
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add to cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
