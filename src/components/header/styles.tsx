import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #333333;
`;

export const CompanyLogo = styled.div`
  opacity: 0.8;
`;

export const CompanyName = styled.div`
  font-weight: 700;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MenuItem = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  color: #333333;
  padding: 16px;

  &:hover {
    color: ${COLORS.DARK_PINK};
  }
`;
