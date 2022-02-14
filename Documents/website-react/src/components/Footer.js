import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          A viagem dos seus sonhos, você encontra aqui.
        </p>
        <p className='footer-subscription-text'>
          Você pode receber novidades a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Digite seu E-mail'
            />
            <Button buttonStyle='btn--outline'>Cadastrar</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre Nós</h2>
            <Link to='/login'>Como trabalhamos</Link>
            <Link to='/'>Depoimentos</Link>
            
            <Link to='/'>Parceiros</Link>
            <Link to='/'>Termos de Serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Nosso Contato</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte ao cliente</Link>
            <Link to='/'>Dúvidas</Link>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Assistir Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influenceres Parceiros</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Mídias Sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
           
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              BORA ALI 
              
            </Link>
          </div>
          <small class='website-rights'>Agencia de Viagens © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
