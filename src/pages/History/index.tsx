import { Divider } from 'dga-ui';
import React from 'react';
import CardVideo from '../../components/CardVideo';
import { useYouTube } from '../../hooks/useYoutube';

import {HistoryContainer,HistoryItem, VideoHistoryContainer, TermContainer} from './styles'

const History: React.FC = () => {
    const {historyTerm, videoHistory} = useYouTube()
  return (
    <HistoryContainer>
      <h3>Termos pesquisados</h3>
      <Divider />
      <TermContainer>

        {historyTerm.map(item => (
          <HistoryItem>
            {item}
          </HistoryItem>
        ))}
      </TermContainer>
      <h3> Histórico de visualizações</h3>
      <Divider />
      <VideoHistoryContainer>
        {videoHistory?.map(v => (
          <CardVideo key={v.etag} video={v} />
        ))}
      </VideoHistoryContainer>
    </HistoryContainer>
  );
}

export default History;