import React from 'react';
import { ElementBottomOfNavigation } from '../style/HeaderStyle';

const Home = () => {
    const username = localStorage.getItem('username');

    return (
        <ElementBottomOfNavigation>
          <h1>안녕하세요 {username !== null ? username + '님' : ''}</h1>
        </ElementBottomOfNavigation>
    );
};

export default Home;