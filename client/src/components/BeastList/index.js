import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BeastDetail from '../BeastDetail';

function BeastList() {
  const [beasts, setBeasts] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/beasts')
  //     .then(res => res.data.beasts)
  //     .then(beasts => setBeasts(beasts))
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/api/beasts`,
      );

      setBeasts(result.data.beasts);
      console.log("useEffect")
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>BeastList</p>
      {console.log(`beasts", ${beasts}`)}
      <div>Beasts</div>

      { beasts.map((beast) =>
        <BeastDetail
          key={beast.id}
          id={beast.id}
          name={beast.name}
          description={beast.description}
          habitat={beast.habitat}
        />
      )}
    </div>
  )
}


export default BeastList;