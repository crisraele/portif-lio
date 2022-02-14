import React from 'react';
import Footer from '../Footer';
import './Contato.css';
import VideoHome from '../../video/videoAmigos.mp4';




export default function Contato() {
  return (
    <>
  
  <div className="page-section" id="contact">
     <video  autoPlay loop muted >
      <source src= {VideoHome}  type="video/mp4" />

      </video>
            <div className="container">
           
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Envie sua Mensagem!</h2>
                    <h3 className="section-subheading text-muted">Nós queremos te ouvir, deixe seu feedback ou nos envie uma mensage,.</h3>
                </div>
  <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                
                                <input className="form-control" id="name" type="text" placeholder="Nome Completo *" data-sb-validations="required" />
                               
                            </div>
                            <div className="form-group">
                                
                                <input className="form-control" id="email" type="email" placeholder="Endereço de E-mail *" data-sb-validations="required,email" />
                                
                            </div>
                            <div className="form-group mb-md-0">
                               
                                <input className="form-control" id="phone" type="tel" placeholder="Telefone *" data-sb-validations="required" />
                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                
                                <textarea className="form-control" id="message" placeholder="Deixe sua Mensagem *" data-sb-validations="required"></textarea>
                                
                            </div>
                        </div>
                    </div>
                   
                   
                   
                    
                    
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">ENVIAR</button></div>
                </form>
                
  </div>
  </div>
   <Footer />
   </>
     
  );
}
