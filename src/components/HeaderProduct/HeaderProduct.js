import React from 'react'
import { ImgWebp } from '../ImgWebp'

export const HeaderProduct = ({jpgSrc, imgAlt, claim, cta}) => {

  return (
    <header>
        <div>
            <ImgWebp 
            jpgSrc={ jpgSrc } 
            imgAlt= { imgAlt }
            />
        </div>
        <h1>{ claim }</h1>
        <button>{ cta }</button>
    </header>
  )
}
