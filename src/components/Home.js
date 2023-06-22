import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    const username = localStorage.getItem('username');

    return (
        <div>
          <h1>안녕하세요 {username !== null ? username + '님' : ''}</h1>  
          <p><Link to='/login'>로그인 하러 가기 </Link></p>
          <p><Link to='/my-group'>내 그룹 보러 가기</Link></p>
        </div>
    );
};

export default Home;