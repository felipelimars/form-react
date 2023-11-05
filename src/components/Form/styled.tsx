import styled from "styled-components"

export const Container = styled.form`
height: 35vh;
width: 40vw;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
background-color: #ffff;
`
export const ButtonContainer = styled.form`
height: 16vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const ButtonSave = styled.button`
  width: 35vw;
  height: 40px;
  color: #fff;
  background-color:rgb(10, 52, 84);  
  border: none;
  cursor: pointer;
  margin-right: 5vh;
  margin-bottom: 1vh;
  transition: background-color 0.3s ease;
  font-family: 'Montserrat Classic', sans-serif;
  font-size: 1.5vh;
  &:hover {
    background-color: #0F5387; 
  }
`
export const ButtonRegistered = styled.button`
  width: 35vw;
  height: 40px;
  color: #fff;
  background-color:rgb(10, 52, 84);  
  border: none;
  cursor: pointer;
  margin-right: 5vh;
  margin-bottom: 2vh;
  transition: background-color 0.3s ease;
  font-family: 'Montserrat Classic', sans-serif;
  font-size: 1.5vh;
  &:hover {
    background-color: #0F5387; 
  }
`
export const InputStyle = styled.input`
  height: 2vh;
  width: 16vw;
  margin-right: 5vh;
  margin-bottom: 5vh;
  background-color: transparent;
  font-size: 2vh;
  outline: none;
  font-family: 'Montserrat Classic', sans-serif;
  border: none;
  border-bottom: 1px solid gray;
  transition: border-color 0.3s;

  &:focus {
    border-color: blue;
  }
`;

export const Complement = styled.input`
  height: 2vh;
  width: 34.5vw;
  margin-right: 5vh;
  background-color: transparent;
  font-size: 2vh;
  outline: none;
  font-family: 'Montserrat Classic', sans-serif;
  border: none;
  border-bottom: 1px solid gray;
  transition: border-color 0.3s;

  &:focus {
    border-color: blue;
  }
`;