import React, { createContext, useEffect, useState } from "react";
import { api, iProduct } from "../services/api";

export const CartContext = createContext({} as iCartContext);

interface iCartProviderProps {
  children: React.ReactNode;
}
interface iCartContext {
  loading: boolean;
  products: iProduct[];
  setProducts: React.Dispatch<React.SetStateAction<iProduct[]>>;
  filteredProducts: iProduct[];
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  showProducts: (input: string) => void;
  addProduct: (currentProduct: iProduct) => void;
  deleteProduct: (id: number) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartProvider = ({ children }: iCartProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState([] as iProduct[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iProduct[]);
  const [currentSale, setCurrentSale] = useState([] as iProduct[]);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    async function getProducts() {
      const token = localStorage.getItem("@TOKEN");
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        setLoading(true);
        const response = await api.get("/products", headers);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  function showProducts(input: string) {
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

  function addProduct(currentProduct: iProduct) {
    const verify = currentSale.some(
      (product) => product.id === currentProduct.id
    );
    verify || setCurrentSale([...currentSale, currentProduct]);
  }

  function deleteProduct(id: number) {
    const filterList = currentSale.filter(
      (product) => Number(product.id) !== id
    );
    setCurrentSale(filterList);
  }

  return (
    <CartContext.Provider
      value={{
        loading,
        products,
        setProducts,
        filteredProducts,
        currentSale,
        setCurrentSale,
        showProducts,
        addProduct,
        deleteProduct,
        modal,
        setModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
