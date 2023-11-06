import { createContext, ReactNode, useState } from "react";
import { FormContextType, Cadastro } from "../types/formContext";
import axios from "axios";

export const UseFormContext = createContext<FormContextType | undefined>(undefined);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cadastros, setCadastros] = useState<Cadastro[]>([]); 
  const [autoCompleted, setAutoCompleted] = useState(false);

  const checkCEP = () => {
    const cepDigits = cep.replace(/\D/g, "");
    if (cepDigits.length === 8) {
      axios.get(`http://localhost:3001/cep/${cepDigits}`)
        .then((response) => {
          const data = response.data;
  
          if (!data.erro) {
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setUf(data.uf);
            setAutoCompleted(true);
            document.getElementById("numero")?.focus();
          } else {
            resetAddressFields();
          }
        })
        .catch((error) => {
          console.error(error);
          resetAddressFields();
        });
    } else {
      resetAddressFields();
    }
  };
  
  const resetAddressFields = () => {
    setLogradouro('');
    setBairro('');
    setCidade('');
    setUf('');
    setAutoCompleted(false);
  };

  const handleManualChange = () => {
    if (autoCompleted) setAutoCompleted(false);
  };

  const clearForm = () => {
    setNome("");
    setApelido("");
    setCep("");
    setUf("");
    setCidade("");
    setLogradouro("");
    setBairro("");
    setNumero("");
    setComplemento("");
  };

  const validateNome = () => nome && nome.length >= 3 && nome.length <= 20;
  const validateCEP = () => cep && cep.replace(/\D/g, '').length === 8;
  const validateUF = () => uf && uf.length === 2;
  const validateCidade = () => cidade && cidade.length <= 15;
  const validateLogradouro = () => logradouro && logradouro.length <= 50;
  const validateBairro = () => bairro && bairro.length <= 20;
  const validateNumero = () => numero && !isNaN(Number(numero)) && numero.length <= 6;
  const validateComplemento = () => complemento && complemento.length <= 40;
  const areAllFieldsEmpty = () => {
    return (
      !nome.trim() &&
      !cep.trim() &&
      !uf.trim() &&
      !cidade.trim() &&
      !logradouro.trim() &&
      !bairro.trim() &&
      !numero.trim() &&
      !complemento.trim()
    );
  };
  
  const validateForm = () => {
    if (areAllFieldsEmpty()) {
      alert("Preencha todos os campos");
      return false;
    }
  
    if (!validateNome()) {
      alert("Preencha o campo 'Nome' deve ter entre 3 e 30 caracteres.");
      return false;
    }
    if (!validateCEP()) {
      alert("Preencha o campo 'CEP', deve conter 8 dígitos numéricos.");
      return false;
    }
    if (!validateUF()) {
      alert("Preencha o campo 'UF', deve ter 2 caracteres.");
      return false;
    }
    if (!validateCidade()) {
      alert("Preencha o campo 'Cidade', deve ter no máximo 15 caracteres.");
      return false;
    }
    if (!validateLogradouro()) {
      alert("Preencha o campo 'Logradouro', deve ter no máximo 50 caracteres.");
      return false;
    }
    if (!validateBairro()) {
      alert("Preencha o campo 'Bairro', deve ter no máximo 20 caracteres.");
      return false;
    }
    if (!validateNumero()) {
      alert("Preencha o campo 'Número', deve ser numérico e ter no máximo 6 dígitos.");
      return false;
    }
    if (!validateComplemento()) {
      alert("Preencha o campo 'Complemento', deve ter no máximo 40 caracteres.");
      return false;
    }
    return true;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      const novoCadastro = {
        id: Date.now().toString(),
        nome,
        apelido,
        cep,
        uf,
        cidade,
        logradouro,
        bairro,
        numero,
        complemento,
        autoCompleted,
      };
      setCadastros((currentCadastros) => [...currentCadastros, novoCadastro]);
      clearForm();
    }
  };

  return (
    <UseFormContext.Provider
      value={{
        checkCEP,
        nome,
        setNome,
        apelido,
        setApelido,
        cep,
        setCep,
        uf,
        setUf,
        cidade,
        setCidade,
        logradouro,
        setLogradouro,
        bairro,
        setBairro,
        numero,
        setNumero,
        complemento,
        setComplemento,
        handleSubmit,
        cadastros,
        autoCompleted,
        handleManualChange,
        validateForm
      }}
    >
      {children}
    </UseFormContext.Provider>
  );
};

export default FormProvider;
