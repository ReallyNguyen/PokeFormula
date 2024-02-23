import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker";
import Pokemon from "./pokemon";
import styles from '../styles/Battle.module.css';

export default function Battle() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [leftSelectedPokemonUrl, setLeftSelectedPokemonUrl] = useState<string | null>(null);
    const [rightSelectedPokemonUrl, setRightSelectedPokemonUrl] = useState<string | null>(null);
    const [isBattleStarted, setIsBattleStarted] = useState(false);
    const [battleLog, setBattleLog] = useState<string[]>([]);
    const [leftPokemon, setLeftPokemon] = useState<IPokemonDetails | null>(null);
    const [rightPokemon, setRightPokemon] = useState<IPokemonDetails | null>(null);
    const [gameOver, setGameOver] = useState(false);

    const handleStartBattle = () => {
        console.log("Starting battle...");
        setIsBattleStarted(true);
        console.log("isBattleStarted set to true:", isBattleStarted);
    };

    const simulateBattleRound = () => {
        if (!leftPokemon || !rightPokemon) {
            return;
        }
    
        const leftMoveIndex = Math.floor(Math.random() * leftPokemon.moves.length);
        const leftMove = leftPokemon.moves[leftMoveIndex];
    
        const rightMoveIndex = Math.floor(Math.random() * rightPokemon.moves.length);
        const rightMove = rightPokemon.moves[rightMoveIndex];
    
        const leftAccuracy = Math.floor(Math.random() * 20) + 1;
        const rightAccuracy = Math.floor(Math.random() * 20) + 1;

        const accuracyThreshold = 15;
    
        const leftMoveHits = leftAccuracy <= accuracyThreshold;
        const rightMoveHits = rightAccuracy <= accuracyThreshold;
    
        if (leftMoveHits) {
            const damage = Math.floor(Math.random() * 10) + 1;
            rightPokemon.stats[0].base_stat -= damage;
            setBattleLog(prevLog => [...prevLog, `${leftPokemon.name} used ${leftMove.move.name}! It dealt ${damage} damage to ${rightPokemon.name}!`]);
        } else {
            setBattleLog(prevLog => [...prevLog, `${leftPokemon.name}'s attack missed!`]);
        }
    
        if (rightMoveHits) {
            const damage = Math.floor(Math.random() * 10) + 1;
            leftPokemon.stats[0].base_stat -= damage;
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name} used ${rightMove.move.name}! It dealt ${damage} damage to ${leftPokemon.name}!`]);
        } else {
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name}'s attack missed!`]);
        }
    
        if (leftPokemon.stats[0].base_stat <= 0) {
            setBattleLog(prevLog => [...prevLog, `${leftPokemon.name} fainted! ${rightPokemon.name} wins the battle!`]);
            setGameOver(true);
            setIsBattleStarted(false);
        } else if (rightPokemon.stats[0].base_stat <= 0) {
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name} fainted! ${leftPokemon.name} wins the battle!`]);
            setGameOver(true);
            setIsBattleStarted(false);
        }
    };

    const handleRestartBattle = () => {
        setSelectedGen('');
        setLeftSelectedPokemonUrl(null);
        setRightSelectedPokemonUrl(null);
        setIsBattleStarted(false);
        setBattleLog([]);
        setLeftPokemon(null);
        setRightPokemon(null);
        setGameOver(false);
    };

    useEffect(() => {
        console.log("isBattleStarted changed:", isBattleStarted);
        if (isBattleStarted) {
            const battleInterval = setInterval(() => {
                simulateBattleRound();
            }, 2000);
    
            return () => clearInterval(battleInterval);
        }
    }, [isBattleStarted]);

    useEffect(() => {
        if (leftSelectedPokemonUrl) {
            fetch(leftSelectedPokemonUrl)
                .then(response => response.json())
                .then(data => setLeftPokemon(data));
        }
    }, [leftSelectedPokemonUrl]);

    useEffect(() => {
        if (rightSelectedPokemonUrl) {
            fetch(rightSelectedPokemonUrl)
                .then(response => response.json())
                .then(data => setRightPokemon(data));
        }
    }, [rightSelectedPokemonUrl]);

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
                {leftPokemon && rightPokemon && (
                    <button onClick={handleStartBattle}>Battle!</button>
                )}
                <div>
                    {battleLog.map((log, index) => (
                        <p key={index}>{log}</p>
                    ))}
                </div>
                {gameOver && <button onClick={handleRestartBattle}>Restart</button>}
            </div>
            <Footer />
        </main>
    );
}
