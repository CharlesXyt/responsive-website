import React from 'react'
import {NavLink} from 'react-router-dom'

export default (props) => {

    return (
        <li>
            <NavLink exact to={props.path}>{props.children}</NavLink>
        </li>
    )
}