import bannerMobile from "../../assets/images/banner-shoe.webp"
import bannerDesktop from "../../assets/images/banner-shoe-desktop.webp"

const BannerHome = ({ classes }) => {
  return (
    <div className={`banner-home ${classes ? classes : ''}`}>
      <div className="banner-home__img">
        <picture>
          <source
            srcSet={bannerDesktop}
            media="(min-width: 992px)"
            loading="lazy"
          />
          <img src={bannerMobile} alt="botin phantom gx" loading="lazy" />
        </picture>
      </div>

      <div className="banner-home__info">
        <div className="info__name">
          Phantom GX
        </div>
        <div className="info__label">
          EN CUALQUIER MOMENTO. EN CUALQUIER LUGAR. FÚTBOL.
        </div>
        <div className="c-button c-button--contained-primary">
          Comprar
        </div>
      </div>
    </div>
  )
}

export { BannerHome }