import { Input } from 'dga-ui';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import UserProfile from '../UserProfile';
import {BiSearchAlt2} from 'react-icons/bi'
import { HeaderContainer, LogoContainer, SearchArea, Menu, MenuItem, UserArea, LoginAndSignInArea } from './styles';
import { useYouTube } from '../../hooks/useYoutube';
import { APP_ROUTES } from '../../shared/constants';

const Header: React.FC = () => {

    const { logIn, profile } = useAuth()
    const {search} = useYouTube()
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();    
    
    const  handleKeyDown = (e) => {
        if(e.keyCode === 13){
            search(searchTerm)
            navigate(APP_ROUTES.HOME)
        }   
    }

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
                <Input label='' 
                icon={BiSearchAlt2} 
                inputSize='medium' 
                inputMode='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                onKeyDown={handleKeyDown}
                /> 
                <Menu>
                    <MenuItem to='/'>Home</MenuItem>
                    <MenuItem to='/'>Videos</MenuItem>
                    <MenuItem to='/'>Channels</MenuItem>
                </Menu>
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