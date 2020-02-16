import React from 'react';
import './MainContent.scss';
import Card from '../../Elements/Card';


class MainContent extends React.Component{
    render(){
        return (
            <div className="UX-MainContent">
                <div className="UX-MainContent-Item CategoryWrapper">
                    <a href="/#">Home</a><span>/</span><a href="/#">Minha Conta</a><span>/</span><a href="/#" className="active">Bolsas Favoritas</a>
                </div>
                <div className="UX-MainContent-Item TitleWrapper">
                    <span className="title">Bolsas favoritas</span>
                    <span className="subtitle">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas dísponiveis.</span>
                </div>
                <div className="UX-MainContent-Item SwitchWrapper">
                    <div className="SwitchBar">
                        <button className="Element active">Todos os semestres</button>
                        <button className="Element">1º semestre de 2020</button>
                        <button className="Element">2º semestre de 2020</button>
                    </div>
                </div>
                <div className="UX-MainContent-Item OffersWrapper">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </div>
        );
    }
}

export default MainContent;