import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import data from "../../data";
import "./styles.css";

export default function Home() {
  const {
    productsCart = [],
    addProducToCart,
    removeProductToCart,
    clearCart,
  } = useContext(CartContext);

  const [products] = useState(data);

  return (
    <div>
      <h1>Listas de Alimentos</h1>
      <Link to="/cart">Ver carrinho</Link>
      <p>{JSON.stringify(productsCart)}</p>
      {products.map((product) => (
        <div className="cart" key={product.id}>
          <div className="container">
            <h2>{product.name}</h2>
            <h4>{product.genus}</h4>
            <h4>{product.family}</h4>
            <h4>{product.order}</h4>
            <h4>{product.description}</h4>
            <h3>
              {productsCart.find((item) => item.id === product.id)?.qtd
                ? productsCart.find((item) => item.id === product.id)?.qtd
                : 0}
            </h3>
            <button onClick={() => addProducToCart(product.id)}>Adicionar ao Carrinho</button>
          </div>
          <img src={product.image} />
        </div>
      ))}
    </div>
  );
}
