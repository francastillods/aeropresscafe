import React from 'react'
import { randomKeyGen } from '../../helpers/randomKeyGen'
import { BtnDropdown } from '../BtnDropdown/BtnDropdown'
import PropTypes from 'prop-types';
import { useState } from 'react'
import './CardReview.scss'
import StarRating from '../StarRating/StarRating'

export const CardReview = ({ rating, title ,name, review }) => {

    const [ switchBtn, setSwitchBtn ] = useState(false);
    const toogleSwitch = () => {
        switchBtn ? setSwitchBtn(false) : setSwitchBtn(true)
    }

    if (rating > 5 || rating < 0) {
        rating = 0;
        console.error ('Error! Rating has to be a number between 0 - 5');
    }

    return (
        <div className='column'>
            <div className='card-review'>
                
                <StarRating rating={ rating } />
                
                <div className={ 'card-review_info ' + (switchBtn ? "card-review_info_show" : "") }>
                    <h3>{ title }</h3>
                    <p className="card-review_info_reviewer">{ name }</p>
                    {   
                        review.map( (p, i) => {
                            return <p key={ randomKeyGen('rw', i) } >{ p }</p>
                        })
                    }
                </div>
                <BtnDropdown 
                onClick ={ toogleSwitch }
                />
            </div>
        </div>
    )
}

CardReview.propTypes = {
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.array.isRequired
}
