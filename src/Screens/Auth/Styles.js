import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';
import FacebookButton from '../../Components/Button/FbButton';


export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 15px;
  height: 46px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  border: 1px;
  border-color:#d6d6d6
`;

export const FormInput = styled(Input)`
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
`;
export const FacebookLogin = styled(FacebookButton)`
  margin-top: 15px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
`;