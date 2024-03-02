import { useState } from 'react';
import { Icon } from "../icons/Icon"
import { ShoppingBag } from "../icons/ShoppingBag"
import { CloseButton } from '../icons/CloseButton';
import { ProductCard } from '../shared/ProductCard'

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
          <div className="cart-header__title">
            Mi compra
          </div>
          <button className="cart-header__close" aria-label="Cerrar carrito" onClick={closeMenu}>
            <Icon iconSvg={<CloseButton />} />
          </button>
        </div>

        <div className="c-cart__body">
          <div className="body__products">
            <ProductCard modifier="on-cart" />
            <ProductCard modifier="on-cart" />
            <ProductCard modifier="on-cart" />

          </div>
        </div>
      </div>
    </> 
  )
}

export { CartInView }