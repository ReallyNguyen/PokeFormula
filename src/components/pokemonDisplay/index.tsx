import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonDetails({ pokemonUrl }: PokemonDetailsProps) {
    const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);
    const [flavorText, setFlavorText] = useState<string>("");

    console.log('Trying to Generate Pokemon Details');
  
    useEffect(() => {
      const fetchPokemonDetails = async () => {
        try {
          const response = await axios.get(pokemonUrl);
          console.log('RESPONSE DATA: ' + JSON.stringify(response));
          setPokemonDetails(response.data);

          const speciesResponse = await axios.get(response.data.species.url);
          const textEntries = speciesResponse.data.flavor_text_entries;
          const flavorTextEntry = textEntries.find((entry: any) => entry.language.name === "en" && entry.version.name === "ruby");

          if (flavorTextEntry) {
            setFlavorText(flavorTextEntry.flavor_text);
          }
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
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <p>{flavorText}</p>
      </div>
    );
}
