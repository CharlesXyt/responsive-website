import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    height:300px;
    width:60%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:20px;

    div {
        display:flex;
        width:100%;
        label {
            width:33%;
            display:block;
        }

        input::placeholder {
            font-size:1rem;
        }

        input[type='text'],
        input[type='email'],
        textarea{
            width:40%;
            padding:3px;
        }
        select {
            width:20%;
            font-size:1rem;
        }
    }

    button {
        margin:0 auto;
        width:100px;
        padding:10px 15px;
        font-size:1rem;
        border:1px solid #ccc;
        border-radius:30%;
        background-color:#e67e22;
        color:white;
        transition:hover .2s ease-in;
        &:hover{
            background-color:#924d10;
        }
    }

    @media only screen and (max-width:767px){
        width:90%;
        div{
            justify-content:flex-start;
            label{
                width:40%;
            }
        }
    }
` 

export default () => (

    <StyledForm action="/submit">
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name"required/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" placeholder="Email"required/>
        </div>
        <div>
            <label htmlFor="howfind">How did you find us</label>
            <select id="howfind" required>
                <option value="friend">Friend</option>
                <option value="school">School</option>
                <option value="parent">Parent</option>
            </select>
        </div>
        <div>
            <label htmlFor="newsletter">Newsletter?</label>
            <input  id="newsletter" type="checkbox" defaultChecked/>Yes, please
        </div>
        <div>
            <label htmlFor="dropline">Drop us a line</label>
            <textarea id="dropline" required/>
        </div>
        <button type="submit">Send it!</button>
    </StyledForm>
)