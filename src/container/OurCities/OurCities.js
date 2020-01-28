import React from 'react'
import {StyledSection,StyledFlexDiv,StyledSectionFull} from '../HomePage/StyledHomePage'
import Cities from '../../component/Cities/Cities'
import Testimonials from '../../component/Testimonials/Testimonials'
import Footer from '../../component/Footer/Footer'




const ourCities = () => {
    
    return (
        <React.Fragment>
            <StyledSection>
                <h2>We're currently in these cities</h2>
                <StyledFlexDiv>
                    <Cities/>
                </StyledFlexDiv>
            </StyledSection>
            <StyledSectionFull>
                <Testimonials/>
            </StyledSectionFull>
            <Footer/>
        </React.Fragment>
    )
}


export default ourCities;