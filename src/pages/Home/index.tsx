import Car from "../../assets/car.jpg"
import Form from "../../components/Form"
import Header from "../../components/Header"
import { CarImg, Container, FormContainer, Title } from "./styled"

const Home = () => {
  return (
        <>
        <Header/>
        <Container>
        <CarImg src={Car} alt="Farol" />
        <FormContainer>
        <Title>FORMULÁRIO</Title>
        <Form/>
        </FormContainer>
        </Container>
        </>
  )
}

export default Home