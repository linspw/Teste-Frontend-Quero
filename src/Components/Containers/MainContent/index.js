import React from 'react';
import { connect } from 'react-redux';
import * as InterfaceActions from '../../../Redux/Actions/interfaceActions';
import Card from '../../Elements/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './MainContent.scss';



class MainContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favorites: this.props.favorites,
            semester: "all"
        }

    }
    componentDidUpdate = async (prevProps) => {
        if ((this.props.favorites !== prevProps.favorites) && (this.props.favorites !== prevProps.favorites.lenght)) {
            await this.setState({...this.state, favorites: this.props.favorites});
        }
    }
    handleSwitch = (semester) => {
        this.setState({...this.state, semester})
    }
    render(){
        return (
            <div className="main-content">
                <div className="main-content__item main-content__item--category">
                    <a className="desktop" href="/#">Home</a><span className="desktop">/</span><a href="/#"><FontAwesomeIcon className="icon" icon={faAngleLeft}/>Minha Conta</a><span className="desktop">/</span><a className="desktop active" href="/#">Bolsas Favoritas</a>
                </div>
                <div className="main-content__item main-content__item--title">
                    <span className="title">Bolsas favoritas</span>
                    <span className="subtitle">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas dísponiveis.</span>
                </div>
                <div className="main-content__item main-content__item--switch">
                    <div className="switch-bar">
                        <button className={`switch-bar__button ${this.state.semester==='all'?'active':''}`} onClick={()=>this.handleSwitch('all')}>Todos os semestres</button>
                        <button className={`switch-bar__button ${this.state.semester==='2020.1'?'active':''}`} onClick={()=>this.handleSwitch('2020.1')}>1º semestre de 2020</button>
                        <button className={`switch-bar__button ${this.state.semester==='2020.2'?'active':''}`} onClick={()=>this.handleSwitch('2020.2')}>2º semestre de 2020</button>
                    </div>
                </div>
                <div className="main-content__item main-content__item--offers">
                    <Card/>
                    {this.state.favorites?(
                        this.state.favorites.map((e,i)=>{
                            if(this.state.semester === 'all' || e.enrollment_semester === this.state.semester){
                                return (<Card key={i} value={e} index={i}/>)
                            }
                            return null;
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