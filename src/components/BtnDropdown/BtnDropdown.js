import React from 'react'
import { ReactComponent as ArrowDown } from '../../assets/vectors/arrow-down.svg';
import './BtnDropdown.scss';
import { useState } from 'react'

export const BtnDropdown = ( { onClick } ) => {
    const [ toogleButton, setToogleButton] = useState(false);
    const switchToogleBtn = () => {
        toogleButton ? setToogleButton(false) : setToogleButton(true)
    }

    const btnFunctions = () => {
        onClick();
        switchToogleBtn();
    }
  return (
    <button className={'btn-dropdown ' + (toogleButton ? "btn-dropdown_rotate" : "")} onClick={ btnFunctions } aria-label='Desplegar'>
        <ArrowDown />
    </button>
  )
}