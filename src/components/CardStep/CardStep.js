import React from 'react'
import './CardStep.scss';

export const CardStep = ( {stepNumber, imgSrc, imgAlt, txt }) => {
  return (
    <div className="card-step">
        <span class="step-number">{ stepNumber }</span>
        <figure>
            <img src={ imgSrc } alt={ imgAlt }></img>
        </figure>
        <h3>{ txt }</h3>
    </div>
  )
}
