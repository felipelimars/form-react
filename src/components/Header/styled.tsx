import styled from "styled-components"

export const Container = styled.header`
height: 18vh;
display: flex;
justify-content: center; 
align-items: center;
background-color: #ffff; 
position: fixed;
width: 100%;
box-shadow: 0px 4px 8px 0px rgba(133, 133, 133, 0.5);
`;

export const LogoStyle = styled.img`
width: auto;
height: 12vh;
`


export const ButtonBack = styled.div`
color: #4A4A4A;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 2vh;
  cursor: pointer;
  position: absolute;
  left: 4vh;
  padding-bottom: 3px; 
  
  &::after { 
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color:#4A4A4A;
    bottom: 0; 
    right: 0; 
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%; 
  }
`

