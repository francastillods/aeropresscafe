import PropTypes from 'prop-types';

export const ImgWebp = ( { srcSet, imgAlt } ) => {

  const [src, ] = srcSet.split(' ');
  const [ , extension,   ] = src.split('.');

  if( extension === 'jpg' || 'png') {
   
    var replace = new RegExp(extension,"g");
    const webpSrcSet = srcSet.replace(replace, 'webp');

    return (
          <picture>
              <source type="image/webp" srcSet={ webpSrcSet } alt={ imgAlt } />
              <source type={'image/' + extension } srcSet={ srcSet } alt={ imgAlt } /> 
              <img src={ src } alt={ imgAlt } />
          </picture>
    )
    
    

  } else if( extension === 'png') {

    const webpSrcSet = srcSet.replace(/png/g, 'webp'); 

    return (
          <picture>
              <source type="image/webp" srcSet={ webpSrcSet } alt={ imgAlt } />
              <source type="image/png" srcSet={ srcSet } alt={ imgAlt } /> 
              <img src={ src } alt={ imgAlt } />
          </picture>
    )

  } else {

    console.error('ImgWebp Component: srcSet expect a string with different .jpg or png path and width. Example: "image600.jpg 600w, image400.jpg 400w"');
    return null;
  }
}

ImgWebp.propTypes = {
  srcSet: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
}
