import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { TextInputProps } from '../../interfaces/TextInputProps';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  width: 90%;
  height: 85%;
`;

export const InputField = styled.TextInput<TextInputProps>`
  width: 100%;
  height: ${({isMultiline}) => isMultiline ? '14%': '7%'};
  font-family: 'GeneralSans400';
  border-radius: 20px;
  padding: 10px 15px;
  margin-top: 10px;
  font-size: 20px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  border: ${({isFocused}) => isFocused ? '1px solid #FF473A': '1px solid #FFF'}
`;

export const UseGpsView = styled.View`
  flex-direction: row;
  margin-top: 5%;
`;

export const ButtonGps = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  margin-left: 5%;
`;
