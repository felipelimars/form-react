import styled from "styled-components"

export const Container = styled.form`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffff;
`
export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Define três colunas de largura igual */
  gap: 10px; /* Espaçamento entre as colunas */
  padding: 20px; /* Espaçamento interno do container */
`;

export const Nome = styled.div`

`;

export const CEP = styled.div`

`;

export const Endereco = styled.div`

`;