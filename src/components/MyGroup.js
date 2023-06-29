
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyGroup = () => {
    const accessCode = localStorage.getItem('access_code');
    const userId = localStorage.getItem('userId');

    const [myGroups, setMyGroups] = useState([]);

    const request = () => {
        axios.get(`http://jsmtmt.shop/members/${userId}/groups`, {
            headers: {
                'Authorization': `${accessCode}`
            },
            withCredentials: true
        }).then(response => {
            setMyGroups(response.data.response);
            
        }).catch(reason => {
            console.log('reason', reason);
        })
    }

    useEffect(() => {
        request()
    },[]); // 의존성 배열이 없으면 무한랜더링

    return (
        <div>
            <h1>내 그룹</h1>
            {myGroups.map((group) => (
                <div key={group.groupId}>
                    <h3>{group.study.subject}</h3>
                    <p>Host: {group.host.hostName}</p>
                    <p>Group Status: {group.groupStatus}</p>
                    <p>Start Date: {group.period.startDate}</p>
                    <p>End Date: {group.period.endDate}</p>
                </div>
            ))}
        </div>
    );
};

export default MyGroup;