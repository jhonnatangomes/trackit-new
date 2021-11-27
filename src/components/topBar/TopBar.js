import styled from 'styled-components';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import colors from '../../styles/colors';

export default function TopBar() {
    const { user } = useContext(UserContext);
    return (
        <TopBarContainer>
            <Logo>TrackIt</Logo>
            <ProfilePic src={user && user.image} alt="Foto de perfil" />
        </TopBarContainer>
    );
}

const TopBarContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${colors.darkBlue};
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;

const Logo = styled.span`
    font-family: 'Playball', cursive;
    font-size: 38.98px;
    line-height: 48.73px;
    color: white;
`;

const ProfilePic = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
`;
