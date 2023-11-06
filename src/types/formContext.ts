export interface FormContextType {
    checkCEP: () => void;
    nome: string;
    setNome: (value: string) => void;
    apelido: string;
    setApelido: (value: string) => void;
    cep: string;
    setCep: (value: string) => void;
    uf: string;
    setUf: (value: string) => void;
    cidade: string;
    setCidade: (value: string) => void;
    logradouro: string;
    setLogradouro: (value: string) => void;
    bairro: string;
    setBairro: (value: string) => void;
    numero: string;
    setNumero: (value: string) => void;
    complemento: string;
    setComplemento: (value: string) => void;
    handleSubmit: () => void;
    cadastros: Cadastro[];
    autoCompleted: boolean;
    handleManualChange: () => void;
    validateForm: () => boolean;
}

export interface Cadastro {
    id: string;
    nome: string;
    apelido: string;
    cep: string;
    uf: string;
    cidade: string;
    logradouro: string;
    bairro: string;
    numero: string;
    complemento: string;
    autoCompleted: boolean;
}

  export type CardLineProps = {
    id: string;
    nome: string;
    cep: string;
    autoCompleted: boolean;
};