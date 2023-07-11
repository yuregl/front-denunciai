import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.TouchableOpacity`
  background-color: #FF473A;
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 10px 20px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.2});
`;
