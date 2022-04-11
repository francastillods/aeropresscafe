import { ImgWebp } from '../ImgWebp';
import { randomKeyGen } from '../../helpers/randomKeyGen';
import './_box-diagonal.scss';

export const BoxDiagonal = ({ imgSrcSet, imgAlt, title, txt }) => {
  return (
    <section className='box-diagonal'>
        <div className='container-flex'>

            <figure className='column2'>
                <ImgWebp 
                    srcSet={ imgSrcSet}
                    imgAlt= { imgAlt }
                />
            </figure>

            <div className='column2'>
                <h2>{ title }</h2>
                {   
                    txt.map( (p, i) => {
                        return <p key={ randomKeyGen('dBox', i) } >{ p }</p>
                    } )
                }
            </div>
            
        </div>
    </section>
  )
}
