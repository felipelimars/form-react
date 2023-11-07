import {
  ButtonContainer,
  ButtonRegistered,
  ButtonSave,
  Complement,
  Container,
  InputStyle,
} from "./styled";
import { UseFormContext } from "../../hooks/useFormContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToListPage } from "../../routes/coordinator";

const Form: React.FC = () => {
  const formContext = useContext(UseFormContext);
  const navigate = useNavigate();
  const handleGoToListPage = () => {
    goToListPage(navigate);
  };

  if (formContext) {
    const {
      checkCEP,
      nome,
      setNome,
      apelido,
      setApelido,
      cep,
      setCep,
      uf,
      cidade,
      logradouro,
      bairro,
      numero,
      complemento,
      setUf,
      setLogradouro,
      setBairro,
      setNumero,
      setCidade,
      setComplemento,
      handleSubmit,
      validateForm
    } = formContext;

    const onButtonSaveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     event.preventDefault(); 
      if (!validateForm()) {
      return  
      }else{
        handleSubmit();
        handleGoToListPage();
      }
    };

  return (
      <>
        <Container>
          <div>
            <InputStyle
              placeholder="Nome completo:"
              type="text"
              id="nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div>
            <InputStyle
              placeholder="Apelido:"
              type="text"
              id="apelido"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
            />
          </div>
          <div>
            <InputStyle
              placeholder="CEP:"
              type="text"
              id="cep"
              required
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              onBlur={checkCEP}
            />
          </div>
          <div>
            <InputStyle
              placeholder="UF:"
              type="text"
              id="uf"
              required
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <div>
            <InputStyle
              placeholder="Cidade:"
              type="text"
              id="cidade"
              required
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div>
            <InputStyle
              placeholder="Logradouro:"
              type="text"
              id="logradouro"
              required
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
            />
          </div>
          <div>
            <InputStyle
              placeholder="Bairro:"
              type="text"
              id="bairro"
              required
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div>
            <InputStyle
              placeholder="Número:"
              type="text"
              id="numero"
              required
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div>
            <Complement
              placeholder="Complemento:"
              type="text"
              id="complemento"
              required
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
        </Container>
        <ButtonContainer>
          <ButtonSave onClick={onButtonSaveClick}>
            SALVAR
          </ButtonSave>
          <ButtonRegistered onClick={handleGoToListPage}>
            LISTAGEM
          </ButtonRegistered>
        </ButtonContainer>
      </>
    );
  }

  return null;
  
};

export default Form;
