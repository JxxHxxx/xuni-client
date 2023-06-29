
import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-left : 10rem;
    margin-right: 10rem;
`

export const Item = styled.div`
    width: 300px;
    height: 300px;

    border: 1px solid black;
    margin: 4px;
    box-shadow: 1px 1px 10px;

    &:hover {
      background-color: tomato;
      color: black;
    }
`

export const Title = styled.h1`
  margin-left : 10rem;
  grid-column: 1 / -1;
`