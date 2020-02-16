import React from 'react';
import './Card.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Card = (props) =>{
    if(props.data){
        return (
            <div className="UX-Card">
                
            </div>
        );
    }
    else{
        return (
            <div className="UX-Card">
                <button className="Card-Group">
                    <div className="SubGroup addicon">
                        <FontAwesomeIcon icon={faPlusCircle}/>
                    </div>

                    <div className="SubGroup">
                        <span className="bold">Adicionar Curso</span>
                        <span className="normal">Clique para adicionar bolsas de cursos do seu interesse</span>
                    </div>
                    <div className="SubGroup">
                        
                    </div>
                </button>    
            </div>
        );
    }
    
}

export default Card;