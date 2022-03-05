import { FunctionComponent } from 'react';

import { IItem } from './type';
import NumberFormat from 'react-number-format';

import {
  Container,
  Description,
  Image,
  ImageContainer,
  Name,
  Price,
} from './styles';

const Item: FunctionComponent<IItem> = ({ name, src, description, price }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={src}>
          <Name>{name}</Name>
        </Image>
      </ImageContainer>
      <Price>
        <NumberFormat
          value={price}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'₱'}
        />
      </Price>
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
