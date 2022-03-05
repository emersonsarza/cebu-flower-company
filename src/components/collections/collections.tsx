import { FunctionComponent } from 'react';

import Item from '../item';

import { Container, CollectionsContiner, ItemContiner } from './styles';
import { ICollections } from './types';

const Collections: FunctionComponent<ICollections> = ({ items }) => {
  return (
    <Container>
      <CollectionsContiner>
        {items.map((item) => (
          <ItemContiner key={item.name}>
            <Item {...item} />
          </ItemContiner>
        ))}
      </CollectionsContiner>
    </Container>
  );
};

export default Collections;
