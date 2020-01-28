import styled from 'styled-components'


const StyledCityDiv = styled.div`
    width:22%;
    display:flex;
    flex-direction:column;
    margin:1rem auto;
    img {
       width:100%;
       height:auto;
    }

    .icon-element{
        display:flex;
        align-items:center;
        margin-bottom:10px;
        .icon-cities {
            margin-right:10px;
            color:#e67e22;
            font-size:1.5rem;
        }
        a:link,a:visited{
            text-decoration:none;
            color:#e67e22;
            padding-bottom:1px;
            border-bottom:1px solid #e67e22;
            transition: all .2s ease-in;
        }

        a:hover,a:active {
            color:#555;
            border-bottom: 1px solid transparent;
        }

        &:last-child{
            margin-bottom:0px;
        }
    }

    @media only screen and (max-width:1200px){
        width:40%;
    }

    @media only screen and (max-width:767px){
        width:80%;
    }
}
    

`


export {
    StyledCityDiv
}