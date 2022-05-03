import React, { useRef } from 'react';
import useIntersection from '../../utils/useIntersection';

import { Description, Container, TextContainer, Title } from './Banner.styles';

const Banner = ({
  split,
  img,
  backgroundColor,
  textColor,
  title,
  description,
}) => {
  const ref = useRef();
  const isVisible = useIntersection(ref);

  return img && title && description ? (
    <Container visible={isVisible} ref={ref} img={img} backgroundColor=''>
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
