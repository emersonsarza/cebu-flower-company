import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  background-image: linear-gradient(
    to right,
    ${COLORS.LIGHT_BROWN},
    ${COLORS.LIGHT_BROWN},
    ${COLORS.BROWN}
  );
`;

export const Details = styled.div`
  width: 100%;
  padding: 50px 100px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  row-gap: 3rem;
`;

export const CompanyInfo = styled.div`
  display: flex;
`;
export const CompanyDetails = styled.div`
  border-left: 1px solid #333333;
  margin-left: 10px;
  padding-left: 10px;
`;

export const SocialContainer = styled.div`
  padding: 10px 0 0 0;
  & > * {
    margin-right: 10px;
  }
`;

export const Links = styled.div``;
export const LinkItem = styled.div`
  margin-top: 6px;
  &:hover {
    font-weight: normal;
    cursor: pointer;
  }
`;

export const CompanyName = styled.div`
  letter-spacing: 1px;
  font-size: 12px;
  padding: 16px;
`;
