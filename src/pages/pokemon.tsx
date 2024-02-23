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
        console.log(pokemonData)
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
      <div className={styles.nameRow}>
        <Image src={pokemonDetails.sprites.front_default} width={150} height={150} alt={pokemonDetails.name} className={styles.pokeImage}/>
        <div className={styles.nameType}>
          <h1>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h1>
          <p>{pokemonDetails.types[0].type.name.charAt(0).toUpperCase() + pokemonDetails.types[0].type.name.slice(1)}</p>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.statsRow}>
          {pokemonDetails.stats.slice(0, 3).map((stat, index) => (
            <div className={styles.stat} key={index}>
              <p>
                {
                  stat.stat.name === 'attack' ? 'Attack' :
                  stat.stat.name === 'defense' ? 'Defense' :
                  stat.stat.name === 'hp' ? 'Health' :
                  stat.stat.name.toUpperCase()
                }
              </p>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
        <div className={styles.statsRow}>
          {pokemonDetails.stats.slice(3).map((stat, index) => (
            <div className={styles.stat} key={index}>
              <p>
                {
                  stat.stat.name === 'special-attack' ? 'Special ATK' :
                  stat.stat.name === 'special-defense' ? 'Special DEF' :
                  stat.stat.name === 'speed' ? 'Speed' :
                  stat.stat.name.toUpperCase()
                }
              </p>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
      <p>{pokemonDetails.moves[0].move.name}</p>
    </div>
  );
}
