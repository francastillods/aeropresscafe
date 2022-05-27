import React from 'react';
import { SectionDiagonal } from './components/sections/SectionDiagonal/SectionDiagonal';
import { CardReview } from './components/CardReview/CardReview';
import { CardStep } from './components/CardStep/CardStep';
import { HeaderCta } from './components/HeaderCta/HeaderCta';
import { SectionTwoCol } from './components/sections/SectionTwoCol/SectionTwoCol';

const data = require('./assets/data/dataEs.json');

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

      <h2>{data.HOME.SECTION_STEPS.STEPS_TITLE}</h2>
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

      <SectionDiagonal
        imgSrcSet = { data.HOME.SECTION_PRESENTATION.IMG_SRC }
        imgAlt = { data.HOME.SECTION_PRESENTATION.IMG_ALT }
        title = { data.HOME.SECTION_PRESENTATION.TITLE }
        txt = { data.HOME.SECTION_PRESENTATION.TXT }
      />
      <section className="container card-wrapper">
        <CardReview 
          rating = { data.HOME.SECTION_REVIEWS.REVIEW1.RATING }
          title = { data.HOME.SECTION_REVIEWS.REVIEW1.TITLE }
          name = { data.HOME.SECTION_REVIEWS.REVIEW1.NAME }
          review = { data.HOME.SECTION_REVIEWS.REVIEW1.TXT }
          className = 'column4'
        />
        <CardReview 
          rating = { data.HOME.SECTION_REVIEWS.REVIEW2.RATING }
          title = { data.HOME.SECTION_REVIEWS.REVIEW2.TITLE }
          name = { data.HOME.SECTION_REVIEWS.REVIEW2.NAME }
          review = { data.HOME.SECTION_REVIEWS.REVIEW2.TXT }
          className = 'column4'
        />
        <CardReview 
          rating = { data.HOME.SECTION_REVIEWS.REVIEW3.RATING }
          title = { data.HOME.SECTION_REVIEWS.REVIEW3.TITLE }
          name = { data.HOME.SECTION_REVIEWS.REVIEW3.NAME }
          review = { data.HOME.SECTION_REVIEWS.REVIEW3.TXT }
          className = 'column4'
        />
        <CardReview 
          rating = { data.HOME.SECTION_REVIEWS.REVIEW4.RATING }
          title = { data.HOME.SECTION_REVIEWS.REVIEW4.TITLE }
          name = { data.HOME.SECTION_REVIEWS.REVIEW4.NAME }
          review = { data.HOME.SECTION_REVIEWS.REVIEW4.TXT }
          className = 'column4'
        />
      </section>
      <div className= 'flex-center'>
        <a className="btn btn-secondary"
          href = { data.HOME.SECTION_REVIEWS.BTN_AMZ_HREF }
          title = { data.HOME.SECTION_REVIEWS.BTN_TITLE }
          rel= "noopener  noreferrer" 
          target = '_blank'

        >{ data.HOME.SECTION_REVIEWS.BTN_AMZ }</a>
      </div>
      <SectionTwoCol
        title = { data.HOME.SECTION_RECYCLING.TITLE  }
        txt = { data.HOME.SECTION_RECYCLING.TXT }
        imgSrcSet = {data.HOME.SECTION_RECYCLING.IMG_SRC }
        imgAlt = {data.HOME.SECTION_RECYCLING.IMG_ALT}
      />
    </>
  )
}