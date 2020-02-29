import React from 'react';
import './Select.scss';

const Select = (props)=>{
    return(
        <select id={props.id?props.id:''} onChange={props.onChange?(e)=>props.onChange(e):null}className={`select-component ${props.semifull?'select-component--desktop ':''}${props.inline?'select-component--inline ':''}${props.color?" "+props.color:''}${props.className?" "+props.className:''}`}>
            {props.children}
        </select>
    );
}

export default Select;