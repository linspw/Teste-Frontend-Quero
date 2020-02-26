import React from 'react';
import './Select.scss';

const Select = (props)=>{
    return(
        <select id={props.id?props.id:''} onChange={props.onChange?(e)=>props.onChange(e):null}className={`UX-Select ${props.semifull?'semifull ':''}${props.inline?'inline ':''}${props.color?" "+props.color:''}${props.className?" "+props.className:''}`}>
            {props.children}
        </select>
    );
}

export default Select;