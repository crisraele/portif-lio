import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Card from '../Card';






export default function Destino() {
   return (
     
    <div className='cards'>
      <h1>Os Melhores destinos do Brasil estão Aqui!</h1>
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
          <ul className='cards__items'>
            <CardItem
              src='../image/noronha.jpg'
              text='Encante-se com as maravilhas de Noronha'
              label='Praias'
              path='/destino'
            />
            <CardItem
              src='../image/portodegalinha.jpg'
              text='Experimente os encantos de Porto de Galinhas'
              label='Praias'
              path='/destino'
            />
            <CardItem
              src='../image/olinda-pe.jpg'
              text='Conheça a história de umas das cidades mais antigas do Brasil'
              label='Encantos'
              path='/login'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../image/riodejaneiro.jpg'
              text='Encante-se com a história do Rio'
              label='Brasil'
              path='/destino'
            />
            <CardItem
              src='../image/recife.jpg'
              text='Experimente os encantos de Recife'
              label='Brasil'
              path='/destino'
            />
            <CardItem
              src='../image/rio.jpg'
              text='Viaje para o Rio de Janeiro'
              label='Brasil'
              path='/login'
            />
          </ul>
        </div>
        
      </div>
   <Card />
     
    </div>
      
      
      
      
    
  );
}
