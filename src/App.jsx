import './App.scss'
import { Header } from './components/shared/Header'
import { CarouselInfo } from './components/shared/CarouselInfo'
import { BannerHome } from './components/shared/BannerHome'

function App() {
  return (
    <>
      <Header />
      <CarouselInfo />
      <BannerHome />
      <h1 className="title">
        Prueba
      </h1>
    </>
  )
}

export default App
