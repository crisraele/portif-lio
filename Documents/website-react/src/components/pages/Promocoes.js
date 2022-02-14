import React from 'react';
import '../../App.css';

import CardItem from '../CardItem';

export default function Promocoes() {
  return  (
    
    <div className='cards'>
    <h1>Confira nossa promoções</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='../image/fernandonoronho.jpg'
            text='Explore umas das mais belas praias do mundo!'
            label='Praias'
            path='/destino'
          />
          <CardItem
            src='../image/salvador.jpg'
            text='Conheça os encantos de Salvador'
            label='Pontos Turísticos'
            path='/destino'
          />
        </ul>

        </div>
        </div>
        </div>
      
    
  );
}
