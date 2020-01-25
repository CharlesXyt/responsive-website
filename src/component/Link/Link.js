import React from 'react'
import {
    BaseLinkButton,
    FullLinkButton,
    GhostLinkButton
} from './StyledLink'


export default (props) => {
    
    let linkElement=null; 

    switch(props.type){
        case "full":
            linkElement = <FullLinkButton {...props}>{props.children}</FullLinkButton>
            break
        case "ghost":
            linkElement = <GhostLinkButton {...props}>{props.children}</GhostLinkButton>
            break
        default:
            linkElement = <BaseLinkButton {...props}>{props.children}</BaseLinkButton>
            break
    }

    return linkElement;
}
    