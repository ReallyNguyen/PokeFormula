import { useState, useEffect } from "react"

import Header from "@/components/header";
import Footer from "@/components/footer";

import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker"

import Pokemon from "./pokemon";

import styles from '../styles/Battle.module.css'

export default function Battle() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [leftSelectedPokemonUrl, setLeftSelectedPokemonUrl] = useState<string | null>(null);
    const [rightSelectedPokemonUrl, setRightSelectedPokemonUrl] = useState<string | null>(null);

    return (
        <main>
            <Header />
            <div className={styles.pageContent}>
                <h1 className={styles.pageTitle}>Battle</h1>
                <div className={styles.battleSelect}>
                    <div className={styles.leftCol}>
                        <GenerationPicker setSelectedGen={setSelectedGen} />
                        {selectedGen && (
                            <PokemonSelect
                                selectedGeneration={selectedGen}
                                onSelectPokemon={setLeftSelectedPokemonUrl}
                            />
                        )}
                        {leftSelectedPokemonUrl && (
                            <Pokemon selectedPokemon={leftSelectedPokemonUrl} />
                        )}
                    </div>
                    <div className={styles.rightCol}>
                        <GenerationPicker setSelectedGen={setSelectedGen} />
                        {selectedGen && (
                            <PokemonSelect
                                selectedGeneration={selectedGen}
                                onSelectPokemon={setRightSelectedPokemonUrl}
                            />
                        )}
                        {rightSelectedPokemonUrl && (
                            <Pokemon selectedPokemon={rightSelectedPokemonUrl} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
