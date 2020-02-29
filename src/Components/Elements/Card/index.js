import React from 'react';
import './Card.scss';
import { connect } from 'react-redux';
import * as InterfaceActions from '../../../Redux/Actions/interfaceActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button';

const Card = (props) =>{
    let data = props.value;
    if(data){
        return (
            <div className="card">
                <div className="card__group">
                    <img src={`${process.env.REACT_APP_BACKEND}public${data.university.logo_url}`} alt={data.university.name}/>
                </div>
                <div className="card__group">
                    <div className="card__subgroup">
                        <span className="upper">{data.university.name}</span>
                        <span className="normal"><strong className="blue">{data.course.name}</strong></span>
                    </div>
                    <div className="card__subgroup card__subgroup--horizontal">
                        <span className="bold">3.8</span>
                        <span className="icons"><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStarHalfAlt}/><FontAwesomeIcon icon={faStarEmpty}/></span>
                    </div>
                </div>
                <div className="card__group card__group--bordered">
                    <div className="card__subgroup">
                        <span className="upper">{data.course.kind} &bull; {data.course.shift}</span>
                        <span className="normal">Início das aulas em: {data.start_date}</span>
                    </div>
                </div>
                <div className="card__group">
                    <div className="card__subgroup">
                        <span>Mensalidade com o Quero Bolsa:</span>
                        <span className="normal"><strike>R$ {new Intl.NumberFormat().format(data.full_price)}</strike></span>
                        <span><strong className="green">R$ {new Intl.NumberFormat().format(data.price_with_discount)}</strong> /mês</span>
                    </div>
                    <div className="card__subgroup card__subgroup--horizontal">
                        <Button color="primary-color" onClick={()=>props.removeOffersFavorite(props.index)}>Excluir</Button> <Button color="primary-yellow" disabled={data.enabled?false:true}>Ver Oferta</Button>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="card card--add">
                <button className="card__group" onClick={props.toogleStatusModal?()=>props.toogleStatusModal(true):()=>console.log("Clickado")}>
                    <div className="card__subgroup card__subgroup--addicon">
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </div>

                    <div className="card__subgroup">
                        <span className="bold">Adicionar Curso</span>
                        <span className="normal">Clique para adicionar bolsas de cursos do seu interesse</span>
                    </div>
                </button>    
            </div>
        );
    }
    
}

const mapDispatchToProps = {
    ...InterfaceActions
}


export default connect(null, mapDispatchToProps)(Card);