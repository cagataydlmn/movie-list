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
            <div className="detail">
                <div className="detail-image">
                    <img src={`https://image.tmdb.org/t/p/w500${thisProduct.poster_path || thisProduct.id}`} alt={thisProduct.title || thisProduct.name} />
                </div>
                <div className="detail-bottom">
                    <div className="detail-title">
                        <div className="detail-title-name">
                            {thisProduct.title || thisProduct.original_name}0
                        </div>
                        <div className="detail-general">
                            <div className="detail-descriptions">
                                (
                                <div className="recdetailommed-language">
                                    {thisProduct.original_language}
                                </div>
                                <div className="detail-date">
                                    {thisProduct.first_air_date || thisProduct.release_date}
                                </div>)
                            </div>
                        </div>
                    </div>
                    <div>
                        {thisProduct.overview}
                    </div>
                </div>
            </div>
        </div>
    )
}

