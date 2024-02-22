import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import styles from '../styles/Pokemon.module.css'

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
    <div className={styles.statsContainer}>
      <h1>{pokemonDetails.name}</h1>
      <div className={styles.statsRow}>
        {pokemonDetails.stats.slice(0, 3).map((stat, index) => (
          <div className={styles.stat} key={index}>
            <p>{stat.base_stat}</p>
            <p>{stat.stat.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.statsRow}>
        {pokemonDetails.stats.slice(3).map((stat, index) => (
          <div className={styles.stat} key={index}>
            <p>{stat.base_stat}</p>
            <p>{stat.stat.name}</p>
          </div>
        ))}
      </div>
      <p>{pokemonDetails.types[0].type.name}</p>
      <p>{pokemonDetails.moves[0].move.name}</p>
      <Image src={pokemonDetails.sprites.other.dream_world.front_default} width={20} height={20} alt={pokemonDetails.name} />
    </div>
  );
}
