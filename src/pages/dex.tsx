import { useState, useEffect } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";

import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker";
import PokemonDetails from "@/components/pokemonDisplay";

import styles from '../styles/Dex.module.css'

export default function Dex() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string | null>(null);

    return (
        <main>
            <Header />
            <div className={styles.dexBody}>
                <div className={styles.innerDex}>
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
                </div>
            </div>
            <Footer />
        </main>
    );
}
