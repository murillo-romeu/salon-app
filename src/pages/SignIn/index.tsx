import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './styles';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Title>Acesso ao app.</Title>
  </Container>
);

export default SignIn;
