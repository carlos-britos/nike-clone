import { useEffect, useRef } from "react";
import Swiper from "swiper";
import 'swiper/css';
import { CategoryCard } from './CategoryCard';

const CategoryCarousel = () => {
  const swiperContainerRef = useRef(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    const swiperOptions = {
      slidesPerView: 1.2,
      loop: true,
      spaceBetween: 16,
      breakpoints: {
        576: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      }
    };

    if (!swiperInstanceRef.current) {
      swiperInstanceRef.current = new Swiper(swiperContainerRef.current, swiperOptions);
    }

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy();
        swiperInstanceRef.current = null;
      }
    };
  }, [])
  
  return (
    <div className="product-carousel">
      <div className="product-carousel__title">
        Deportes
      </div>
      <div className="product-carousel__carousel swiper" ref={swiperContainerRef} >
        <div className="swiper-wrapper">

          <CategoryCard aditionalClasses="swiper-slide"/>
          <CategoryCard aditionalClasses="swiper-slide"/>
          <CategoryCard aditionalClasses="swiper-slide"/>
          <CategoryCard aditionalClasses="swiper-slide"/>
          <CategoryCard aditionalClasses="swiper-slide"/>
          <CategoryCard aditionalClasses="swiper-slide"/>
        </div>
      </div>
    </div>
  )
}

export { CategoryCarousel }