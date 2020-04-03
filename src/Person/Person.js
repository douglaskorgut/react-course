import React from "react";
import './Person.css';
import styled from 'styled-components'

const person = (props) => {

    const StyledDiv = styled.div`
                width: 60%;
                margin: auto;
                border: 2px solid #eeeeee;
                box-shadow: 0 3px 3px #ccc;
                padding: 16px;
                text-align: center;
                               
               '@media (min-width: 500px)':{
                     width: '450px'
                }
                `;

    return (
        <StyledDiv>
            <p onClick={props.click}> My name is {props.name}! and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </StyledDiv>

    )
};

export default person;
