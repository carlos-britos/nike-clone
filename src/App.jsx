import './App.scss'
import { useEffect, useState } from "react";
import { Header } from './components/shared/Header'
import { Footer } from './components/shared/Footer'
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/views/home/Home';

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
      <Header isDesktop={isDesktop} />

      <Routes>
        <Route path='/nike-clone/' element={<Home isDesktop={isDesktop} />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
