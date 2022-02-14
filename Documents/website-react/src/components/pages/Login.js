import React from 'react';
import './Contato.css';
import Footer from '../Footer';



export default function Login() {
  return (
    <>
    <div className="page-section" id="contact">
     
            <div className="container">
           
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Preencha seus dados</h2>
                   
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
                        <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">CADASTRAR</button></div>
      </div>
      </form>
      
      </div>
      
      </div>
      <Footer />
      </>
  );
}
