import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonDetails({ pokemonUrl }: PokemonDetailsProps) {
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);

    console.log('Trying to Generate Pokemon Details');
  
    useEffect(() => {
      const fetchPokemonDetails = async () => {
        try {
          const response = await axios.get(pokemonUrl);
          console.log('RESPONSE DATA: ' + JSON.stringify(response));
          setPokemonDetails(response.data);
        } catch (error) {
          console.error('Error fetching Pokémon details:', error);
        }
      };
  
      if (pokemonUrl) {
        fetchPokemonDetails();
      }
    }, [pokemonUrl]);
  
    if (!pokemonDetails) {
      return null; // < !! Corey Note for Corey: Put Loading Indicator Here !! >
    }
  
    return (
      <div>
        <h1>{pokemonDetails.name}</h1>
        <p>{pokemonDetails.stats[0].base_stat}</p>
        <p>{pokemonDetails.stats[0].stat.name}</p>
        <p>{pokemonDetails.types[0].type.name}</p>
        <p>{pokemonDetails.moves[0].move.name}</p>
        <img src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name} />
      </div>
    );
}
