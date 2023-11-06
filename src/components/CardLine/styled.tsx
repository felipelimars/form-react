import styled from "styled-components"

export const CardContainer = styled.section`
  height: 8vh;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  align-items: center;
  text-align: center;
  background-color: #fff;
  border-radius: 10px; 
  padding: 0 10vh;
  margin-bottom: 1vh;
  color: #4F4F4F;
`;

export const CardName = styled.p`
  flex: 0 0 30%; 
  text-align: left;
`;

export const CardCEP = styled.p`
  flex: 0 0 40%; 
  text-align: center;
  margin-left: 2vh;
`;

export const CardStatus = styled.p`
  flex: 0 0 30%; 
  text-align: right;
  margin-right: 1.4vh;
`;
