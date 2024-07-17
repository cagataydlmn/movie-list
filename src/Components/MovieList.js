import { Link } from "react-router-dom"
import { useSite } from "../context/AppContext"

export default function MovieList() {
    const { products } = useSite()
    return (
        <>
            <div className="movie_top">
                <Link className="movie_top-link" to={`/movies/filtre`}>
                    <button className="movie_top-btn">
                        FİLTRELEME
                    </button>
                </Link>
            </div>
            <ul className="movie_list">
                {products.map((product, index) => (
                    <li key={index} className="movie_list-general">
                        <Link to={`movie/${product.id}`}>
                            <div className="movie_list-image">
                                <img src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} alt={product.title || product.name} />
                            </div>
                            <div className="movie_list-title">
                                <div className="movie_list-descriptions">
                                    <div className="movie_list-language">
                                        {product.original_language}
                                    </div>
                                    <div className="movie_list-date">
                                        {product.first_air_date || product.release_date}
                                    </div>
                                </div>
                                <div className="movie_list-title">
                                    {product.title || product.original_name}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}