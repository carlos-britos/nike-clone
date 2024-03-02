import { useEffect, useState, useRef } from 'react';
import { Icon } from "../icons/Icon"
import { More } from "../icons/More"
import { Remove } from "../icons/Remove"

const QuantityInput = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(1)

  useEffect(() => {
    setNumberOnInput(inputValue)
  },[inputValue])

  const handleRemoveToInput = () => {
    setInputValue( inputValue - 1 )
  }

  const handleAddToInput = () => {
    setInputValue( inputValue + 1 )
  }

  const handleNumber = (value) => {
    setInputValue(parseInt(value))
  }

  const setNumberOnInput = (value) => {
    inputRef.current.value = value
  }
  
  return (
    <div className="quantity-input">
      <div className="quantity-input__button" onClick={handleRemoveToInput} >
        <Icon iconSvg={<Remove />} />
      </div>

      <div className="quantity-input__input">
        <input type="number" ref={inputRef} onChange={(e) => handleNumber(e.target.value)} />
      </div>

      <div className="quantity-input__button" onClick={handleAddToInput} >
        <Icon iconSvg={<More />} />
      </div>
    </div>
  )
}

export { QuantityInput }