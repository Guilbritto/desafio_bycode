import styled from 'styled-components';

export const HistoryContainer = styled.div`
    padding: 1rem;

    p {
        size:3rem;
        font-weight: ${props => props.theme.fontWeight.bold};
    }
`;

export const TermContainer = styled.div`
    display: flex;
    gap: .50rem;
    max-height: 5rem;
    overflow: auto;
    flex-wrap: wrap;
`;

export const HistoryItem = styled.div`
  border-radius: .75rem;
  color: ${props => props.theme.colors.general[90]};
  background-color: ${props => props.theme.colors.general[40]};
  padding: .25rem .50rem .25rem .50rem;
`;

export const VideoHistoryContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 2rem 3rem 0 3rem;
`;
