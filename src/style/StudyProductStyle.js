import styled from 'styled-components'; 

export const LayOut = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열을 생성합니다. */
    grid-gap: 16px; /* 아이템 사이의 간격을 설정합니다. */
`
export const StudyProductItem = styled.section`
    flex: 0 0 calc(50% - 8px); /* 아이템의 너비 설정 (반 너비로 배치, 간격 제외) */
    margin: 4px; /* 아이템 간격 설정 */

    width: 400px;
    height: 150px;
    border: 1px solid black;
    box-shadow: 5px 5px 20px;
    margin: auto;
    margin-bottom: 30px;
    /* &은 현재 선택된 요소를 말한다. */
    &:hover {
        background-color: powderblue;
    }

    &:active {
        transform: translateY(2px); /* 버튼이 아래로 약간 이동하는 효과 */
        box-shadow: 3px 3px 10px; /* 버튼 주변에 약간의 그림자 추가 */
    }
`

export const Title = styled.h1`
    margin: 0;
    grid-column: 1 / -1;
`

export const ThumbnailImg = styled.img`
    width: 15rem;
    height: 20rem;
`
