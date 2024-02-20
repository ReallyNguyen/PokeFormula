import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonSelect({ selectedGeneration }: PokemonListProps) {
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);

    useEffect(() => {

        const fetchPokemonList = async () => {
            try {
                const response = await axios.get(selectedGeneration);
                const { pokemon_species } = response.data;

                const names: IPokemon[] = pokemon_species.map((pokemon: any) => ({
                    name: pokemon.name,
                    url: pokemon.url
                }));

                setPokemonList(names);
            } catch (error) {
                console.error('Error fetching Pokémon:', error);
            }
        };

        if (selectedGeneration) {
            fetchPokemonList();
        }
    }, [selectedGeneration]);

    return (
        <div>
            <select>
                <option value="">Select Pokémon...</option>
                    {
                        pokemonList.map(pokemon => (
                            <option key={pokemon.name} value={pokemon.name}>
                                {pokemon.name}
                            </option>
                        ))
                    }
            </select>
        </div>
    );
}
