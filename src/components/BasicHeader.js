import React from 'react';
import { Link } from 'react-router-dom';
import * as HeaderStyle from '../style/HeaderStyle';

const BasicHeader = () => {
    return (
        <HeaderStyle.LayOut>
            Xuni
            <HeaderStyle.Container>
                <HeaderStyle.Item>
                    <Link to='/login'>Login</Link>
                </HeaderStyle.Item>
                <HeaderStyle.Item>
                    <Link to='/my-group'>My Group</Link>
                </HeaderStyle.Item>
            </HeaderStyle.Container>
        </HeaderStyle.LayOut>
    );
};

export default BasicHeader;