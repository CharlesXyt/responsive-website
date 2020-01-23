import React from 'react'
import Header from '../../component/Header/Header'
import {StyledSection,StyledFlexDiv} from '../HomePage/StyledHomePage'
import styled from 'styled-components'
import Cities from '../../component/Cities/Cities'





const ourCities = () => {
    
    return (
        <React.Fragment>
            <Header/>
            <StyledSection>
                <h2>We're currently in these cities</h2>
                <StyledFlexDiv>
                    <Cities/>
                </StyledFlexDiv>
            </StyledSection>
            <StyledSection>
                <StyledFlexDiv>
                    
                </StyledFlexDiv>
            </StyledSection>
        </React.Fragment>
    )
}


export default ourCities;