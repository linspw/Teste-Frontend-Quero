import React from 'react';
import './Button.scss';

const Button = (props) =>{
    return (
        <button className={`UX-Button ${props.color?props.color:''} ${props.className?props.className:''}`} disabled={props.disabled} onClick={props.onClick?(e)=>props.onClick(e):null}>
            {props.children}
        </button>
    );
}

export default Button;