import React from 'react';
import { ImgWebp } from '../ImgWebp';
import './HeaderProduct.scss';

export const HeaderProduct = ({imgSrcSet, imgSrc, imgAlt, claim, cta}) => {

  return (
    <header className="header-product">
        <ImgWebp 
            imgSrcSet={ imgSrcSet }
            imgAlt= { imgAlt }
        />
        <div className="header-product_info">
            <h1>{ claim }</h1>
            <button>{ cta }</button>
        </div>
    </header>
  )
}
