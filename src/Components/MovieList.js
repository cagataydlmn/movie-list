import { Link } from "react-router-dom"
import { useSite } from "../context/AppContext"

export default function MovieList(){
    const { products,tvProducts } = useSite()
    const productsAll = products.concat(tvProducts)
    return(
        <>
            {products.map((product, index) => (
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
                      ))}
        </>
    )
}