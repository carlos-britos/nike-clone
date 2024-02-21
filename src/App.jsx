import './App.scss'
import { Header } from './components/shared/Header'
import { CarouselInfo } from './components/views/home/CarouselInfo'
import { BannerHome } from './components/views/home/BannerHome'
import { ProductCarousel } from './components/shared/ProductCarousel'
import { BannerHomeCategory } from './components/views/home/BannerHomeCategory'
import { CategoryCarousel } from './components/shared/CategoryCarousel'

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
      <h1 className="title" style={{ margin: '4rem 0' }}>
        Prueba
      </h1>
    </>
  )
}

export default App
