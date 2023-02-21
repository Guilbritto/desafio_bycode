import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    padding: 1rem 0 .50rem 0;
    box-sizing: border-box;
    box-shadow: 0 4px 2px -2px ${props => props.theme.colors.shadow};
`

export const LogoContainer = styled(Link)`
    text-decoration: none;
    font-weight: ${props => props.theme.fontWeight.bold} ;
    display: flex;
    flex-direction: column;

    span{
        font-size: 2rem;
    }
    span + span {
        color: ${props => props.theme.colors.danger[100]};
    }
    small{
        font-weight: ${props => props.theme.fontWeight.regular};
        color: ${props => props.theme.colors.general[80]};
    }

    &:link {
        color: inherit;
        cursor: pointer;
    }
    &:visited{
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;

    }
`

export const SearchArea = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
    & > div {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 250px;
        border-style: none;
        background-color: ${props => props.theme.colors.general[30]};
        outline: none;
        padding: .50rem 1rem .50rem 1rem;

        color: ${props => props.theme.colors.general[80]};

        font-weight: ${props => props.theme.fontWeight.medium};

        margin-bottom: .25rem;
    }

    button {
        height: 30px;
        margin-left: 1rem;
        border-style: none;
        outline: none;

        cursor: pointer;

        padding: .25rem .50rem .25rem .50rem;

        border-radius: 4px;

        background-color: ${props => props.theme.colors.general[30]};
        transition: background .5s ease;
        &:hover{
            background-color: ${props => props.theme.colors.general[50]};

        }
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const MenuItem = styled(Link)`
    padding: 0.25rem 0.50rem 0.25rem 0.50rem ;
    text-align: center;
    width: 100%;

    text-decoration: none;
    & + & {
        border-left: 1px solid ${props => props.theme.colors.general[50]};

    }
    &:link {
        color: inherit;
        cursor: pointer;
    }
    &:visited{
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;

    }
`

export const UserArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const LoginAndSignInArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    span{
        margin-left: .50rem;
        margin-right: .50rem;
    }
    a{
        a:link {
            color: inherit;
            cursor: pointer;
        }
        a:visited{
            text-decoration: inherit;
            color: inherit;
            cursor: pointer;
            
        }
    }
`
