import { useEffect } from "react";
import Swiper from "swiper";
import 'swiper/css';

const CarouselInfo = () => {
  useEffect(() => {
    const swiperOptions = {
      slidesPerView: 1,
      autoplay: {
        delay: 500,
        disableOnInteraction: true,
      },
      loop: true,
    };

    const serviceSlider = new Swiper(".first-carousel", swiperOptions);

    return () => {
      serviceSlider.destroy();
    };
  }, [])

  return (
    <div className="swiper first-carousel">
      <div className="swiper-wrapper first-carousel__wrapper">
        <div className="swiper-slide first-carousel__slide">
          Hasta 6 sin interés con bancos seleccionados
          <br />
          Ver promociones bancarias
        </div>
        <div className="swiper-slide first-carousel__slide">
          Envio gratis a partir de $185.000
        </div>
        <div className="swiper-slide first-carousel__slide">
          ¡Llega hoy! Comprando antes de las 11hs
          <br />
          Exclusivo CABA
        </div>
      </div>
    </div>
  )
}

export { CarouselInfo }

