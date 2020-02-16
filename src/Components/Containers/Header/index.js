import React from 'react';
import Logo from '../../../Assets/logotipo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import './Header.scss';

class Header extends React.Component{
    render(){
        return (
            <>
                <div className="UX-Header">
                    <div className="UX-Header-Group">
                        <div className="UX-Header-SubGroup">
                            <div className="UX-Header-SubGroup-Text"><span className="bold">Como funciona</span></div><FontAwesomeIcon className="icon" icon={faInfoCircle}/>
                        </div>
                        <div className="vertical-line"/>
                        <div className="UX-Header-SubGroup">
                            <FontAwesomeIcon className="icon whatsapp" icon={faWhatsapp}/>
                            <div className="UX-Header-SubGroup-Text"><span className="bold">0800 123 2222</span><span className="normal">Envie Mensagem ou Ligue!</span></div>
                        </div>
                        
                    </div>
                    <div className="UX-Header-Group">
                        <img className="UX-Logo" alt="Quero Bolsa" src={Logo}/>
                    </div>
                    <div className="UX-Header-Group">
                        <div className="UX-Header-SubGroup">
                            <div className="UX-Header-SubGroup-Text"><span className="bold">Jessé Correia</span></div><FontAwesomeIcon className="icon" icon={faUserCircle}/>
                        </div>
                    </div>
                </div>
                <div className="UX-Bar">
                    <div className="UX-Bar-Group"><a href="/#">Minha Conta</a><a href="/#">Pré-Matrículas</a><a className="active" href="/#">Bolsas Favoritas</a></div>
                </div>
            </>
        );
    }
}

export default Header;