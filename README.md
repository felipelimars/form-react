# Form-react

### Sobre o projeto

Form-react é uma aplicação Front-end vinculada com uma API e construída para um case de processo seletivo.

Esse projeto tem como base fundamentos do React. O objetivo é criar um formulário onde o usuário vai digitar seus dados pessoais e de endereço, e ao preencher o cep, se o endereço existir na API ViaCEP ele vai auto completar os campos de endereço automaticamente.
O formulário contém diversas validações de input como regras de negócio. Por fim, se tudo estiver certo e o usuário clicar no botão salvar,
ele irá para uma página contendo a listagem de usuários e seus respectivos dados.

* Bonus: desenvolver uma API que encapsule o serviço da ViaCEP e fazer a aplicação frontend bater nesta API para obter o endereço pelo CEP.

[API desenvolvida para o projeto.](https://documenter.getpostman.com/view/28315812/2s9YXh536j)

[Video demonstrativo do site.](https://www.youtube.com/watch?v=-eVYSJPBTP4)


## Layout web

![Web 1](https://github.com/felipelimars/form-react/blob/main/src/assets/1.png)
![Web 2](https://github.com/felipelimars/form-react/blob/main/src/assets/2.png)

# Tecnologias utilizadas
[![My Skills](https://skillicons.dev/icons?i=ts,nodejs,react,express)](https://skillicons.dev)


## Front-end
- React 
- Styled Components

## Back-end
- Typescript
- NodeJS 
- ExpressJS

* Criação da API


# Como executar o projeto

Executar o servidor Front-end e Back-End

Pré-requisitos: npm / node

```bash / terminal

# clonar repositório
git clone https://github.com/felipelimars/form-react.git

# mudar para pasta raiz
cd my app

# instalar dependências
npm install

# executar o projeto
npm run dev

# mudar para pasta api
cd api

# executar o servidor
npm start
```
Pronto! Agora os dois servidores estão em execução e você pode visualizar o projeto.
Caso queira executar somente a API criada, você pode repetir o processo a cima e executar a API com o programa de sua preferencia. 


# Autor

Felipe Lima

https://www.linkedin.com/in/felipelimars
