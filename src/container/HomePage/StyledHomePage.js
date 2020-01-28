import styled from 'styled-components'




const StyledSection = styled.section`
    width:80%;
    margin:2rem auto;

    h2 {
        font-size:1.8rem;
        text-align:center;
        word-spacing:2px;
        margin-bottom:30px;
        font-weight:300;
        text-transform:uppercase;

        &:after {
            display:block;
            height:2px;
            content:" ";
            background-color:#e67e22;
            width:5rem;
            margin:1.5rem auto;
        }
    }

    .section-0_content {

        p{
            line-height:1.5rem;
            width:70%;
            margin:auto;
            margin-bottom:1.5rem;
        }
    }

    .section-1_content{
        width:22%;
        margin:auto;
        p{
            font-size:1rem;
        }

        .icon-font {
            font-size:1.5rem;
            color:#e67e22;
        }

        @media only screen and (max-width:1200px){
            width:40%;
        }

        @media only screen and (max-width:767px){
            width:80%;
        }
    }

`
const StyledFlexDiv = styled.div`

    display:flex;

    flex-flow:row wrap;

`
const StyledSectionFull = styled(StyledSection)`
    width:100%;
    margin-bottom:0;
`

export {StyledSection,StyledFlexDiv,StyledSectionFull}