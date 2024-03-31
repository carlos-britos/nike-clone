import bannerMobile from "../../assets/images/banner-shoe.webp"
import bannerDesktop from "../../assets/images/banner-shoe-desktop.webp"

const BannerHomeCategory = () => {
  return (
    <div className="banner-home-category">
      <div className="banner-home-category__img">
        <picture>
          <source
            srcSet={bannerDesktop}
            media="(min-width: 992px)"
            loading="lazy"
          />
          <img src={bannerMobile} alt="botin phantom gx" loading="lazy" />
        </picture>
      </div>

      <div className="banner-home-category__info">
        <div className="text">
          Vuelta al cole
        </div>
      </div>
    </div>
  )
}

export { BannerHomeCategory }