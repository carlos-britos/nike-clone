import { DeleteIcon } from "../icons/DeleteIcon";
import { Icon } from "../icons/Icon";
import { QuantityInput } from "../reusable/QuantityInput";
import image from "../../assets/images/products/air-force-1.webp"

const ProductCard = ({ aditionalClasses, modifier }) => {
  const onCart = !!modifier;

  aditionalClasses = aditionalClasses ? aditionalClasses : '';
  modifier = modifier ? `product-card--${modifier}` : '';

  

  return (
    <div className={`product-card ${aditionalClasses} ${modifier}`}>
      <div className="product-card__img">
        <img src={image} alt="Nike Air Force 1 '07 SE" loading="lazy" />
        {/* TODO: Agregar etiqueta para cuando haya un producto nuevo */}
      </div>

      {onCart && ( 
        <div className="product-card__delete">
          <Icon iconSvg={<DeleteIcon />} />
        </div>
      )}

      <div className="product-card__info">
        <div className="product-card__name">
          Nike Air Force 1 07 SE
        </div>
        <div className="product-card__description">
          Zapatillas de Moda para Mujer
        </div>

        {onCart && ( 
          <div className="product-card__variants">
            <div>
              talle: 12.5
            </div>
            <div>
              color: Blanco
            </div>
          </div>
        )}

        <div className="product-card__bottom">
          {onCart && ( 
            <div className="product-card__quantity">
              <QuantityInput />
            </div>
          )}
          
          <div className="product-card__prices">
            <div className="prices__new-price">
              $ 199.000
            </div>
            <div className="prices__old-price">
              $ 250.000
            </div>
          </div>
          {/* <div className="product-card__discount"> */}
            {/* TODO: agregar logica para que calcule el descuento solo */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export { ProductCard }