import React from 'react';
import { HeaderProduct } from './components/HeaderProduct/HeaderProduct';

export const AeroPressCafeApp = () => {
  return (
        <>
        <HeaderProduct 
          imgSrcSet ={ '/img/aeropress-preparar-cafe.jpg 1920w, /img/aeropress1200.jpg 1200w, /img/aeropress600.jpg 600w, aeropress900.jpg 900w' }
          imgAlt ='Preparar café con AeroPress'
          claim ='Disfruta de café barista en casa respetando el medio ambiente'
          cta = 'Comprar en Amazon'
          />
<hr />
          <figure style={{overflow: "hidden", padding:0, margin:0}}>
            <picture>
              <source type="image/webp" 
              srcSet="/img/aeropress-preparar-cafe.webp 1920w, /img/aeropress1200.webp 1200w, /img/aeropress600.webp 600w, aeropress900.webp 900w" 
              />
              <img 
              src="/img/img1200x678.jpg" 
              srcSet="/img/aeropress1200.jpg 1200w, /img/aeropress600.jpg 600w, aeropress900.jpg 900w" 
              sizes="(max-width:768px) 100vw, (max-width: 975px) 59vw, 600px" 
              alt="Texto SEO" 
              loading="lazy" />
            </picture>
          </figure>

        </>
  )
}