import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSite } from "../context/AppContext";

export default function MovieFilter() {
    const { language } = useParams();
    const { products, setProducts } = useSite();
    const [filteredProducts, setFilteredProducts] = useState([]);

    function Fetch() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=365a153ca89400a4c6bd390fbbe93f59')
            .then(response => response.json())
            .then(data => {
                if (data && data.results) {
                    const filteredProductsByCat = data.results.filter(movieItem => movieItem.original_language === language);
                    setProducts(filteredProductsByCat);
                }
            })
    };

    const movies = [...new Set(products.map(movieItem => movieItem.original_language))];

    function handleFilterLanguage(language) {
        const filteredProductsByLangeuage = products.filter(movieItem => movieItem.original_language === language);
        setFilteredProducts(filteredProductsByLangeuage);
    }

    return (
        <>
            <h1 style={{color: "red"}}>Dillere göre filtrele</h1>
            <div className="movies">
                {movies.map((movie) => (
                    <button onClick={() => handleFilterLanguage(movie)}>
                        {movie}
                    </button>
                ))}
                <Link to="/movies"><button>Tüm Filimlere Dön</button></Link>
            </div>

            <ul className="movies_filter">
                {filteredProducts.map((movieItem, movieItemIndex) => (
                    <li key={movieItemIndex} className="movies_filter-general">
                        <Link to={`movie/${movieItem.id}`}>
                            <div className="movies_filter-top">

                                <div className="movies_filter-image">
                                    <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt={movieItem.title || movieItem.name} />
                                </div>
                                <div className="movies_filter-title">
                                    <div className="movies_filter-title">
                                        {movieItem.title || movieItem.original_name}
                                    </div>
                                    
                                </div>
                                </div>
                        </Link>

                    </li>
                ))}
        </ul >
        </>
    );
}
