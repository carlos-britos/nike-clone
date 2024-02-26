import { useEffect, useRef } from "react";
import Swiper from "swiper";
import 'swiper/css';
import { ProductCard } from './ProductCard';
import { Icon } from "../icons/Icon";
import { ArrowLeft } from "../icons/ArrowLeft";
import { ArrowRight } from "../icons/ArrowRight";

const ProductCarousel = () => {
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
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },

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

  const handleNext = () => {
    swiperInstanceRef.current.slideNext();
  }

  const handlePrev = () => {
    swiperInstanceRef.current.slidePrev();
  }
  
  return (
    <div className="product-carousel">
      <div className="product-carousel__title">
        Air Force
      </div>
      <div className="product-carousel__controllers">
        <div className="c-button c-button--contained-primary-low c-button--only-icon prev" onClick={handlePrev}>
          <Icon iconSvg={<ArrowLeft />} />
        </div>
        <div className="c-button c-button--contained-primary-low c-button--only-icon next" onClick={handleNext}>
          <Icon iconSvg={<ArrowRight />} />
        </div>
      </div>
      <div className="product-carousel__carousel swiper" ref={swiperContainerRef} >
        <div className="swiper-wrapper">
          <ProductCard aditionalClasses="swiper-slide"/>
          <ProductCard aditionalClasses="swiper-slide"/>
          <ProductCard aditionalClasses="swiper-slide"/>
          <ProductCard aditionalClasses="swiper-slide"/>
          <ProductCard aditionalClasses="swiper-slide"/>
          <ProductCard aditionalClasses="swiper-slide"/>
        </div>
      </div>
    </div>
  )
}

export { ProductCarousel }