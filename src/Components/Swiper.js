import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSite } from "../context/AppContext";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const { tvProducts, products } = useSite();
  const productsAll = tvProducts.concat(products);


  return (
    <div>
      <div className="home-text">Bugün Popüler</div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Scrollbar, A11y]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        className="swiper-container"
      >
        {productsAll.map((product, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Link to={`movie/${product.id}`}>
              <div className="recommed-image">
                <img
                  src={`https://image.tmdb.org/t/p/w500${product.backdrop_path}`}
                  alt={product.title || product.name}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
