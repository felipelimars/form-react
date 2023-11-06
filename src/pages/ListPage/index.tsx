import { useContext } from "react";
import CardLine from "../../components/CardLine"; // Certifique-se de que o caminho para o componente está correto
import Header from "../../components/Header";
import { UseFormContext } from "../../hooks/useFormContext";
import { CEP, Container, ContainerList, EmptyMessage, Name, New } from "./styled";

const ListPage = () => {
  const formContext = useContext(UseFormContext);

  if (!formContext) {
    return <div>Nenhum cadastro encontrado.</div>; // Ou alguma outra representação de estado vazio
  }

  return (
    <>
      <Header />
      <Container>
  {formContext.cadastros.length > 0 ? (
    <>
      <ContainerList>
        <Name>Nome</Name>
        <CEP>Cep</CEP>
        <New>Novo</New>
      </ContainerList>
      {formContext.cadastros.map((cadastro) => (
        <CardLine
          key={cadastro.id}
          id={cadastro.id}
          nome={cadastro.nome}
          cep={cadastro.cep}
          autoCompleted={cadastro.autoCompleted}
        />
      ))}
    </>
  ) : (
    <EmptyMessage>Listagem vazia.</EmptyMessage>
  )}
</Container>

    </>
  );
};

export default ListPage;
