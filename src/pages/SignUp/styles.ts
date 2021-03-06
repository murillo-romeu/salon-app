import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #E7D0F1;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;
export const BackToSignInButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: #232129;
  background: #2e2c30;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-family: "RobotoSlab-Regular";
  margin-left: 16px;
`;
