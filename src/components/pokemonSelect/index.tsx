import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './PokemonSelect.module.css'

export default function PokemonSelect({ selectedGeneration, onSelectPokemon }: PokemonSelectProps ) {
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
    const [ selectedPokemonUrl, setselectedPokemonUrl ] = useState<string>('');

    useEffect(() => {

        const fetchPokemonList = async () => {
            try {
                const response = await axios.get(selectedGeneration);
                const { pokemon_species } = response.data;

                const pokeData: IPokemon[] = pokemon_species.map((pokemon: any) => ({
                    name: pokemon.name,
                    url: pokemon.url
                }));

                setPokemonList(pokeData);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        };

        if (selectedGeneration) {
            fetchPokemonList();
        }
    }, [selectedGeneration]);

    const handleSelectChange = async (selectedUrl: string) => {
        try {
            const response = await axios.get(selectedUrl);
            const { varieties } = response.data;
            const selectedPokemonUrl = varieties[0].pokemon.url;
            setselectedPokemonUrl(selectedPokemonUrl);
            onSelectPokemon(selectedPokemonUrl);
        } catch (error) {
            console.error('Error fetching Pokémon details:', error);
        }
    };

    return (
        <div className={styles.pokemonSelect}>
            <select onChange={(e) => handleSelectChange(e.target.value)}>
                <option value="">Select Pokémon...</option>
                    {
                        pokemonList.map(pokemon => (
                            <option key={pokemon.name} value={pokemon.url}>
                                {pokemon.name}
                            </option>
                        ))
                    }
            </select>
        </div>
    );
}
