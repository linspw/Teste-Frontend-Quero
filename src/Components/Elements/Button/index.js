import React from 'react';
import './Button.scss';

const Button = (props) =>{
    return (
        <button type={"button"} className={`button-component ${props.color?'button-component--'+props.color:''} ${props.className?props.className:''}`} disabled={props.disabled} onClick={props.onClick?(e)=>props.onClick(e):null} value={props.value?props.value:null}>
            {props.children}
        </button>
    );
}

export default Button;