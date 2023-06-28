import React from 'react';
import { Link } from 'react-router-dom';
import * as NavigationStyle from './../style/NavigationStyle';

const TopNavigation = () => {
    return (
        <NavigationStyle.LayOut>
            Xuni
            <NavigationStyle.ElementContainer>
                <NavigationStyle.Element>
                    <Link to='/login'>Login</Link>
                </NavigationStyle.Element>
                <NavigationStyle.Element>
                    <Link to='/my-group'>My Group</Link>
                </NavigationStyle.Element>
            </NavigationStyle.ElementContainer>
        </NavigationStyle.LayOut>
    );
};

export default TopNavigation;