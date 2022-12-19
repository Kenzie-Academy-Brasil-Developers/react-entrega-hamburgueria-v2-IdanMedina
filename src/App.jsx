import { useEffect, useState } from "react";
import Header from "./Header";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { GlobalStyle } from "./styles/global.ts";
import { api } from "./services/api.ts";
import { Loading } from "./styles/loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  function showProducts(input) {
    const filterList = products.filter((product) => {
      const productName = product.name.toLowerCase();
      const productCategory = product.category.toLowerCase();
      if (
        productName.includes(input.toLowerCase()) ||
        productCategory.includes(input.toLowerCase())
      )
        return product;
    });
    filterList.length
      ? setFilteredProducts(filterList)
      : setFilteredProducts([]);
  }

  function handleClick(id) {
    const handled = products.find((product) => product.id === Number(id));
    const verify = currentSale.some((product) => product.id === Number(id));
    verify || setCurrentSale([...currentSale, handled]);
  }

  function handleClickDelete(id) {
    const filterList = currentSale.filter(
      (product) => product.id !== Number(id)
    );
    setCurrentSale(filterList);
  }

  return (
    <div>
      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          <GlobalStyle />

          <Header showProducts={showProducts} />

          <ProductsList
            products={products}
            handleClick={handleClick}
            filteredProducts={filteredProducts}
          />
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleClickDelete={handleClickDelete}
          />
        </>
      )}
    </div>
  );
}

export default App;
