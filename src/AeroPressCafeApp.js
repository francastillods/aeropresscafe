import React from 'react';
import { BoxDiagonal } from './components/BoxDiagonal/BoxDiagonal';
import { CardStep } from './components/CardStep/CardStep';
import { HeaderCta } from './components/HeaderCta/HeaderCta';

export const AeroPressCafeApp = () => {
  return (
    <>
      <HeaderCta
        srcSet ={ '/img/aeropress-preparar-cafe-2000x512.jpg 2000w, /img/aeropress-preparar-cafe-1800x512.jpg 1800w, /img/aeropress-preparar-cafe-1200x512.jpg 1200w, /img/aeropress-preparar-cafe-900x384.jpg 900w, /img/aeropress-preparar-cafe-600x420.jpg 600w, /img/aeropress-preparar-cafe-360x250.jpg 376w' }
        imgAlt ='Preparar café con AeroPress'
        claim ='Disfruta de café barista en casa respetando el medio ambiente'
        cta = 'Comprar en Amazon'
        href = '#'
        title = 'título'
      />

      <h2>Cómo preparar café con AeroPress</h2>
      <div className="container card-wrapper">
        <CardStep
          stepNumber = {'1'}
          imgSrc = { '/img/step1.jpg' }
          imgAlt = { 'paso 1'}
          txt = { 'Añade agua y café' }
        />
        <CardStep
          stepNumber = {'2'}
          imgSrc = { '/img/step2.jpg' }
          imgAlt = { 'paso 2'}
          txt = { 'Remueve y prepara en pocos segundos' }
        />
        <CardStep
          stepNumber = {'3'}
          imgSrc = { '/img/step3.jpg' }
          imgAlt = { 'paso 3'}
          txt = { 'Presiona el café dentro de la taza' }
        />
      </div>

      <BoxDiagonal />
    </>
  )
}