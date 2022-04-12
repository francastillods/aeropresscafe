import React from 'react'
import { ReactComponent as StarGold} from '../../assets/vectors/star-gold.svg';
import { ReactComponent as StarGrey} from '../../assets/vectors/star-grey.svg';
import { randomKeyGen } from '../../helpers/randomKeyGen'
import './StarRating.scss'

export default function StarRating( { rating } ) {
    
    const starSvgCode = ( gold ) => {
        
        if( gold ) {
            return(
                <StarGold />
            )
        } else {
            return(
                <StarGrey />
            )
        }
    }

    const getStarsRating = ( rating ) => {
        let stars = [];
        
        for (let i = 1; i < 6; i++) {
            if( i <= rating ) {
                stars.push(starSvgCode( true ));
            } else {
                stars.push(starSvgCode( false ));
            }
        }   

        return( stars );
    }
    
    const ratingStars = getStarsRating(rating);

    return( 
        <ul className='star-rating'>
        { 
            ratingStars.map( (star, i) => {
                return <li key={ randomKeyGen('rStar', i) }>{ star }</li>
            })
        }
    </ul>
     );
}
