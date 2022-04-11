import React from 'react';
import { BoxDiagonal } from './components/BoxDiagonal/BoxDiagonal';
import { CardReview } from './components/CardReview/CardReview';
import { CardStep } from './components/CardStep/CardStep';
import { HeaderCta } from './components/HeaderCta/HeaderCta';
import './asstes/data/dataEs.json';

const data = require('./asstes/data/dataEs.json');

export const AeroPressCafeApp = () => {
  return (
    <>
      <HeaderCta
        srcSet = { data.HOME.HEADER.IMG_SRC }
        imgAlt = { data.HOME.HEADER.IMG_ALT }
        claim = { data.HOME.HEADER.TITLE }
        cta = { data.HOME.HEADER.CTA_BTN_TXT }
        href = { data.HOME.HEADER.CTA_BTN_HREF }
        title = { data.HOME.HEADER.CTA_BTN_TITLE }
      />

      <h2>Cómo preparar café con AeroPress</h2>
      <div className= 'container card-wrapper'>
        <CardStep
          stepNumber = {data.HOME.SECTION_STEPS.STEP1.NUMBER}
          imgSrc = {data.HOME.SECTION_STEPS.STEP1.IMG_SRC}
          imgAlt = {data.HOME.SECTION_STEPS.STEP1.IMG_ALT}
          txt = {data.HOME.SECTION_STEPS.STEP1.TXT} 
        />
        <CardStep
          stepNumber = {data.HOME.SECTION_STEPS.STEP2.NUMBER}
          imgSrc = {data.HOME.SECTION_STEPS.STEP2.IMG_SRC}
          imgAlt = {data.HOME.SECTION_STEPS.STEP2.IMG_ALT}
          txt = {data.HOME.SECTION_STEPS.STEP2.TXT} 
        />
        <CardStep
          stepNumber = {data.HOME.SECTION_STEPS.STEP3.NUMBER}
          imgSrc = {data.HOME.SECTION_STEPS.STEP3.IMG_SRC}
          imgAlt = {data.HOME.SECTION_STEPS.STEP3.IMG_ALT}
          txt = {data.HOME.SECTION_STEPS.STEP3.TXT} 
        />
      </div>

      <BoxDiagonal
        imgSrcSet = { data.HOME.SECTION_PRESENTATION.IMG_SRC }
        imgAlt = { data.HOME.SECTION_PRESENTATION.IMG_ALT }
        title = { data.HOME.SECTION_PRESENTATION.TITLE }
        txt = { data.HOME.SECTION_PRESENTATION.TXT }
      />

      <CardReview 
        rating = { data.HOME.SECTION_REVIEWS.REVIEW1.RATING }
        title = { data.HOME.SECTION_REVIEWS.REVIEW1.TITLE }
        name = { data.HOME.SECTION_REVIEWS.REVIEW1.NAME }
        review = { data.HOME.SECTION_REVIEWS.REVIEW1.TXT }
      />
      <CardReview 
        rating = { data.HOME.SECTION_REVIEWS.REVIEW2.RATING }
        title = { data.HOME.SECTION_REVIEWS.REVIEW2.TITLE }
        name = { data.HOME.SECTION_REVIEWS.REVIEW2.NAME }
        review = { data.HOME.SECTION_REVIEWS.REVIEW2.TXT }
      />
      <CardReview 
        rating = { data.HOME.SECTION_REVIEWS.REVIEW3.RATING }
        title = { data.HOME.SECTION_REVIEWS.REVIEW3.TITLE }
        name = { data.HOME.SECTION_REVIEWS.REVIEW3.NAME }
        review = { data.HOME.SECTION_REVIEWS.REVIEW3.TXT }
      />
      <CardReview 
        rating = { data.HOME.SECTION_REVIEWS.REVIEW4.RATING }
        title = { data.HOME.SECTION_REVIEWS.REVIEW4.TITLE }
        name = { data.HOME.SECTION_REVIEWS.REVIEW4.NAME }
        review = { data.HOME.SECTION_REVIEWS.REVIEW4.TXT }
      />
    </>
  )
}