import React from 'react'
import Header from '../../component/Header/Header'
import Meals from '../../component/Meals/Meals'
import {
    StyledSection,
    StyledFlexDiv
} from './StyledHomePage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfinity,faStopwatch,faUnlock,faCartPlus} from '@fortawesome/free-solid-svg-icons'



const homePage = () => {
    
    return (
        <React.Fragment>
            <Header/>

            <StyledSection>
                <div className="section-0_content">
                    <h2 >Get food fast — not fast food</h2>
                    <p>Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
                </div>
            </StyledSection>

            <StyledSection>
                <StyledFlexDiv>
                    <div className="section-1_content">
                        <h3>Up to 365 days/year</h3>
                        <FontAwesomeIcon icon={faInfinity} className="icon-font"/>
                        <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.</p>
                    </div>
                    <div className="section-1_content">
                        <h3>Ready in 20 minutes</h3>
                        <FontAwesomeIcon icon={faStopwatch} className="icon-font"/>
                        <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</p>
                    </div>
                    <div className="section-1_content">
                        <h3>100% organic</h3>
                        <FontAwesomeIcon icon={faUnlock} className="icon-font"/>
                        <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
                    </div>
                    <div className="section-1_content">
                        <h3>Order anything</h3>
                        <FontAwesomeIcon icon={faCartPlus} className="icon-font"/>
                        <p>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!</p>
                    </div>             
                </StyledFlexDiv>
            </StyledSection>
                <Meals/>
            <StyledSection>
            </StyledSection>
        </React.Fragment>
    )


}


export default homePage;