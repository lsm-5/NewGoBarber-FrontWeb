import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu login</h1>

        <input placeholder="E-mail" />

        <input type="password" placeholder="Senha" />

        <button type="submit">Entrar</button>

        <a href="easdsa">Esqueci a senha</a>
      </form>

      <a href="dasdas">
        <FiLogIn size={20} />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
