import styled from 'styled-components';

export const Container = styled.div`
    width: 100%:
    display: flex;  
    flex-direction: column;
`;

export const CollectionsContiner = styled.div`
  padding: 24px 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 3rem;
`;

export const ItemContiner = styled.div`
  display: flex;
  justify-content: center;
`;
