const BannerHome = () => {
  return (
    <div className="banner-home">
      <div className="banner-home__img">
        <picture>
          <source
            srcSet="/src/assets/images/banner-shoe-desktop.webp"
            media="(min-width: 992px)"
            loading="lazy"
          />
          <img src="/src/assets/images/banner-shoe.webp" alt="botin phantom gx" loading="lazy" />
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