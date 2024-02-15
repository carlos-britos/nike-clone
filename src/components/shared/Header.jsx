// import { useState, useEffect } from 'react';
// import { MenuMobile } from '../reusable/MenuMobile';
// import { NavDesktop } from '../reusable/NavDesktop';
import { Link } from 'react-router-dom'
import { Icon } from '../icons/Icon';
import { Logo } from '../icons/Logo';
import { MenuBurgerButton } from '../icons/MenuBurgerButton';
import { Search } from '../icons/Search';
import { ShoppingBag } from '../icons/ShoppingBag';


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
      <div className="header__wrapper">
        {/* {!isDesktop && <MenuMobile darkMode={ darkMode } toggleThemeChange={ toggleThemeChange } />} */}

        <div className="c-menu__open">
          <Icon iconSvg={<MenuBurgerButton />} />
        </div>

        <Link to='/' className="header__logo">
          <Icon iconSvg={<Logo />} />
        </Link>

        <div className="header__actions">
          <div className="actions__search">
            <Icon iconSvg={<Search />} />
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