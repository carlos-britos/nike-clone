import { CategoryCarousel } from "../../shared/CategoryCarousel"
import { ProductCarousel } from "../../shared/ProductCarousel"
import { BannerHome } from "./BannerHome"
import { CarouselInfo } from "./CarouselInfo"
import { DobleBannerHomeCategory } from "./DobleBannerHomeCategory"
import { FeaturedCategories } from "./FeaturedCategories"

const Home = ({ isDesktop }) => {
  return (
    <>
      <CarouselInfo />
      <BannerHome />
      <ProductCarousel />
      <DobleBannerHomeCategory />
      <ProductCarousel />
      <FeaturedCategories isDesktop={isDesktop} />
      <CategoryCarousel/>
      <BannerHome classes="mt-3-rem-important" />
    </>
  )
}

export { Home }