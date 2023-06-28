import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as StudyProductStyle from '../style/StudyProductStyle';

const StudyProduct = () => {
    const { studyProductId } = useParams();
    // 데이터 구조는 초기값을 잘 설정해야 랜더링 과정에서 문제가 생기지 않음 - 이유는 모름 
    const [studyProductDetails, setStudyProductDetails] = useState({ contents: [] });

    const request = () => {
        axios.get(`http://jsmtmt.shop/study-products/${studyProductId}`)
            .then(response => {
                setStudyProductDetails(response.data.response);
            })
    }

    useEffect(() => {
        request();
    }, [])

    return (
        <div>
            <div key={studyProductId}>
                <p>카테고리 : {studyProductDetails.category}</p>
                <p>저자 : {studyProductDetails.creator}</p>
                <StudyProductStyle.ThumbnailImg src={studyProductDetails.thumbnail} alt='썸네일 이미지' />
                {studyProductDetails.contents.map(productContent => (
                    <div>
                        <p>{productContent.chapterNo}. {productContent.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyProduct;