import styled from 'styled-components/native';

export const Overlay = styled.View`
  background: rgba(0, 0, 0, 0.6);
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 24px;
`;

export const ModalBody = styled.View`
  background: #FAFAFA;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
`;

export const ButtonArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
