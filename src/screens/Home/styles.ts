import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
  flex: 1;
  background-color: #EEEEEE;
  align-items: center;
`;

export const SearchBarView = styled.View`
  width: 90%;
  height: 7%;
  flex-direction: row;
  border-radius: 20px;
  padding: 0 0 0 15px;
  font-size: 20px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  border: ${(() => '1px solid #FF473A')};
`;

export const SearchBar = styled.TextInput`
  width: 85%;
  height: 100%;
`;

export const ButtonSearch = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SeparatorItem = styled.View`
  width: 100%;
  height: 1%;
  margin-top: 5px;
  background-color: rgba(204,204,204, 0.3);
`;

export const ComplaintsContainer = styled.View`
  width: 90%;
  height: 95%;
`;

export const Complaints = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ImageComplaint = styled.Image`
  width: 150px;
  height: 96px;
  border-radius: 8px;
`;

export const ComplaintsDescription = styled.View`
  margin-left: 16px;
  flex: 1
`;

export const WithoutComplaints = styled.View`
  flex: 1;
  align-items: center;
  justify-content : center;
  margin: 0 5%;
`;
