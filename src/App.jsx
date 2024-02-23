import './App.scss'
import { Header } from './components/shared/Header'
import { CarouselInfo } from './components/views/home/CarouselInfo'
import { BannerHome } from './components/views/home/BannerHome'
import { ProductCarousel } from './components/shared/ProductCarousel'
import { BannerHomeCategory } from './components/views/home/BannerHomeCategory'
import { CategoryCarousel } from './components/shared/CategoryCarousel'
import { Footer } from './components/shared/Footer'

function App() {
  return (
    <>
      <Header />
      <CarouselInfo />
      <BannerHome />
      <ProductCarousel />
      <BannerHomeCategory />
      <BannerHomeCategory />
      <ProductCarousel />
      <CategoryCarousel />
      <CategoryCarousel />
      <BannerHome />
      <Footer />
    </>
  )
}

export default App
