// import { useState, useEffect } from 'react';
// import { MenuMobile } from '../reusable/MenuMobile';
// import { NavDesktop } from '../reusable/NavDesktop';
import { Link } from 'react-router-dom'
import { Icon } from '../icons/Icon';
import { Logo } from '../icons/Logo';
import { MenuBurgerButton } from '../icons/MenuBurgerButton';
import { Search } from '../icons/Search';
import { ShoppingBag } from '../icons/ShoppingBag';
import { JordanLogo } from '../icons/JordanLogo';


const Header = () => {
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsDesktop(window.innerWidth > 991);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // // --- Dark or Light Mode ---

  // const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" ? true : false);

  // useEffect(() => {
  //   document
  //     .getElementsByTagName("HTML")[0]
  //     .setAttribute("data-theme", localStorage.getItem("theme"));
  // }, [darkMode]);
  
  // const toggleThemeChange = () => {
  //   if (darkMode === false) {
  //     localStorage.setItem("theme", "dark");
  //     setDarkMode(true);
  //   } else {
  //     localStorage.setItem("theme", "light");
  //     setDarkMode(false);
  //   }
  // };

  return (
    <header className="header">
      <div className="header__top-header">
        <div className="top-header__logo">
          <Icon iconSvg={<JordanLogo />} />
        </div>
        <div className="top-header__actions">
          <div className="">Buscar tienda</div>
          <div className="">Ayuda</div>
        </div>
        
      </div>
      <div className="header__wrapper">
        {/* {!isDesktop && <MenuMobile darkMode={ darkMode } toggleThemeChange={ toggleThemeChange } />} */}

        <div className="c-menu__open">
          <Icon iconSvg={<MenuBurgerButton />} />
        </div>

        <Link to='/' className="header__logo">
          <Icon iconSvg={<Logo />} />
        </Link>

        <div className="header__categories">
          <div className="categories__item">Destacados</div>
          <div className="categories__item">Hombre</div>
          <div className="categories__item">Mujer</div>
          <div className="categories__item">Niño/a</div>
          <div className="categories__item">Accesorios</div>
          <div className="categories__item">Sale</div>
        </div>

        <div className="header__actions">
          <div className="actions__search">
            <Icon iconSvg={<Search />} />
            <input type="text" placeholder="Buscar" />
          </div>
          <div className="actions__cart">
            <Icon iconSvg={<ShoppingBag />} />
          </div>
        </div>
        
        {/* {isDesktop && <NavDesktop darkMode={ darkMode } toggleThemeChange={ toggleThemeChange } />} */}
      </div>
    </header>
  )
}

export { Header }