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
            <ProductCard modifier="on-cart" />
            <ProductCard modifier="on-cart" />
          </div>

          <div className="body__want-bag">
            <div className="want-bag__img">
              <img src="src/assets/images/nike-bag.png" alt="Bolsa Nike" loading="lazy" />
            </div>
            <div className="want-bag__info">
              <div className="want-bag__text">
                <div className="title">
                  ¡Quiero una bolsa!
                </div>
                <div className="name">
                  Bolsa
                </div>
                <div className="price">
                  Gratis
                </div>
              </div>
              <div className="want-bag__button">
                <div className="c-button c-button--contained-primary">
                  Agregar
                </div>
              </div>

            </div>
          </div>

          <div className="body__postal-code">
            <div className="postal-code__label">
              Introducí tu Código Postal y calculá el costo de envio.
            </div>
            <div className="postal-code__input">
              <input type="text" placeholder='ej: 2000'/>
              <button className='c-button c-button--outlined'>
                Calcular
              </button>
            </div>
          </div>

          <div className="body__summary">
            <div className="summary__total">
              <div className="total__items">
                <div className="item">
                  <span>Subtotal</span>
                  <span>$ 179.999</span>
                </div>
                <div className="item">
                  <span>Envío</span>
                  <span>$ 7.000</span>
                </div>
              </div>
              <div className="total__total">
                <span>Total</span>
                <span>$ 186.999</span>
              </div>
            </div>
            <button className="summary__action">
              Iniciar compra
            </button>
          </div>
        </div>
      </div>
    </> 
  )
}

export { CartInView }