import { useState } from 'react';
import { Icon } from "../icons/Icon"
import { ShoppingBag } from "../icons/ShoppingBag"
import { CloseButton } from '../icons/CloseButton';

const CartInView = () => {
  const [cartState, setCartState] = useState({
    menuOpen: false,
  });

  const openMenu = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('cart-open');

    setCartState({
      menuOpen: true,
    });
  };

  const closeMenu = () => {
    document.documentElement.style.overflow = 'auto';
    document.body.classList.remove('cart-open');
    
    setCartState({
      menuOpen: false,
    });
  };

  return (
    <>
      <div className="c-cart__open" onClick={openMenu}>
        <Icon iconSvg={<ShoppingBag />} />
      </div>

      <div className={`c-cart__overlay ${cartState.menuOpen ? 'show' : ''}`} onClick={closeMenu}></div>
      <div className={`c-cart ${cartState.menuOpen ? 'show' : ''}`}>
        <div className="c-cart__header">

          <button className="cart-header__close" aria-label="Cerrar carrito" onClick={closeMenu}>
            <Icon iconSvg={<CloseButton />} />
          </button>
        </div>

        <div className="c-cart__list">
          {/* <ul className={`menu-list menu-list--step-1 ${cartState.currentStep > 1 ? 'prev' : ''}`}>

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
          </ul> */}
        </div>
      </div>
    </> 
  )
}

export { CartInView }