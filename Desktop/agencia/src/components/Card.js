import React from 'react';
import './Card.css';
import CardItem from './CardItem';

function Card () {
  return (
    <div className='cards'>
      <h1>Os Melhores destinos estão Aqui!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../image/cancun.jpg'
              text='Explore umas das mais belas praias do mundo!'
              label='Praias'
              path='/destino'
            />
            <CardItem
              src='../image/dubai.jpg'
              text='Viaje por Dubai e desbrave seus encantos'
              label='Pontos Turísticos'
              path='/destino'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../image/portugal.jpg'
              text='Encante-se com a história de Portugal'
              label='História'
              path='/destino'
            />
            <CardItem
              src='../image/ilhas-maldivas.png'
              text='Experimente os encantos das Maldivas'
              label='Praias'
              path='/destino'
            />
            <CardItem
              src='../image/familiaviajante.jpg'
              text='Viaje com quem você ama'
              label='Adrenalina'
              path='/login'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
