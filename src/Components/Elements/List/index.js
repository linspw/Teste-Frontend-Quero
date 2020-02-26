import React from 'react';
import './List.scss';

const ListItem = (props) => {
    return (
        <li className={`UX-ListItem ${props.className?props.className:""}`}>{props.children}</li>
    );
}

const List = (props) => {
    return (
        <ul className={`UX-List ${props.expand?"expand ":""}${props.className?props.className:""}`}>{props.children}</ul>
    );
}

export { List, ListItem };