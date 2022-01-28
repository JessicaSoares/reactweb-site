import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>

        <p className='footer-subscription-text'>
        Secretaria Especial de Governo - SEGOV | Centro Administrativo, Morro dos ventos, Bairro Beira Rio II 
        </p>
        <div className='input-areas'>

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Serviços</h2>
            <Link to='/sign-up'>Cidadão</Link>
            <Link to='/'>Área do servidor</Link>
            <Link to='/'>Planejamentos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contatos</h2>
            <Link to='/'>Fale conosco</Link>
            <Link to='/'>Ouvidoria</Link>
            <Link to='/'>Informação ao Cidadão</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Portais</h2>
            <Link to='/'>Prefeitura</Link>
            <Link to='/'>Governo do Estado</Link>
            <Link to='/'>Transparência</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Ajuda</h2>
            <Link to='/'>Perguntas Frequêntes</Link>
            <Link to='/'>Mapa do Site</Link>
            <Link to='/'>Endereços</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="images/logosegov.png" className='social-logo'/>
            </Link>
          </div>
          <small class='website-rights'>SEGOV © 2022</small>
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
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
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
