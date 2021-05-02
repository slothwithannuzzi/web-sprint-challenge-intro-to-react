import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Write your Character component here

export default function Character(props) {
const { data } = props;
console.log(data)
const Container = styled.div`
background-color: white;
opacity: 0.6;
`

const Details = styled.div`
display:flex;
flex-direction: column;
`

return(
    <Container>
        <h2>{data.name}</h2>
        <Details>
            <span>Gender: {data.gender}</span>
            <span>Height: {data.height}</span>
            <span>Mass: {data.mass}</span>
            <span>Birth Year:{data.birth_year}</span>
            <span>Eye Color: {data.eye_color}</span>
            <span>Hair Color: {data.hair_color}</span>
            <span>Skin Color: {data.skin_color}</span>
        </Details>
    </Container>
)

}