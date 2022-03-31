import React from 'react'
import { getImgById } from '../asstes/data/dataImg';

export const ImgOptim = ({ id }) => {

     const img = getImgById(id);


  return (
      <>
        <picture>
            {/* <source srcSet={ process.env.PUBLIC_URL + img.pathWebp } type="image/webp" />
            <source srcSet={ process.env.PUBLIC_URL + img.pathJpg } type="image/jpeg" /> 
            <img src={ img.pathJpg } alt={ img.alt } /> */}
            <img src='/img/aeropress-preparar-cafe.jpg'/>
        </picture>
      </>
  )
}
