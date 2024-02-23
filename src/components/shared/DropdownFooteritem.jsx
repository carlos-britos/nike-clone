import { useState } from 'react';
import { Icon } from '../icons/Icon';
import { More } from '../icons/More';
import { Remove } from '../icons/Remove';

const DropdownFooteritem = ({ title, withIcon, children }) => {
  // Seteamos si esta abierto o cerrado el dropdown
  const [ showSublist, setShowSublist ] = useState(false)
  const handleDropdown = () => {
    setShowSublist(!showSublist)
  }
  // ---

  return (
    <div className={`list-item ${ withIcon ? 'list-item--with-icon' : ''}`}>
      <div className="list-item__top" onClick={ handleDropdown }>
        {title}

        {withIcon && (
          showSublist ? (
            <Icon iconSvg={<Remove />}/>
          ) : (
            <Icon iconSvg={<More />} />
          )
        )}

      </div>

      {withIcon && (
        <div className={`list-item__sublist ${showSublist ? 'show' : ''}`} >
          {children}
        </div>
      )}
    </div>
  )
}

export { DropdownFooteritem }