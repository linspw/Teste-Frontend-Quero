import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component{
    render(){
        return (
            <div className="UX-Footer">
                <div className="UX-Footer-Group darkBlue">
                    <div className="UX-Footer-SubGroup">
                        <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
                        <div className="UX-Footer-SubGroup-Text">
                            <span className="bold">0800 123 2222</span>
                            <span className="normal">Seg - Sex 8h-22h</span>
                        </div>
                    </div>
                    <div className="UX-Footer-SubGroup">
                        <FontAwesomeIcon className="icon" icon={faComments}/>
                        <div className="UX-Footer-SubGroup-Text">
                            <span className="bold">Chat ao vivo</span>
                            <span className="normal">Seg - Sex 8h-22h</span>
                        </div>
                    </div>
                    <div className="UX-Footer-SubGroup">
                        <FontAwesomeIcon className="icon" icon={faEnvelope}/>
                        <div className="UX-Footer-SubGroup-Text">
                            <span className="bold">Mande um e-mail</span>
                            <span className="normal">Respondemos rapidinho</span>
                        </div>
                    </div>
                    <div className="UX-Footer-SubGroup">
                        <FontAwesomeIcon className="icon" icon={faInfoCircle}/>
                        <div className="UX-Footer-SubGroup-Text">
                            <span className="bold">Centro de ajuda</span>
                            <span className="normal">Encontre todas as respostas</span>
                        </div>
                    </div>
                </div>
                <div className="UX-Footer-Group blue">
                    <div className="UX-Footer-SubGroup-Text">
                        <span className="normal">Feito com S2 pelo Jessé Correia Lins</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;