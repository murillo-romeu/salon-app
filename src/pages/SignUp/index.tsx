import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackToSignInButtonText,
  BackToSignInButton,
} from './styles';
import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Container>
          <Image source={logoImg} />
          <Title>Faça seu cadastro</Title>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              console.log('entrou');
            }}
          >
            Entrar
          </Button>
        </Container>
      </KeyboardAvoidingView>
      <BackToSignInButton onPress={() => {
        navigation.goBack();
      }}
      >
        <Icon name="arrow-left" size={20} color="#ffffff" />
        <BackToSignInButtonText>
          Voltar para o logon
        </BackToSignInButtonText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
