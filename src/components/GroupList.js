import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as GroupStyle from '../style/GroupStyle';

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
    <GroupStyle.LayOut>
      <GroupStyle.Title>스터디 그룹</GroupStyle.Title>
      {groups.map(group => (
        <GroupStyle.GroupItem key={group.groupId}>
          <div>Group ID : {group.groupId}</div>
          <div>Group Status : {group.groupStatus}</div>
          <div>주최자 : {group.host.hostName}</div>
          <div>{group.study.category} 스터디 : {group.study.subject}</div>
          <div>시작일 : {group.period.startDate} 종료일 : {group.period.endDate}</div>
          <div>To {group.time.startTime} ~ {group.time.endTime}</div>
          <div>현재 남은 스터디 좌석 : {group.capacity.leftCapacity}</div>
        </GroupStyle.GroupItem>
      ))}
    </GroupStyle.LayOut>
  );
};

export default GroupList;
