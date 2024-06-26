import image from "../../assets/images/products/air-force-1.webp"

const CategoryCard = ({ aditionalClasses }) => {
  return (
    <div className={`category-card ${aditionalClasses}`}>
      <div className="category-card__img">
        <img src={image} alt="Nike Air Force 1 '07 SE" loading="lazy" />
        {/* TODO: Agregar etiqueta para cuando haya un producto nuevo */}
      </div>
      <div className="category-card__name">
        Nike Air Force 1 07 SE
      </div>
    </div>
  )
}

export { CategoryCard }