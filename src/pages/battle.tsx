import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PokemonSelect from "@/components/pokemonSelect";
import GenerationPicker from "@/components/generationPicker";
import Pokemon from "./pokemon";
import Poke from "./pokemon";
import styles from '../styles/Battle.module.css';
import Modal from "react-modal"
import Outcome from "@/components/outcome/outcome";
import { useRouter } from 'next/navigation'

enum BattleOutcome {
    WIN,
    LOSE,
    NULL
}

export default function Battle() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [leftSelectedPokemonUrl, setLeftSelectedPokemonUrl] = useState<string | null>(null);
    const [rightSelectedPokemonUrl, setRightSelectedPokemonUrl] = useState<string | null>(null);
    const [isBattleStarted, setIsBattleStarted] = useState(false);
    const [battleLog, setBattleLog] = useState<string[]>([]);
    const [leftPokemon, setLeftPokemon] = useState<IPokemonDetails | null>(null);
    const [rightPokemon, setRightPokemon] = useState<IPokemonDetails | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [battleOutcome, setBattleOutcome] = useState(BattleOutcome.NULL); 
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [leftSelectedMoves, setLeftSelectedMoves] = useState<string[]>([]);
    const [rightSelectedMoves, setRightSelectedMoves] = useState<string[]>([]);
    const [leftColVis, setLeftColVis] = useState<boolean>(true);
    const [rightColVis, setRightColVis] = useState<boolean>(false);
    const router = useRouter();

    const handleStartBattle = () => {

        if (leftSelectedMoves.length === 4 && rightSelectedMoves.length === 4) {
            console.log('LeftCol Visible: ' + leftColVis);
            console.log('RightCol Visible: ' + rightColVis);
            setLeftColVis(true);
            setRightColVis(true);
            console.log('AFTER LeftCol Visible: ' + leftColVis);
            console.log('AFTER RightCol Visible: ' + rightColVis);
            console.log("Starting battle...");
            setIsBattleStarted(true);
            console.log("isBattleStarted set to true:", isBattleStarted);
        } else {
            alert("Both Pokémon must have four moves selected each.");
        }
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
            setBattleOutcome(BattleOutcome.WIN) // if left side win, you win and it change from NULL to WIN
            setModalIsOpen(true);
        } else if (rightPokemon.stats[0].base_stat <= 0) {
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name} fainted! ${leftPokemon.name} wins the battle!`]);
            setGameOver(true);
            setIsBattleStarted(false);
            setBattleOutcome(BattleOutcome.LOSE) // if right side win, you lose and it change from NULL to LOSE
            setModalIsOpen(true);
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
        setModalIsOpen(false)
    };

    const home = () => {
        router.push('/')
        setModalIsOpen(false)
      }

    const exit = () => {
        setModalIsOpen(false)
    }

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
                {/* should return something if you win */}
                {battleOutcome === BattleOutcome.WIN && 
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={home}
                        shouldCloseOnOverlayClick={false}
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0,0,0,0.2)",
                            },
                            content: {
                                width: "800px",
                                height: "85vh",
                                margin: "auto",
                                padding: "0px",
                                border: "none",
                            },
                        }}
                    >
                        <Outcome outcome="win" button1="Restart" func1={handleRestartBattle} button2="Home" func2={home} exit={exit}/>
                    </Modal>
                }
                {/* should return something if you lose */}
                {battleOutcome === BattleOutcome.LOSE && 
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={home}
                        shouldCloseOnOverlayClick={false}
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0,0,0,0.2)",
                            },
                            content: {
                                width: "800px",
                                height: "85vh",
                                margin: "auto",
                                padding: "0px",
                                border: "none",
                            },
                        }}
                    >
                        <Outcome outcome="lose" button1="Restart" func1={handleRestartBattle} button2="Home" func2={home} exit={exit}/>
                    </Modal>
                }
                <div className={styles.battleSelect}>
                    {leftColVis && (
                        <div className={styles.leftCol}>
                            <GenerationPicker setSelectedGen={setSelectedGen} />
                            {selectedGen && (
                                <PokemonSelect
                                    selectedGeneration={selectedGen}
                                    onSelectPokemon={setLeftSelectedPokemonUrl}
                                />
                            )}
                            {leftSelectedPokemonUrl && (
                                <Pokemon
                                    selectedPokemon={leftSelectedPokemonUrl}
                                    inBattleMode={isBattleStarted}
                                    onSelectMoves={setLeftSelectedMoves}
                                />
                            )}
                            {leftPokemon && leftSelectedMoves.length === 4 && (
                                <button onClick={() => {
                                    setRightSelectedPokemonUrl(null);
                                    setLeftColVis(false);
                                    setRightColVis(true);
                                }}>
                                    Select Defender
                                </button>
                            )}
                        </div>
                    )}
                    {rightColVis && (
                        <div className={styles.rightCol}>
                            {selectedGen && leftSelectedMoves.length === 4 && (    
                                <GenerationPicker setSelectedGen={setSelectedGen} />
                            )}
                            {selectedGen && leftSelectedMoves.length === 4 && (    
                                <PokemonSelect
                                    selectedGeneration={selectedGen}
                                    onSelectPokemon={setRightSelectedPokemonUrl}
                                />
                            )}
                            {rightSelectedPokemonUrl && leftSelectedMoves.length === 4 && (
                                <Pokemon
                                    selectedPokemon={rightSelectedPokemonUrl}
                                    inBattleMode={isBattleStarted}
                                    onSelectMoves={setRightSelectedMoves}
                                />
                            )}
                        </div>
                    )}
                </div>
                {leftPokemon && rightPokemon && leftSelectedMoves.length === 4 && rightSelectedMoves.length === 4 && (
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
