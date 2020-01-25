import React from 'react'
import {NavLink} from 'react-router-dom'

export default (props) => {

    return (
        <li>
            <NavLink exact to={props.path} activeStyle={{borderBottom:"2px solid #e67e22",paddingBottom:"8px",...props.style}}>{props.children}</NavLink>
        </li>
    )
}