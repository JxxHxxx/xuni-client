import { styled } from 'styled-components';

export const LayOut = styled.div`
    background-color: white;

    font-size: 2.25rem;
    box-shadow: 0px 1px 10px;

    position: fixed;
    top:0px;
    left:0px;
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

export const Item = styled.span`
    margin-left: 1rem;

    font-size: 1.5rem;

    &:hover {
        font-weight: 500;
    }
`

export const ElementBottomOfNavigation = styled.div`
    padding-top: 3rem;
`
