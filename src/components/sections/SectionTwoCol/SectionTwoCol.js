import React from 'react'
import { ImgWebp } from '../../ImgWebp';
import { randomKeyGen } from '../../../helpers/randomKeyGen';
import './SectionTwoCol.scss';

export const SectionTwoCol = ({ title, txt, imgSrcSet, imgAlt }) => {
  return (
    <section className='container-flex two-col-section'>
        <div className='column'>
          <h2>{ title}</h2>
            { 
              txt.map( (p, i) => {
                  return <p key={ randomKeyGen('rcy', i) } >{ p }</p>
              } )
            }
        </div>
        <div className='column'>
            <figure>
                <ImgWebp 
                    srcSet = { imgSrcSet }
                    imgAlt = { imgAlt }
                />
            </figure>
        </div>
      </section>
  )
}
