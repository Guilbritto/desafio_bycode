import { useGoogleOneTapLogin } from '@react-oauth/google';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import UserProfile from '../UserProfile';

import { HeaderContainer, LogoContainer, SearchArea, Menu, MenuItem, UserArea, LoginAndSignInArea } from './styles';

const Header: React.FC = () => {

    const { logIn, profile } = useAuth()

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <div>
                    <span>
                        You
                    </span>
                    <span>
                        Tube
                    </span>
                </div>
                <small>Broadcast yourself</small>
            </LogoContainer>
            <SearchArea>
                <div>
                    <input type="text" />
                    <Menu>
                        <MenuItem to='/'>Home</MenuItem>
                        <MenuItem to='/'>Videos</MenuItem>
                        <MenuItem to='/'>Channels</MenuItem>
                    </Menu>
                </div>
                <button>Search</button>
            </SearchArea>
            <UserArea>
                {profile ? <UserProfile /> : (

                    <LoginAndSignInArea>
                        <Link to='/register'>
                            Create Account
                        </Link>
                        <span>
                            or
                        </span>

                        <button onClick={() => logIn()}>
                            SignIn
                        </button>
                    </LoginAndSignInArea>
                )
                }
                <Menu>
                    <MenuItem to='/history'>History</MenuItem>
                </Menu>
            </UserArea >
        </HeaderContainer >);
}

export default Header;