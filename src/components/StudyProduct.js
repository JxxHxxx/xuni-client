import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as StudyProductStyle from '../style/StudyProductStyle';
import * as Product from '../style/ProductStyle';
import BasicHeader from './BasicHeader';

const StudyProduct = () => {
    const { studyProductId } = useParams();
    // 데이터 구조는 초기값을 잘 설정해야 랜더링 과정에서 문제가 생기지 않음 - 이유는 모름 
    const [studyProductDetails, setStudyProductDetails] = useState({ contents: [] });
    const [reviews, setReviews] = useState([]);

    const request = () => {
        axios.get(`http://jsmtmt.shop/study-products/${studyProductId}`)
            .then(response => {
                setStudyProductDetails(response.data.response);
            })
    }

    const requestReviews = () => {
        axios
            .get(`http://jsmtmt.shop/study-products/${studyProductId}/reviews`)
            .then(response => {
                setReviews(response.data.response);
            })
    }

    useEffect(() => {
        request();
        requestReviews();
    }, [])

    return (
        <>
            <BasicHeader />
            <Product.LayOut>
                <div key={studyProductId}>
                    <p>카테고리 : {studyProductDetails.category}</p>
                    <p>저자 : {studyProductDetails.creator}</p>
                    <StudyProductStyle.ThumbnailImg src={studyProductDetails.thumbnail} alt='썸네일 이미지' />
                    <h1>목차</h1>
                    {studyProductDetails.contents.map(productContent => (
                        <Product.Chap>
                            <p>{productContent.chapterNo}. {productContent.title}</p>
                        </Product.Chap>
                    ))}
                    <h1>댓글</h1>
                    {reviews.map(review => (
                        <div key={review.reviewId}>
                            <span>댓글 : {review.comment} 평점 : {review.rating}  진행도 : {review.progress}</span>
                        </div>
                    ))}
                </div>
            </Product.LayOut>
        </>
    );
};

export default StudyProduct;