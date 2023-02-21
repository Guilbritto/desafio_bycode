import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
    width: 300px;
    height: 300px;
    cursor: pointer;
    width: 20%;
    text-decoration: none;
    &:link {
        color: inherit;
        cursor: pointer;
    }
    &:visited{
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;
        
    }
`;

export const CardContent = styled.div`
    display: flex;
    padding-top: 2rem;

    img{
        margin-right: .50rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
    }
    
    p{
        text-decoration: none;
        margin:0;
    }
`
