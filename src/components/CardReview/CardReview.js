import React from 'react'
import { randomKeyGen } from '../../helpers/randomKeyGen'
import { BtnDropdown } from '../BtnDropdown/BtnDropdown'
import { useState } from 'react'
import './CardReview.scss'
import StarRating from '../StarRating/StarRating'

export const CardReview = ({ rating, title ,name, review }) => {

    const [ switchBtn, setSwitchBtn ] = useState(false);
    const toogleSwitch = () => {
        switchBtn ? setSwitchBtn(false) : setSwitchBtn(true)
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
