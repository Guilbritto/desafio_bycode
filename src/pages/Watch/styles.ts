import styled from 'styled-components';

export const PageContainer = styled.div`
  padding:3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const VideoContainer = styled.div`
  
`;
export const VideoInfo = styled.div`
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
`;

export const VideoDescription = styled.div`
  padding: 2rem;
`;

export const RelatedVideosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 2rem 3rem 0 3rem;
  margin-top:3rem;
`;

