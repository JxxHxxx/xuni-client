import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await axios.post("http://jsmtmt.shop/auth/login", {
            email,
            password
        })
            .then(response => {
                localStorage.setItem('access_code', response.headers.authorization);
                localStorage.setItem('username', response.data.response.name);
                localStorage.setItem('useremail', response.data.response.email);

                navigate('/');
            })
            .catch(reason => console.log('reason', reason));
    }


    return (
        <div>
            <h1>로그인 페이지 입니다.</h1>
            <form onSubmit={handleSubmit}>
                <p><input type='email' name='email' placeholder='이메일을 입력하세요' /></p>
                <p><input type='password' name='password' placeholder='비밀번호를 입력해주세요' /></p>
                <input type='submit' value='로그인'></input>
            </form>
        </div>
    );
};

export default Login;
