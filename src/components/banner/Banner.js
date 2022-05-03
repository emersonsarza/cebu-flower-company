import React, { useRef } from 'react';
import useIntersection from '../../utils/useIntersection';

import {
  Image,
  Description,
  Container,
  TextContainer,
  Title,
} from './Banner.styles';

const Banner = ({
  split,
  img,
  backgroundColor = '#78c07a',
  textColor = '#ffffff',
  title,
  description,
  imgPosition = 'left',
}) => {
  const ref = useRef();
  const isVisible = useIntersection(ref);

  return img && title && description ? (
    <Container
      visible={isVisible}
      ref={ref}
      img={img}
      split={split}
      textColor={textColor}
      backgroundColor={backgroundColor}
      className={split && 'grid grid-cols-1 lg:grid-cols-2'}
    >
      {split && imgPosition === 'left' && <Image src={img} />}
      <TextContainer split={split}>
        <Title>{title}</Title>
        <Description className={!split && 'md:w-1/2'}>
          {description}
        </Description>
      </TextContainer>
      {split && imgPosition === 'right' && <Image src={img} />}
    </Container>
  ) : (
    <></>
  );
};

export default Banner;
