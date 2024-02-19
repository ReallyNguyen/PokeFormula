import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GenerationPicker() {
  const [generations, setGenerations] = useState<IGeneration[]>([]);
  const [selectedGen, setSelectedGen] = useState<string>('');

  useEffect(() => {
    const fetchGenerations = async () => {

      try {
        const response = await axios.get('https://pokeapi.co/api/v2/generation/');
        const { results } = response.data;

        setGenerations(results);
      } catch (error) {
        console.error('Error fetching generations:', error);
      }
    };

    fetchGenerations();
  }, []);

  useEffect(() => {
    console.log(selectedGen);
  }, [selectedGen]);

  return (
    <div>
        <select onChange={(e) => {
            setSelectedGen(e.target.value);
        }}>
            <option value="">Select Generation...</option>
            {
                generations.map((generation) => (
                    <option key={generation.name} value={generation.name}>
                        {generation.name}
                    </option>
                ))
            }
        </select>
    </div>
  );
};
