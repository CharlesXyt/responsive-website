import React from 'react'
import {StyledSection,StyledFlexDiv} from '../HomePage/StyledHomePage'
import styled from 'styled-components'
import phone from '../../assets/images/app-iPhone.png'
import apple_logo from '../../assets/images/download-app.svg'
import android_logo from '../../assets/images/download-app-android.png'
import Footer from '../../component/Footer/Footer'

const StyledHowItWorksDiv = styled(StyledFlexDiv)`

    align-items:center;
    flex-wrap:wrap;
    .phone-img{
        width:50%;
        text-align:center;
        img {
            height:400px;
            width:auto;
        }
    }
    
    .work-steps{
        width:50%;
        .work-step{
            margin:auto;
            display:flex;
            align-items:center;
            p {
                width:70%;
                margin:1rem 1rem;
            }
            div {
                height:2rem;
                width:2rem;
                border: 1px solid #e67e22;
                border-radius:50%;
                text-align:center;
            }
        }

        .work-step-logos{
            display:flex;
            justify-content:space-around;
            margin-top:30px;
            img {
                width:20%;
                height:auto;
                border-radius:5px;
            }
        }

    }
    @media only screen and (max-width:767px) {
        flex-direction:column;

        .phone-img{
            width:80%;
        }

        .work-steps{
            width:80%;
        }
    }


`


const howITWorks = () => {
    
    return (
        <React.Fragment>
            <StyledSection>
                <h2>How it works - Simple as 1 2 3</h2>
                <StyledHowItWorksDiv>
                    <div className="phone-img">
                        <img src={phone} alt="phone"></img>
                    </div>
                    
                    <div className="work-steps">
                        <div className="work-step">
                            <div>1</div>
                            <p>Choose the subscription plan that best fits your needs and sign up today.</p>
                        </div>
                        <div className="work-step">
                            <div>2</div>
                            <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                        </div>
                        <div className="work-step">
                            <div>3</div>
                            <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                        </div>
                        <div className="work-step-logos">
                            <img src={apple_logo} alt="app store"></img>
                            <img src={android_logo} alt="android store"></img>
                        </div>
                    </div>
                </StyledHowItWorksDiv>
            </StyledSection>
            <Footer/>
        </React.Fragment>
    )
}


export default howITWorks;