import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import "./components/styles";
import { Product } from "./components/product";
import { IProduct, IProductResponse } from "./interfaces";
import { ProductContainer } from "./components/styles";


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
 
  const fetchProducts = () => {
    setLoading(true);
    axios
      .get<IProductResponse>("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
    };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      <ProductContainer>  
        {products.map(product => 
          <Product key={product.id} {...product}/>
        )}
      </ProductContainer>
    </div>
  );
}

export default App;