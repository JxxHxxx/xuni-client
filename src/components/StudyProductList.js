import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const StudyProductLayOut = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열을 생성합니다. */
    grid-gap: 16px; /* 아이템 사이의 간격을 설정합니다. */
`
const StudyProductItem = styled.div`
    flex: 0 0 calc(50% - 8px); /* 아이템의 너비 설정 (반 너비로 배치, 간격 제외) */
    margin: 4px; /* 아이템 간격 설정 */

    width: 400px;
    height: 150px;
    border: 1px solid black;
    box-shadow: 5px 5px 20px;
    margin: auto;
    margin-bottom: 30px;
    transition: all 0.5s;
    transition-delay: 0.4s;
`

const Title = styled.h1`
    margin: 0;
    grid-column: 1 / -1;
`

const StudyProductList = () => {
    const [studyProducts, setStudyProducts] = useState([]);

    const request = () => {
        axios.get("http://jsmtmt.shop/study-products")
            .then(response => {
                const data = response.data.response;
                const stduyProductArray = Array.from(data);
                setStudyProducts(stduyProductArray);
            })
            .catch(reason => {
                console.log('reason', reason);
            })
    }

    useEffect(() => {
        request()
    }, [])

    return (
        <StudyProductLayOut>
            <Title>스터디 상품 목록</Title>
            {studyProducts.map(studyProduct => (
                <StudyProductItem key={studyProduct.studyProductId} className="study-product-list-item">
                    <div>studyProduct ID: {studyProduct.studyProductId}</div>
                    <div>Name: {studyProduct.name}</div>
                    <div>Category: {studyProduct.category}</div>
                    <div>Creator: {studyProduct.creator}</div>
                </StudyProductItem>
            ))}
        </StudyProductLayOut>
    );
};

export default StudyProductList;