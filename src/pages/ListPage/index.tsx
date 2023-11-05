import React from 'react'
import Header from '../../components/Header'
import { CEP, Container, ContainerList, Endereco, Nome } from './styled'

const ListPage = () => {
  return (
    <>
    <Header/>
    <Container>
        <ContainerList>
      <Nome>
        Nome
      </Nome>
      <CEP>
        CEP
      </CEP>
      <Endereco>
        Endereço
      </Endereco>
    </ContainerList>
    </Container>
    </>
  )
}

export default ListPage