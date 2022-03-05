import styled from 'styled-components';

import { ILogo } from './types';
import { LOGO_SIZE } from '../../constants/colors';
export const Container = styled.div<ILogo>`
  height: ${({ size = LOGO_SIZE.MEDIUM }) => size};
  width: ${({ size = LOGO_SIZE.MEDIUM }) => size};
`;
