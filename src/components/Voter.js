import React, { useState } from 'react';

import { VoterNumber, VoterArrow, VoterContainer } from '../styles';

const Voter = () => {
  const [count, setCount] = useState(0);

  return (
    <VoterContainer>
      <VoterArrow onClick={() => setCount(count + 1)}>^</VoterArrow>
      <VoterNumber>{count}</VoterNumber>
      <VoterArrow onClick={() => setCount(count - 1)} style={{ transform: 'rotateX(180deg)' }}>^</VoterArrow>
    </VoterContainer>
  );
};

export default Voter;
