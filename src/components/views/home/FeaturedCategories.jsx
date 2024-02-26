import { CategoryCard } from "../../shared/CategoryCard"

const FeaturedCategories = () => {
  return (
    <div className="featured-categories">

      <CategoryCard aditionalClasses=""/>
      
      <div className="featured-categories__doble">
        <CategoryCard aditionalClasses=""/>
        <CategoryCard aditionalClasses=""/>
      </div>
    </div>
  )
}

export { FeaturedCategories }