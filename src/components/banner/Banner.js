import React from 'react';

import { Description, Container, TextContainer, Title } from './Banner.styles';

const Banner = ({
  split,
  img,
  backgroundColor,
  textColor,
  title,
  description,
}) => {
  return img && title && description ? (
    <Container img={img} backgroundColor=''>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  ) : (
    <></>
  );
};

export default Banner;
