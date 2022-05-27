import React from 'react';
import { ImgWebp } from '../ImgWebp';
import '../Logo/Logo'
import { Logo } from '../Logo/Logo';
import './HeaderCta.scss';

export const HeaderCta = ({srcSet, imgAlt, claim, cta, href, title}) => {

  return (
    <header className="header-cta">
        <figure>
            <ImgWebp 
                srcSet={ srcSet }
                imgAlt= { imgAlt }
            />
          </figure>
          <div className="container">
            <div className="header-cta_wrapper">
              <Logo />
              <div className='header-cta_info'>
                <h1>{ claim }</h1>
                <a className='btn btn-primary' href={ href } title={ title } rel= "noopener  noreferrer" target="_blank">{ cta }</a>
              </div>
            </div>
        </div>
    </header>
  )
}
