import { Icon } from '../icons/Icon';
import { Twitter } from '../icons/Twitter';
import { Facebook } from '../icons/Facebook';
import { YouTube } from '../icons/YouTube';
import { Instagram } from '../icons/Instagram';
import { DropdownFooteritem } from '../shared/DropdownFooteritem';
import sid from '../../assets/images/sid.webp'
import dataFiscal from '../../assets/images/data-fiscal.webp'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__list">
        <DropdownFooteritem title="Ayuda" withIcon={true} >
          <div className="sublist__item">
            Envíos y entregas
          </div>
          <div className="sublist__item">
            Devoluciones
          </div>
          <div className="sublist__item">
            Cambios
          </div>
          <div className="sublist__item">
            Autogestionar mi devolución
          </div>
          <div className="sublist__item">
            Opciones de pago
          </div>
          <div className="sublist__item">
            Contactate
          </div>
          <div className="sublist__item">
            Defensa al consumidor
          </div>
          <div className="sublist__item">
            Contactate
          </div>
          <div className="sublist__item">
            Botón de Arrepentimiento
          </div>
        </DropdownFooteritem>

        <DropdownFooteritem title="Buscar tienda" withIcon={false} />

        <DropdownFooteritem title="Acerca de nike" withIcon={true} >
          <div className="sublist__item">
            Noticias
          </div>
          <div className="sublist__item">
            Inversionistas
          </div>
          <div className="sublist__item">
            Sustentabilidad
          </div>
        </DropdownFooteritem>

        <DropdownFooteritem title="Novedades nike" withIcon={true} >
          <div className="sublist__item">
            Encontrá tu calzado
          </div>
          <div className="sublist__item">
            ¿Como elegir tu top?
          </div>
          <div className="sublist__item">
            Tips saludables
          </div>
          <div className="sublist__item">
            Promociones
          </div>
        </DropdownFooteritem>
      </div>

      <div className="footer__img">
        <img src={sid} className='sid' alt="Sistema de identidad digital" loading="lazy" />
        <img src={dataFiscal} className='data-fiscal' alt="Data fiscal" loading="lazy" />
      </div>
      <div className="footer__social-networks">
        <div className="item">
          <Icon iconSvg={<Twitter />} />
        </div>
        <div className="item">
          <Icon iconSvg={<Facebook />} />
        </div>
        <div className="item">
          <Icon iconSvg={<YouTube />} />
        </div>
        <div className="item">
          <Icon iconSvg={<Instagram />} />
        </div>
      </div>
    </footer>
  )
}

export { Footer }