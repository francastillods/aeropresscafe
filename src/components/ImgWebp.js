import React from 'react';
import PropTypes from 'prop-types';

export const ImgWebp = ( { imgSrcSet, imgAlt } ) => {

  const [imgSrc, ] = imgSrcSet.split(' ');
  const [ , extension,   ] = imgSrc.split('.');

  if( extension !== 'jpg') {
   
    return console.error('ImgWebp Component: imgSrcSet expect a string with different .jpg path and width. Example: "image600.jpg 600w, image400.jpg 400w"');
  
  } else {

    const webpSrcSet = imgSrcSet.replace(/jpg/g, 'webp'); 

    return (
        <>
          <picture>
              <source type="image/webp" srcSet={ webpSrcSet } alt={ imgAlt } />
              <source type="image/jpeg" srcSet={ imgSrcSet } alt={ imgAlt } /> 
              <img src={ imgSrc } alt={ imgAlt } />
          </picture>
        </>
    )

  }
}

ImgWebp.propTypes = {
  imgSrcSet: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
}
