import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  background: #cc0166;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const FBContainer = styled(RectButton)`
  height: 46px;
  background: #3b5998;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
