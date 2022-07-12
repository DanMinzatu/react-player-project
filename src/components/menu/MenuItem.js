import React from "react";
import { Link } from 'react-router-dom'

function MenuItem(props) {

    return (
        <li>
            <Link to={props.link}>{props.name}</Link>
        </li>
    );
}

export default MenuItem
