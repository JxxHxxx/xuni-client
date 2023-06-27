import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as StudyProductStyle from '../style/StudyProductStyle';
import { useNavigate } from 'react-router-dom';
const StudyProductList = () => {
    const [studyProducts, setStudyProducts] = useState([]);
    const navigate = useNavigate();

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

    const navigateStudyProduct = (e) => {
        let studyProductId = e.target.id;

        if (studyProductId === "") {
            studyProductId = e.target.parentElement.id;
        }

        navigate(`/study-products/${studyProductId}`)
    }

    return (
        <StudyProductStyle.LayOut>
            <StudyProductStyle.Title>함께 공부해요!</StudyProductStyle.Title>
            {studyProducts.map(studyProduct => (
                <StudyProductStyle.StudyProductItem key={studyProduct.studyProductId} id={studyProduct.studyProductId} onClick={navigateStudyProduct} className="study-product-list-item">
                    <div>Name: {studyProduct.name}</div>
                    <div>Category: {studyProduct.category}</div>
                    <div>Creator: {studyProduct.creator}</div>
                </StudyProductStyle.StudyProductItem>
            ))}
        </StudyProductStyle.LayOut>
    );
};

export default StudyProductList;