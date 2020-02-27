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
                <div className="header">
                    <div className="header__group">
                        <div className="header__subgroup">
                            <FontAwesomeIcon className="icon" icon={faInfoCircle}/>
                            <div className="subgroup__text subgroup__text--desktop"><span className="bold">Como funciona</span></div>
                            <div className="subgroup__text subgroup__text--mobile"><span className="bold">Ajuda</span></div>
                        </div>
                        <div className="group__vertical-line"/>
                        <div className="header__subgroup">
                            <FontAwesomeIcon className="icon whatsapp" icon={faWhatsapp}/>
                            <div className="subgroup__text subgroup__text--desktop"><span className="bold">0800 123 2222</span><span className="normal">Envie Mensagem ou Ligue!</span></div>
                        </div>
                        
                    </div>
                    <div className="header__group">
                        <img className="group__logo" alt="Quero Bolsa" src={Logo}/>
                    </div>
                    <div className="header__group">
                        <div className="group__vertical-line group__vertical-line--mobile"/>
                        <div className="header__subgroup">
                            <div className="subgroup__text subgroup__text--desktop"><span className="bold">Jessé Correia</span></div>
                            <FontAwesomeIcon className="icon" icon={faUserCircle}/>
                            <div className="subgroup__text subgroup__text--mobile"><span className="bold">Conta</span></div>
                        </div>
                    </div>
                </div>
                <div className="bar">
                    <div className="bar__group"><a href="/#">Minha Conta</a><a href="/#">Pré-Matrículas</a><a className="active" href="/#">Bolsas Favoritas</a></div>
                </div>
            </>
        );
    }
}

export default Header;