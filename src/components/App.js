import React from 'react';

import NewPost from './NewPost';
import CommentsList from './CommentsList';
import { Title, AppContainer } from '../styles';

const App = () => (
  <AppContainer>
    <Title>
      <span role="img" aria-labelledby="party">🎉 </span>
      CIS 197 Community
      <span role="img" aria-labelledby="party"> 🎉</span>
    </Title>
    <NewPost />
    <CommentsList />
  </AppContainer>
);

export default App;
