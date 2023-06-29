import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Search from './studyproduct/Search';

const GroupForm = () => {
    const accessCode = localStorage.getItem('access_code');
    const navigate = useNavigate();
    const [_category, setCategory] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    let studyProductId = '';
    let subject = '';
    let category = '';

    const handleSubmit = async event => {
        event.preventDefault();
        const capacity = event.target.capacity.value;
        const startDate = event.target.startDate.value;
        const endDate = event.target.endDate.value;
        const startTime = event.target.startTime.value + ':00';
        const endTime = event.target.endTime.value + ':00';

        await axios
            .post('http://jsmtmt.shop/groups', {
                headers: {
                    'Authorization': `${accessCode}`
                },
                withCredentials: true
            }, {
                capacity,
                startDate,
                endDate,
                startTime,
                endTime,
                studyProductId,
                subject,
                category
            })
            .then(response => {
                alert('그룹 생성 성공');
                navigate('/');
            })
            .catch(reason => console.log('reason', reason));
    };

    const handleSearchSubmit = event => {
        event.preventDefault();
        const searchCategory = event.target.category.value;
        setCategory(searchCategory);
    };

    const onSelect = product => {
        setSelectedProduct(product);
    };
    // TODO : 리팩토링 필요 useRef 사용하자.
    useEffect(() => {
        if (selectedProduct) {
            studyProductId = selectedProduct.studyProductId;
            subject = selectedProduct.name;
            category = selectedProduct.category;
            console.log('category = ', category, 'subject = ', subject)
        }

    }, [selectedProduct]);

    return (
        <div>
            그룹 폼
            <form onSubmit={handleSubmit}>
                <p>그룹 인원 : <input type='number' name='capacity' placeholder='인원을 선택해주세요.' /></p>
                <p>시작일 : <input type='date' name='startDate' /></p>
                <p>종료일 : <input type='date' name='endDate' /></p>
                <p>시작시간 : <input type='time' name='startTime' /></p>
                <p>종료시간 : <input type='time' name='endTime' /></p>
                <input type='submit' value='생성' />
            </form>
            <form onSubmit={handleSearchSubmit}>
                <p>카테 고리 : <input type='text' name='category' /></p>
                <input type='submit' value='그룹 조회' />
            </form>
            <Search category={_category} onSelect={onSelect} />
        </div>
    );
};

export default GroupForm;
