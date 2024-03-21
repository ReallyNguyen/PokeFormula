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
import MoveSelectionMenu from "@/components/moveSelectionMenu";

enum BattleOutcome {
    WIN,
    LOSE,
    NULL
}

export default function Battle() {
    const [selectedGen, setSelectedGen] = useState<string>('');
    const [userSelectedMove, setUserSelectedMove] = useState('');
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
    const [battleLogVis, setBattleLogVis] = useState<boolean>(false);
    const router = useRouter();

    const handleStartBattle = () => {

        if (leftSelectedMoves.length === 4 && rightSelectedMoves.length === 4) {

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
        
        if (!leftSelectedMoves.length || !rightSelectedMoves.length) {
            console.error("Moves not selected for both Pokémon.");
            return;
        }
        
        const userMove = userSelectedMove;
        const rightMove = rightSelectedMoves[Math.floor(Math.random() * rightSelectedMoves.length)];
    
        const leftAccuracy = Math.floor(Math.random() * 20) + 1;
        const rightAccuracy = Math.floor(Math.random() * 20) + 1;
        
        const accuracyThreshold = 15;
        
        const userMoveHits = leftAccuracy <= accuracyThreshold;
        const rightMoveHits = rightAccuracy <= accuracyThreshold;
        
        setBattleLog(prevLog => [
            ...prevLog,
            `${leftPokemon.name} used ${userMove}!`,
            `${rightPokemon.name} used ${rightMove}!`
        ]);
        
        if (userMoveHits) {
            const damage = Math.floor(Math.random() * 10) + 1;
            rightPokemon.stats[0].base_stat -= damage;
            setBattleLog(prevLog => [...prevLog, `${leftPokemon.name} dealt ${damage} damage to ${rightPokemon.name}!`]);
        } else {
            setBattleLog(prevLog => [...prevLog, `${leftPokemon.name}'s attack missed!`]);
        }
        
        if (rightMoveHits) {
            const damage = Math.floor(Math.random() * 10) + 1;
            leftPokemon.stats[0].base_stat -= damage;
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name} dealt ${damage} damage to ${leftPokemon.name}!`]);
        } else {
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name}'s attack missed!`]);
        }
        
        if (leftPokemon.stats[0].base_stat <= 0) {
            setBattleLog(prevLog => [...prevLog, `${leftPokemon.name} fainted! ${rightPokemon.name} wins the battle!`]);
            setGameOver(true);
            setIsBattleStarted(false);
            setBattleOutcome(BattleOutcome.WIN);
            setModalIsOpen(true);
        } else if (rightPokemon.stats[0].base_stat <= 0) {
            setBattleLog(prevLog => [...prevLog, `${rightPokemon.name} fainted! ${leftPokemon.name} wins the battle!`]);
            setGameOver(true);
            setIsBattleStarted(false);
            setBattleOutcome(BattleOutcome.LOSE);
            setModalIsOpen(true);
        }
    };
    

    const handleSelectMove = (move: string) => {
        setUserSelectedMove(move);
    };

    const renderMoveSelectionMenu = () => {
        if (isBattleStarted && userSelectedMove === '') {
            return (
            <MoveSelectionMenu
                moves={leftSelectedMoves}
                onSelectMove={handleSelectMove}
            />
            );
        }
        return null;
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
        setModalIsOpen(false);
        setBattleLogVis(false);
        setRightColVis(false);
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
                    <div className={`${styles.columnContainer} ${leftColVis ? styles.visible : ''}`}>
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
                                    console.log('setting left vis false, right vis true.');
                                    }}>Select Defender
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={`${styles.columnContainer} ${rightColVis ? styles.visible : styles.column}`} >
                        {rightColVis && (
                            <div className={styles.rightCol}>
                                <GenerationPicker setSelectedGen={setSelectedGen} />
                                <PokemonSelect
                                    selectedGeneration={selectedGen}
                                    onSelectPokemon={setRightSelectedPokemonUrl}
                                />
                                {rightSelectedPokemonUrl &&(
                                    <Pokemon
                                        selectedPokemon={rightSelectedPokemonUrl}
                                        inBattleMode={isBattleStarted}
                                        onSelectMoves={setRightSelectedMoves}
                                    />
                                )}
                            </div>
                        )}

                    </div>
                </div>
                {leftPokemon && rightPokemon && leftSelectedMoves.length === 4 && rightSelectedMoves.length === 4 && (
                        <button onClick={()=> {
                            handleStartBattle();
                            setLeftColVis(true);
                            setRightColVis(true);
                            setBattleLogVis(true); 
                        }}>Battle!</button>
                )}
                {battleLogVis && (
                    <div className={styles.battleLog}>
                        {battleLog.map((log, index) => (
                            <p key={index}>{log}</p>
                        ))}
                    </div>
                )}
                {renderMoveSelectionMenu()}
                {gameOver && 
                    <button onClick={() => {
                        handleRestartBattle();
                        setBattleLogVis(false);
                    }}>
                        Restart
                    </button>}
            </div>
            <Footer />
        </main>
    );
}
