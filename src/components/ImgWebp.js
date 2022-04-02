import React from 'react';
import PropTypes from 'prop-types';

export const ImgWebp = ( { srcSet, imgAlt } ) => {

  const [src, ] = srcSet.split(' ');
  const [ , extension,   ] = src.split('.');

  if( extension !== 'jpg') {
   
    console.error('ImgWebp Component: srcSet expect a string with different .jpg path and width. Example: "image600.jpg 600w, image400.jpg 400w"');
    
    return null;

  } else {

    const webpSrcSet = srcSet.replace(/jpg/g, 'webp'); 

    return (
          <picture>
              <source type="image/webp" srcSet={ webpSrcSet } alt={ imgAlt } />
              <source type="image/jpeg" srcSet={ srcSet } alt={ imgAlt } /> 
              <img src={ src } alt={ imgAlt } />
          </picture>
    )

  }
}

ImgWebp.propTypes = {
  srcSet: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
}
