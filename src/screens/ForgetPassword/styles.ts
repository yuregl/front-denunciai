import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { TextInputProps } from '../../interfaces/TextInputProps';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  flex: 1;
  background-color: #EEEEEE;
  align-items: center;
`;

export const ImageLogin = styled.Image`
  width: 300px;
  height: 60px;
  resize: both;
  margin-top: 15%;
`;

export const Form = styled.View`
  align-items: center;
  width: 85%;
  height: 25%;
  margin-top: 10%;
`;

export const InputField = styled.TextInput<TextInputProps>`
  width: 95%;
  height: 25%;
  font-family: 'GeneralSans400';
  border-radius: 20px;
  padding: 0 15px;
  margin-top: 30px;
  font-size: 20px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  border: ${({isFocused}) => isFocused ? '1px solid #FF473A': '1px solid #FFF'}
`;

export const AreaButton = styled.View`
  width: 90%;
  height: 35%;
`;
