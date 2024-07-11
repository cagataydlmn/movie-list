import { createContext, useContext, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export const AppContext = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [tvProducts, setTvProducts] = useState([]);
  const adres = 'https://api.themoviedb.org/3/discover/movie?api_key=365a153ca89400a4c6bd390fbbe93f59';
  const tvadres = 'https://api.themoviedb.org/3/discover/tv?api_key=365a153ca89400a4c6bd390fbbe93f59';
  const [likeItems, setLikeItems] = useState([])
  const [search, setSearch] = useState("");


  const data = {
    products,
    setProducts,
    tvProducts,
    setTvProducts,
    adres,
    tvadres,
    likeItems,
    setLikeItems,
    setSearch,
    search
  };

  useEffect(() => {
    if (likeItems.length >= 0) {
      localStorage.setItem('likeItems', JSON.stringify(likeItems))
    }
  }, [likeItems])
  const { data: productData } = useFetch(adres)
  const { data: productDataTv } = useFetch(tvadres)

  useEffect(() => {
    if (productData) {
      setProducts(productData.results)
    }
    if (productDataTv) {
      setTvProducts(productDataTv.results)
    }
  }, [productData, productDataTv])

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export const useSite = () => useContext(AppContext);

export default Provider;
