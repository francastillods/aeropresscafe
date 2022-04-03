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
          <div className="container">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </>
  )
}