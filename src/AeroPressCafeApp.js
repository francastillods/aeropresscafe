import React from 'react';
import { HeaderProduct } from './components/HeaderProduct/HeaderProduct';

export const AeroPressCafeApp = () => {
  return (
        <>
        <HeaderProduct 
          jpgSrc ={ process.env.PUBLIC_URL + '/img/aeropress-preparar-cafe.jpg' }
          imgAlt ='Preparar café con AeroPress'
          claim ='Disfruta de café barista en casa respetando el medio ambiente'
          cta = 'Comprar en Amazon'
          />
          
        </>
  )
}