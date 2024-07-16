import { useParams } from "react-router-dom"
import { useSite } from "../context/AppContext";

export default function MovieDetail() {
    const { id } = useParams()
    const { products, tvProducts } = useSite()
    const productsAll = tvProducts.concat(products);
    const thisProduct = productsAll?.find((product) => product.id === Number(id));
    if (!thisProduct) {
        return null
    }

    return (
        <div className="product-detail">
            <div className="recommed">
                <div className="recommed-image">
                    <img src={`https://image.tmdb.org/t/p/w500${thisProduct.poster_path || thisProduct.id}`} alt={thisProduct.title || thisProduct.name} />
                </div>
                <div>
                    {thisProduct.overview}
                </div>
                <div className="recommed-title">
                    <div className="product-descriptions">
                        <div className="product-language">
                            {thisProduct.original_language}
                        </div>
                        <div className="product-date">
                            {thisProduct.first_air_date || thisProduct.release_date}
                        </div>
                    </div>
                    <div className="product-title">
                        {thisProduct.title || thisProduct.original_name}
                    </div>
                </div>
            </div>
        </div>
    )
}

