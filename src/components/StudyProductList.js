import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as StudyProductStyle from '../style/StudyProductStyle';

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
        <StudyProductStyle.LayOut>
            <StudyProductStyle.Title>스터디 상품 목록</StudyProductStyle.Title>
            {studyProducts.map(studyProduct => (
                <StudyProductStyle.StudyProductItem key={studyProduct.studyProductId} className="study-product-list-item">
                    <div>studyProduct ID: {studyProduct.studyProductId}</div>
                    <div>Name: {studyProduct.name}</div>
                    <div>Category: {studyProduct.category}</div>
                    <div>Creator: {studyProduct.creator}</div>
                </StudyProductStyle.StudyProductItem>
            ))}
        </StudyProductStyle.LayOut>
    );
};

export default StudyProductList;