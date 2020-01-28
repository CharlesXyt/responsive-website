import React from 'react'
import styled from 'styled-components'

const StyledToggleButton = styled.div`

    width:30px;
    height:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left:1rem;
    div {
        width:100%;
        height:3px;
        background-color:white;
    }
`


export default (props) => {

    return (
        <StyledToggleButton onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </StyledToggleButton>
    )
}