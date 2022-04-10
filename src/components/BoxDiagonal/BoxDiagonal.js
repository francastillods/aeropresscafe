import { ImgWebp } from '../ImgWebp';
import './_box-diagonal.scss';

export const BoxDiagonal = () => {
  return (
    <section className='box-diagonal'>
        <div className='container-flex'>

            <figure className='column2'>
                <ImgWebp 
                    srcSet={ '/img/preparar-cafe-aeropress.png' }
                    imgAlt= { 'imgAlt' }
                />
            </figure>

            <div className='column2'>
                <h2>Prepárate el café que más te guste</h2>
                <p>Aeropress te abre un mundo de posibilidades, al no depender de cápsulas compatibles, puedes preparar todo tipo de café y lo más importante: prepara café a medida como más te guste.</p>
                <p>Elige el tipo que más te guta: arábica, ibérica, robusta... Decide el origen: Colombia, Brasil, Etiopia, si es ecológico, de comercio justo... mueleló tú mismo o compralo molido, añade la cantidad de agua que sea de tu agrado.</p>
                <p>Aeropress es el aliado perfecto para poder disfrutar de café de máxima calidad, sin condiciones y 100% personalizado.</p>
            </div>
            
        </div>
    </section>
  )
}
