import './App.scss'
import { useEffect, useState } from "react";
import { Header } from './components/shared/Header'
import { CarouselInfo } from './components/views/home/CarouselInfo'
import { BannerHome } from './components/views/home/BannerHome'
import { ProductCarousel } from './components/shared/ProductCarousel'
import { DobleBannerHomeCategory } from './components/views/home/DobleBannerHomeCategory'
import { FeaturedCategories } from './components/views/home/FeaturedCategories'
import { CategoryCarousel } from './components/shared/CategoryCarousel';
import { Footer } from './components/shared/Footer'

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
        setIsDesktop(window.innerWidth > 991);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <CarouselInfo />
      <BannerHome />
      <ProductCarousel />
      <DobleBannerHomeCategory />
      <ProductCarousel />
      <FeaturedCategories isDesktop={isDesktop} />
      <CategoryCarousel/>
      <BannerHome classes="mt-3-rem" />
      <Footer />
    </>
  )
}

export default App
