import Head from 'next/head'
import axios from "axios"
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home(){
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loadMore, setLoadMore] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=20');

  useEffect(() => {
    const getPokemons = async () => {
        const response = await axios.get(loadMore);
        const data = response.data;

        async function createPokemonObject(results) {
          const newPokemons = [];
        
          for (const pokemon of results) {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const pokemonData = res.data;
            newPokemons.push(pokemonData);
          }
        
          setPokemons((currentList) => [...currentList, ...newPokemons]);
        }
        createPokemonObject(data.results);
    };
    getPokemons();
  }, []); 

  return (
    <div>
      <h1>PokemonFormula</h1>
      <div>
        {pokemons.map((pokemonStats, index) => (
          <div key={index}>
            <h1>{pokemonStats.name}</h1>
            <p>{pokemonStats.stats[0].base_stat}</p>
            <p>{pokemonStats.stats[0].stat.name}</p>
            <p>{pokemonStats.types[0].type.name}</p>
            <p>{pokemonStats.moves[0].move.name}</p>
            <Image src={pokemonStats.sprites.other.dream_world.front_default} width={20} height ={20} alt="pokemon" />
          </div>
        ))}
      </div>
    </div>
  );

}
