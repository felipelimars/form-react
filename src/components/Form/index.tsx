import React, { useState } from 'react';
import axios from 'axios';
import {
  ButtonContainer,
  ButtonRegistered,
  ButtonSave,
  Complement,
  Container,
  InputStyle,
} from './styled';
import { useNavigate } from 'react-router-dom';
import { goToListPage } from '../../routes/coordinator';

const Form: React.FC = () => {
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');

  const navigate = useNavigate();

  // Função para mudar de página
  const handleGoToListPage = () => {
    goToListPage(navigate);
  };

  const checkCEP = () => {
    const cepDigits = cep.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP
    if (cepDigits.length === 8) { // Verifica se o CEP tem 8 dígitos
      axios
        .get(`https://viacep.com.br/ws/${cepDigits}/json/`)
        .then((response) => {
          const data = response.data;
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setCidade(data.localidade);
          setUf(data.uf);
          document.getElementById('numero')?.focus();
        })
        .catch((error) => {
          // Lide com o erro aqui
          console.error(error);
        });
    }
  };

  return (
    <>
      <Container onSubmit={checkCEP}>
        <div>
          <InputStyle
            placeholder='Nome:'
            type="text"
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <InputStyle
            placeholder='Apelido:'
            type="text"
            id="apelido"
            required
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />
        </div>
        <div>
          <InputStyle
            placeholder='CEP:'
            type="text"
            id="cep"
            required
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={checkCEP} // Adicione o evento onBlur para acionar a busca do CEP
          />
        </div>
        <div>
          <InputStyle
            placeholder='UF:'
            type="text"
            id="uf"
            required
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
        </div>
        <div>
          <InputStyle
            placeholder='Cidade:'
            type="text"
            id="cidade"
            required
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
        <div>
          <InputStyle
            placeholder='Logradouro:'
            type="text"
            id="logradouro"
            required
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />
        </div>
        <div>
          <InputStyle
            placeholder='Bairro:'
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
            placeholder='Complemento:'
            type="text"
            id="complemento"
            required
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
      </Container>
      <ButtonContainer>
        <ButtonSave type="submit">SALVAR</ButtonSave>
        <ButtonRegistered onClick={handleGoToListPage}>LISTAGEM</ButtonRegistered>
      </ButtonContainer>
    </>
  );
};

export default Form;
