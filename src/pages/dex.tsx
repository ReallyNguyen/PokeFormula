import { useState } from "react"

import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker"


export default function Dex() {
    const [selectedGen, setSelectedGen] = useState('');

    return(
        <>
            <h1>Dex</h1>
            <GenerationPicker setSelectedGen={setSelectedGen} />
            { selectedGen && <PokemonSelect selectedGeneration={selectedGen} />}
        </>
    )
}