import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import BeastDetail from '../components/BeastDetail';

function BeastPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { beastId } = useParams();

  const [beastName, setBeastName] = useState([]);
  const [beastHabitat, setBeastHabitat] = useState([]);
  const [beastDescription, setBeastDescription] = useState([]);
  const [beastImage, setBeastImage] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(`/api/beasts/${beastId}`);
      console.log(" result.data", result.data)
      setBeastName(result.data.beast.name);
      setBeastHabitat(result.data.beast.habitat);
      setBeastImage(result.data.beast.image);
      setBeastDescription(result.data.beast.description);

      setIsLoading(false);
      console.log("res after", result.data.beast.name);
      console.log(" result.data", result.data)
      console.log("res after", result.data.beast.name);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (<h1>loading</h1>)
  }
  if (!isLoading) {
    return (<div className="beast-page-container">
      <h3>{beastName}</h3>
      <h4>subtitle</h4>
      <p>Beast Image: {beastImage}</p>
      <p>Beast habitat: {beastHabitat}</p>
      <p>Beast Description: {beastDescription}</p>
    </div>
    )
  }
}

export default BeastPage;