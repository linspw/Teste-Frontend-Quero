import React from 'react';
import { connect } from 'react-redux';
import * as InterfaceActions from '../../../Redux/Actions/interfaceActions';
import './MainContent.scss';
import Card from '../../Elements/Card';


class MainContent extends React.Component{
    constructor(props){
        super(props);
        console.log("Props:",props);
        this.state = {
            favorites: this.props.favorites
        }

    }
    componentDidUpdate = async (prevProps) => {
        if (this.props.favorites !== prevProps.favorites) {
            await this.setState({...this.state, favorites: this.props.favorites});
            console.log(this.props.favorites)
        }
    }
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
                    {this.state.favorites?(
                        this.state.favorites.map((e,i)=>{
                            return (<Card key={i} value={e}/>)
                        }
                    )):null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        favorites: store.OffersState.favorites
    }
}
const mapDispatchToProps = {
    ...InterfaceActions
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContent);