import React from 'react';
import './Card.scss';
import { connect } from 'react-redux';
import * as InterfaceActions from '../../../Redux/Actions/interfaceActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Card = (props) =>{
    //console.log(props)
    if(props.value){
        return (
            <div className="card">
                <div className="">
                    
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="card">
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