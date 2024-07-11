import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSite } from "../context/AppContext";

export default function AnaSayfa() {
    const { tvProducts, products, likeItems, setLikeItems, search } = useSite();
    const [searchProduct, setSearchProduct] = useState([]);
    const productsAll = tvProducts.concat(products);
    useEffect(() => {
        if (search !== "") {
            const filteredProducts = productsAll?.filter(item =>
                (item?.title && item.title.toLowerCase().includes(search.toLowerCase())) ||
                (item?.name && item.name.toLowerCase().includes(search.toLowerCase()))
            );
            setSearchProduct(filteredProducts);
        } else {
            setSearchProduct([]);
        }
    }, [search, products, tvProducts]);

    const favori = (product) => {
        const isLiked = likeItems.find(item => item.id === product.id);
        if (!isLiked) {
            const updatedLikeItems = [...likeItems, product];
            setLikeItems(updatedLikeItems);
            localStorage.setItem("likeItems", JSON.stringify(updatedLikeItems));
        }
    };

    return (
        <>
            <div className="home-text">
                Senin İçin Seçtiklerimiz
            </div>
            <ul className="recommed-general">
                {search !== ""
                    ? searchProduct.map((product, index) => (
                        <li key={index} className="recommed">
                            <Link to={`movie/${product.id}`}>
                                <div className="recommed-image">
                                    <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title || product.name} />
                                </div>
                                <div className="recommed-title">
                                    <div className="product-descriptions">
                                        <div className="product-language">
                                            {product.original_language}
                                        </div>
                                        <div className="product-date">
                                            {product.first_air_date || product.release_date}
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        {product.title || product.original_name}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                    : productsAll.map((product, index) => (
                        <li key={index} className="recommed">
                            <Link to={`movie/${product.id}`}>
                                <div className="recommed-image">
                                    <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title || product.name} />
                                </div>
                                <div className="recommed-title">
                                    <div className="product-descriptions">
                                        <div className="product-language">
                                            {product.original_language}
                                        </div>
                                        <div className="product-date">
                                            {product.first_air_date || product.release_date}
                                        </div>
                                    </div>
                                    <div className="product-title">
                                        {product.title || product.original_name}
                                    </div>
                                </div>
                            </Link>
                            <button className="position" onClick={() => favori(product)}>Favoriye Ekle</button>
                        </li>
                    ))}
            </ul>
        </>
    );
}
