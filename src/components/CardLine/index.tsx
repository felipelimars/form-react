import React from 'react';
import { CardLineProps } from '../../types/formContext';
import { CardCEP, CardContainer, CardName, CardStatus } from './styled';

const CardLine: React.FC<CardLineProps> = ({ nome, cep, autoCompleted }) => {
  return (
    <div>
      <CardContainer>
      <CardName>{nome}</CardName> 
      <CardCEP>{cep}</CardCEP> 
      <CardStatus>{autoCompleted ? 'Não' : 'Sim' }</CardStatus>
      </CardContainer> 
   </div>
  );
};

export default CardLine;
