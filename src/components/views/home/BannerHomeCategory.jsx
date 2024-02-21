const BannerHomeCategory = () => {
  return (
    <div className="banner-home-category">
      <div className="banner-home-category__img">
        <picture>
          <source
            srcSet="/src/assets/images/banner-shoe-desktop.webp"
            media="(min-width: 992px)"
            loading="lazy"
          />
          <img src="/src/assets/images/banner-shoe.webp" alt="botin phantom gx" loading="lazy" />
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