import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { UserContainer } from './styles';
import { DropdownMenu, FloatingItem } from 'dga-ui'



const UserProfile: React.FC = () => {
    const { profile, logOut } = useAuth();
    return (
        <UserContainer>
            <DropdownMenu floatingSide='center'
                floatingItems={<FloatingItem onClick={() => logOut()}>Logout</FloatingItem>}>

                <img src={profile.picture} alt="" />
                <span>{profile.name}</span>
            </DropdownMenu>
        </UserContainer>
    )
}

export default UserProfile;