import React from 'react';
import PropTypes from 'prop-types';

export const ImgWebp = ( { jpgSrc, imgAlt } ) => {

  const [imgPath, imgExtension ] = jpgSrc.split('.');

  if (imgExtension !== 'jpg') { console.error('JpgSrc has to be a JPG'); }

  return (
      <>
        <picture>
            <source srcSet={ imgPath + '.webp' } type="image/webp" alt={ imgAlt }  />
            <source srcSet={ jpgSrc } type="image/jpeg"  alt={ imgAlt } /> 
            <img src={ jpgSrc } alt={ imgAlt } />
        </picture>
      </>
  )
}

ImgWebp.propTypes = {
  jpgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
}
