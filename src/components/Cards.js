import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Indicadores mais acessados</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/coin_icon.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Economia'
              path='/services'
            />
            <CardItem
              src='images/graduation_icon.png'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Educação'
              path='/products'
            />
            <CardItem
              src='images/rural_icon.png'
              text='Agropecuária'
              label='Agricultura'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
