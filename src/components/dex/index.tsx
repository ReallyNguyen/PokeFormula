import { useState, useEffect } from "react"

import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker"
import PokemonDetails from "@/components/pokemonDisplay";

export default function Dex() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string | null>(null);

    useEffect(() => {
        console.log('DEX URL: ' + selectedPokemonUrl);
        setSelectedPokemonUrl(selectedPokemonUrl);
    },[selectedGen]);

    return(
        <>
            <h1>Dex</h1>
            <GenerationPicker setSelectedGen={setSelectedGen} />
            { 
                selectedGen && <PokemonSelect
                                    selectedGeneration={selectedGen}
                                    onSelectPokemon={setSelectedPokemonUrl}
                                />
            }
            {
                selectedPokemonUrl && <PokemonDetails pokemonUrl={selectedPokemonUrl} />
            }
        </>
    )
}