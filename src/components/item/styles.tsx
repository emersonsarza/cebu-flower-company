import styled from 'styled-components';

import { COLORS } from '../../constants/colors';
import { IItem } from './type';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  padding: 0 0 18px 18px;
  background-color: ${COLORS.BROWN};
  border-radius: 2px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.div<Pick<IItem, 'src'>>`
  background: url('${({ src }) => src}'),
    linear-gradient(to right, #e3e5e8, #dfdade);
  border-radius: 2px;
  background-size: cover;
  background-position: center;
  width: 320px;
  height: 400px;
  position: relative;
`;

export const Name = styled.div`
  background-image: linear-gradient(to right, transparent, ${COLORS.BROWN});
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  padding: 12px 12px 12px 50px;
  bottom: 24px;
  right: 0px;
  color: #eeeeee;
`;

export const Price = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #555555;
  text-align: center;
  padding: 12px;
`;

export const Description = styled.div`
  width: 320px;
  text-transform: uppercase;
  font-size: 14px;
  text-align: center;
  color: #555555;
  padding: 0 12px;
`;
