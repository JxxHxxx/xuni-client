import React from 'react';
import {Link} from 'react-router-dom';


const Home = () => {
    const username = localStorage.getItem('username');

    return (
        <div>
          <h1>안녕하세요 {username !== null ? username + '님' : ''}</h1>  
          <Link to='/login'>로그인 하러 가기 </Link>
        </div>
    );
};

export default Home;