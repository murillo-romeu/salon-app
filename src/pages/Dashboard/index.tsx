import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Container, Header, HeaderTitle, UserName, ProfileButton, UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem Vindo,
          {' '}
          {'\n'}
          <UserName>{user.name}</UserName>
        </HeaderTitle>
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar source={{ uri: user.avatar_url_app }} />
        </ProfileButton>
      </Header>
    </Container>
  );
};

export default Dashboard;
