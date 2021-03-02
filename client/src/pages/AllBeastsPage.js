import React from 'react';
import BeastGrid from '../components/BeastGrid';
import BeastContainer from '../components/BeastContainer';

function AllBeastsPage() {
  return (
    <div>
      <p>All Beasts</p>
      <BeastContainer>
        <BeastGrid />
      </BeastContainer>
    </div>
  );
}

export default AllBeastsPage;