import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div className="footer__group footer__group--blue">
                    <div className="footer__subgroup footer__subgroup--darkBlue footer__subgroup--big">
                        <FontAwesomeIcon className="subgroup__icon" icon={faWhatsapp}/>
                        <div className="subgroup__text">
                            <span className="bold">0800 123 2222</span>
                            <span className="normal">Seg - Sex 8h-22h</span>
                        </div>
                    </div>
                    <div className="footer__subgroup footer__subgroup--darkBlue">
                        <FontAwesomeIcon className="subgroup__icon" icon={faComments}/>
                        <div className="subgroup__text subgroup__text--desktop">
                            <span className="bold">Chat ao vivo</span>
                            <span className="normal">Seg - Sex 8h-22h</span>
                        </div>
                        <div className="subgroup__text subgroup__text--mobile">
                            <span className="bold">Chat</span>
                        </div>
                    </div>
                    <div className="footer__subgroup footer__subgroup--darkBlue">
                        <FontAwesomeIcon className="subgroup__icon" icon={faEnvelope}/>
                        <div className="subgroup__text subgroup__text--desktop">
                            <span className="bold">Mande um e-mail</span>
                            <span className="normal">Respondemos rapidinho</span>
                        </div>
                        <div className="subgroup__text subgroup__text--mobile">
                            <span className="bold">E-mail</span>
                        </div>
                    </div>
                    <div className="footer__subgroup footer__subgroup--darkBlue">
                        <FontAwesomeIcon className="subgroup__icon" icon={faInfoCircle}/>
                        <div className="subgroup__text subgroup__text--desktop">
                            <span className="bold">Centro de ajuda</span>
                            <span className="normal">Encontre todas as respostas</span>
                        </div>
                        <div className="subgroup__text subgroup__text--mobile">
                            <span className="bold">Ajuda</span>
                        </div>
                    </div>
                </div>
                <div className="footer__group footer__group--blue">
                    <div className="subgroup__text">
                        <span className="normal">Feito com S2 pelo Jessé Correia Lins</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;