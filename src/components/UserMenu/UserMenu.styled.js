import styled from 'styled-components';
import { TiContacts } from 'react-icons/ti';

export const MenuContainer = styled.div`
  padding: 20px 32px;
  border-bottom: 1px solid #afa2cd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledIcon = styled(TiContacts)`
  fill: #805ad5;
  width: 40px;
  height: 40px;
`;

export const StyledUser = styled.p`
  color: #270375;
`;
