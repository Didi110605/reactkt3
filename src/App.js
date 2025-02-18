import React, { useEffect, useState } from "react";
import Header from "./components/Header"; // Импортируем Header
import Footer from "./components/Footer"; // Импортируем Footer
import ListItem from "./components/ListItem";
import "./App.css";

function App(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  function handleRemove(id){
      setProducts(products.filter((product) => product.id !== id));
  };

  function handleScrollToFooter(){
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header onScrollToFooter={handleScrollToFooter} />
      <div className="grid">
        {products.map((product) => (
          <ListItem key={product.id} product={product} onDoubleClick={() => handleRemove(product.id)} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
