import { useState, useEffect } from 'react';
import { Icon } from '../icons/Icon';
import { Logo } from '../icons/Logo';
import { MenuBurgerButton } from '../icons/MenuBurgerButton';
import { ArrowLeft } from '../icons/ArrowLeft';
import { CloseButton } from '../icons/CloseButton';
import { Link } from 'react-router-dom'
import { ArrowRight } from '../icons/ArrowRight';
import { JordanLogo } from '../icons/JordanLogo'
import categories from '../dataBase/categories';
// import { DarkMode } from '../icons/DarkMode';
// import { LightMode } from '../icons/LightMode';

const MenuMobile = () => {
  
  const [menuState, setMenuState] = useState({
    currentStep: 1,
    categoryToShow: null,
    backButtonVisible: false,
    menuOpen: false,
  });

  // Se guarda la ultima categoria usada en el step 2
  const [step2Category, setStep2Category] = useState(null)

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 992) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleWindowResize);

    const menu = document.querySelector('.c-menu')

    menu.addEventListener('click', event => {
      if (event.target.classList.contains('category-link')) {
        closeMenu();
      } else if (event.target.classList.contains('list-item--with-sublist')) {
        showSublist(event.target);
      }
    })

    if (menuState.currentStep === 1) {
      setMenuState(prevState => ({
        ...prevState,
        backButtonVisible: false,
      }));
    }
    else {
      setMenuState(prevState => ({
        ...prevState,
        backButtonVisible: true,
      }));
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [menuState.currentStep]);

  const openMenu = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('menu-open');

    setMenuState((prevState) => ({
      ...prevState,
      menuOpen: true,
    }));
  };

  const closeMenu = () => {
    document.documentElement.style.overflow = 'auto';
    document.body.classList.remove('menu-open');
    
    resetMenu();
  };

  const showSublist = (button) => {
    setMenuState((prevState) => ({
      ...prevState,
      categoryToShow: button.dataset.category,
    }));
    showNextStep();
  };
  
  const showNextStep = () => {
    setMenuState((prevState) => ({
      ...prevState,
      currentStep: menuState.currentStep + 1,
    }));
  };
  
  const showPrevStep = () => {
    if ( menuState.currentStep === 3 ) {
      setMenuState((prevState) => ({
        ...prevState,
        currentStep: menuState.currentStep - 1,
        categoryToShow: step2Category,
      }));
    } else {
      setMenuState((prevState) => ({
        ...prevState,
        currentStep: menuState.currentStep - 1,
      }));
    }
  };
  
  const resetMenu = () => {
    setMenuState({
      currentStep: 1,
      categoryToShow: null,
      backButtonVisible: false,
      menuOpen: false,
    });
  };

  return (
    <>
      <div className="c-menu__open" onClick={openMenu}>
        <Icon iconSvg={<MenuBurgerButton />} />
      </div>

      <div className={`c-menu__overlay ${menuState.menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <div className={`c-menu ${menuState.menuOpen ? 'show' : ''}`}>
        <div className="c-menu__header">
          <button className={`menu-header__back ${menuState.backButtonVisible ? 'show' : ''}`} onClick={showPrevStep}>
            <Icon iconSvg={<ArrowLeft />} />
          </button>

          <Link to='/portfolio/' className="header__logo">
            <Icon iconSvg={<Logo />} />
          </Link>

          <button className="menu-header__close" aria-label="Cerrar menú" onClick={closeMenu}>
            <Icon iconSvg={<CloseButton />} />
          </button>
        </div>

        <div className="c-menu__list">
          <ul className={`menu-list menu-list--step-1 ${menuState.currentStep > 1 ? 'prev' : ''}`}>

            {categories.level1.map((category, index) => (
              <div className="list-item list-item--with-sublist" data-category={ category.id } key={index}>
              
                { category.name }

                <div className="sublist-toggler">
                  <Icon iconSvg={<ArrowRight/>} />
                </div>
              </div>  
            ))}

            <Link className="list-item list-item--with-icon" to="/portfolio/">
              <Icon iconSvg={<JordanLogo />} />
              Jordan
            </Link>

            {/* <Link className="list-item list-item--with-icon" to="/portfolio/" onClick={() => toggleThemeChange()}>
              {darkMode ? <Icon iconSvg={<LightMode />} /> : <Icon iconSvg={<DarkMode />} />}
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Link> */}
            
            {/* <Link className="list-item" to="/contacto">
              Contacto
            </Link> */}
          </ul>

          <div className={`menu-list menu-list--step-2 ${menuState.currentStep < 2 ? 'next' : (menuState.currentStep > 2 ? 'prev' : '')}`}>

            {categories.level2.map((category, index) => (

              <ul className={`menu-list__category ${menuState.categoryToShow === category.id ? 'show' : ''}`} data-category-list={ category.id } key={index}>

                <div className="menu-list__title">
                  {category.name}
                </div>

                {category.items.map((item, index) => (
                  <div className="list-item list-item--with-sublist" data-category={ item.id } onClick={() => setStep2Category(category.id)} key={index}>
                  
                    { item.name }

                    <div className="sublist-toggler">
                      <Icon iconSvg={<ArrowRight/>} />
                    </div>
                  </div>
                ))}
              </ul>
            ))}
          </div>

          <div className={`menu-list menu-list--step-3 ${menuState.currentStep < 3 ? 'next' : (menuState.currentStep > 3 ? 'prev' : '')}`}>

            {categories.level3.map((category, index) => (

              <ul className={`menu-list__category ${menuState.categoryToShow === category.id ? 'show' : ''}`} data-category-list={ category.id } key={index}>

                <div className="menu-list__title">
                  {category.name}
                </div>

                {category.items.map((item, index) => (
                  <a className="list-item" href="/empresa" key={index}>
                    {/* TODO: Cambiar el href */}
                    { item }
                  </a>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export { MenuMobile }