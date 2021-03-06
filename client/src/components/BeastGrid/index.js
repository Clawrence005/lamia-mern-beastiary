import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import BeastDetail from '../BeastDetail';
import './style.css';

function BeastGrid() {
  const [beasts, setBeasts] = useState([]);

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
    <div className='beast-grid'>
      {console.log(`beasts", ${beasts}`)}

      { beasts.map((beast) =>

        <BeastDetail
          key={beast.id}
          id={beast.id}
          name={beast.name}
          description={beast.description}
          habitat={beast.habitat}
          link={beast.id}
        />
        //  <Link to={`/${beast.id}`}></Link>
      )}
    </div>
  )
}


export default BeastGrid;