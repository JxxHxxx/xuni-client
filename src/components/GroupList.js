import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

const GroupLayOut = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열을 생성합니다. */
    grid-gap: 16px; /* 아이템 사이의 간격을 설정합니다. */
`;

const GroupItem = styled.div`
    flex: 0 0 calc(50% - 8px); /* 아이템의 너비 설정 (반 너비로 배치, 간격 제외) */
    margin: 4px; /* 아이템 간격 설정 */

    width: 400px;
    height: 180px;
    border: 1px solid black;
    box-shadow: 5px 5px 20px;
    margin: auto;
    margin-bottom: 30px;
    transition: all 0.5s;
    transition-delay: 0.4s;
`

const Title = styled.h1`
  grid-column: 1 / -1;
`

const GroupList = (className) => {
  const [groups, setGroups] = useState([]);

  /**useEffect는 기본적으로 렌더링되고 난 직후마다 실행된다. */
  useEffect(() => {
    request();
  }, []);

  const request = () => {
    axios.get("http://jsmtmt.shop/groups")
      .then(response => {
        const data = response.data.response;
        const groupArray = Array.from(data);
        setGroups(groupArray);
        console.log('data', data)
      })
      .catch(reason => {
        console.log("reason", reason);
      })
  }

  return (
    <GroupLayOut>
      <Title>스터디 그룹</Title>
      {groups.map(group => (
        <GroupItem key={group.groupId}>
          <div>Group ID : {group.groupId}</div>
          <div>Group Status : {group.groupStatus}</div>
          <div>주최자 : {group.host.hostName}</div>
          <div>{group.study.category} 스터디 : {group.study.subject}</div>
          <div>시작일 : {group.period.startDate} 종료일 : {group.period.endDate}</div>
          <div>To {group.time.startTime} ~ {group.time.endTime}</div>
          <div>현재 남은 스터디 좌석 : {group.capacity.leftCapacity}</div>
        </GroupItem>
      ))}
    </GroupLayOut>
  );
};

export default GroupList;
