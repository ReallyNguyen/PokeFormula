import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Pokemon({ selectedPokemon }: { selectedPokemon: string }) {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(selectedPokemon);
        const pokemonData = response.data;
        setPokemonDetails(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    if (selectedPokemon) {
      fetchPokemonDetails();
    }
  }, [selectedPokemon]);

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
      <Image src={pokemonDetails.sprites.other.dream_world.front_default} width={20} height={20} alt={pokemonDetails.name} />
    </div>
  );
}
