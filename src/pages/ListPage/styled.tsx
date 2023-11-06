import styled from "styled-components"

export const Container = styled.section`
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
background-color: #EFF2F5;
`
export const ContainerList = styled.div`
display: flex;
justify-content: space-between;
width: 70vw;
margin-top: 30vh;
margin-bottom: 5vh;
font-weight: bold;
`;

export const Name = styled.p`
color: rgb(128, 129, 132);
`;

export const CEP = styled.p`
color: rgb(128, 129, 132);
`;

export const New = styled.p`
color: rgb(128, 129, 132);
`;

export const EmptyMessage = styled.p`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50vh;
color: rgb(128, 129, 132);
font-weight: bold;
`