import React from 'react';
import { HeaderCta } from './components/HeaderCta/HeaderCta';

export const AeroPressCafeApp = () => {
  return (
        <>
        <HeaderCta
          srcSet ={ '/img/aeropress-preparar-cafe-2000x512.jpg 2000w, /img/aeropress-preparar-cafe-1800x512.jpg 1800w, /img/aeropress-preparar-cafe-1200x512.jpg 1200w, /img/aeropress-preparar-cafe-900x384.jpg 900w, /img/aeropress-preparar-cafe-600x420.jpg 600w, /img/aeropress-preparar-cafe-360x250.jpg 360w' }
          imgAlt ='Preparar café con AeroPress'
          claim ='Disfruta de café barista en casa respetando el medio ambiente'
          cta = 'Comprar en Amazon'
          href = '#'
          title = 'título'
          />
        </>
  )
}