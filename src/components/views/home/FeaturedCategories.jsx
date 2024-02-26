import { CategoryCard } from "../../shared/CategoryCard"

const FeaturedCategories = () => {
  return (
    <div className="featured-categories">

      <CategoryCard aditionalClasses="featured-categories__simple"/>
      
      <div className="featured-categories__doble">
        <CategoryCard aditionalClasses=""/>
        <CategoryCard aditionalClasses=""/>
      </div>
    </div>
  )
}

export { FeaturedCategories }