import { useState, useEffect } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker";
import PokemonDetails from "@/components/pokemonDisplay";

export default function Dex() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string | null>(null);

    return (
        <main>
            <Header />
            <h1>Dex</h1>
            <GenerationPicker setSelectedGen={setSelectedGen} />
            {selectedGen && (
                <PokemonSelect
                    selectedGeneration={selectedGen}
                    onSelectPokemon={setSelectedPokemonUrl}
                />
            )}
            {selectedPokemonUrl && (
                <PokemonDetails pokemonUrl={selectedPokemonUrl} />
            )}
            <Footer />
        </main>
    );
}
