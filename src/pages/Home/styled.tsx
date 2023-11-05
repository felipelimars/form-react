import styled from "styled-components"

export const Container = styled.section`
height: 100vh;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
`
export const CarImg = styled.img`
width: auto;
height: 74vh;
margin-top: 18.5vh;
margin-left: 2vw;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5), 
            0px 4px 8px 0px rgba(133, 133, 133, 0.5); 

`
export const FormContainer = styled.section`
height: 74vh;
width: 84vw;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 18.5vh;
margin-right: 2vw;
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5);
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
`
export const Title = styled.h1`
font-size: 4vh;
font-family: 'Montserrat Classic', sans-serif;
color: #0F5387;
margin-right: 5vh;
margin-top: 3vh
`