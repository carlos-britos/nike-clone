const ProductCard = ({ aditionalClasses }) => {
  return (
    <div className={`product-card ${aditionalClasses}`}>
      <div className="product-card__img">
        <img src="/src/assets/images/products/air-force-1.webp" alt="Nike Air Force 1 '07 SE" loading="lazy" />
        {/* TODO: Agregar etiqueta para cuando haya un producto nuevo */}
      </div>
      <div className="product-card__name">
        Nike Air Force 1 07 SE
      </div>
      <div className="product-card__description">
        Zapatillas de Moda para Mujer
      </div>
      <div className="product-card__prices">
        <div className="prices__new-price">
          $ 199.000
        </div>
        <div className="prices__old-price">
          $ 250.000
        </div>
      </div>
      <div className="product-card__discount">
        {/* TODO: agregar logica para que calcule el descuento solo */}
      </div>
    </div>
  )
}

export { ProductCard }