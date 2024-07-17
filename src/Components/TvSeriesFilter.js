import { Link, useParams } from "react-router-dom";
import { useSite } from "../context/AppContext";
import { useState } from "react";

export default function TvSeriesFilter() {
    const { language } = useParams();
    const { tvProducts, setTvProducts } = useSite();
    const [filteredProducts, setFilteredProducts] = useState([]);

    function Fetch() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=365a153ca89400a4c6bd390fbbe93f59')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const filteredProductsByCat = data.results.filter(movieItem => movieItem.original_language === language);
                    setTvProducts(filteredProductsByCat);
                }
            })
    };

    const tvSeries = [...new Set(tvProducts.map(movieItem => movieItem.original_language))];

    function handleFilterLanguage(language) {
        const filteredProductsByLangeuage = tvProducts.filter(movieItem => movieItem.original_language === language);
        setFilteredProducts(filteredProductsByLangeuage);
    }

    return (
        <>
            <h1>{language}</h1>
            <div className="movies">
                {tvSeries.map((movie) => (
                    <button onClick={() => handleFilterLanguage(movie)}>
                        {movie}
                    </button>
                ))}
                <Link to="/tv-series">
                    <button>Tüm Dizilere Dön</button>
                </Link>
            </div>
            <ul className="movies_filter">
                {filteredProducts.map((movieItem, movieItemIndex) => (
                    <li key={movieItemIndex} className="movies_filter-general">
                        <Link to={`tv-series/${movieItem.id}`}>
                            <div className="movies_filter-top">

                                <div className="movies_filter-image">
                                    <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt={movieItem.title || movieItem.name} />
                                </div>
                                <div className="movies_filter-title">
                                    <div className="movies_filter-title">
                                        {movieItem.title || movieItem.original_name}
                                    </div>
                                    <div className="movies_filter-descriptions">
                                        <div className="movies_filter-date">
                                            {movieItem.first_air_date || movieItem.release_date}
                                        </div>
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
