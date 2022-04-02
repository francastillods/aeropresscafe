import React from 'react';
import { ImgWebp } from '../ImgWebp';
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
          <div className='header-cta_info'>
            <h1>{ claim }</h1>
            <a className='btn btn-primary' href={ href } title={ title } target="_self">{ cta }</a>
          </div>

        </div>
        {/* <div className="header-cta_info">

        </div> */}
    </header>
  )
}
