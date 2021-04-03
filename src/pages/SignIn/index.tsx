import React from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
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
          <Title>Faça seu logon</Title>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              console.log('entrou');
            }}
          >
            Entrar
          </Button>
          <ForgotPasswordButton onPress={() => {
            console.log('Forgot');
          }}
          >
            <ForgotPasswordButtonText>Esqueci minha senha</ForgotPasswordButtonText>
          </ForgotPasswordButton>
        </Container>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => {
        navigation.navigate('SignUp');
      }}
      >
        <Icon name="log-in" size={20} color="#9B51E0" />
        <CreateAccountButtonText>
          Crie sua conta
        </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
