import React from 'react'
import Header from '../../component/Header/Header'
import {StyledSection,StyledFlexDiv,StyledSectionFull} from '../HomePage/StyledHomePage'
import Cities from '../../component/Cities/Cities'
import Testimonials from '../../component/Testimonials/Testimonials'





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
            <StyledSectionFull>
                <Testimonials/>
            </StyledSectionFull>
        </React.Fragment>
    )
}


export default ourCities;