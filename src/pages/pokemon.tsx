import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Screen from '@/components/screen';
import styles from '../styles/Pokemon.module.css';
import Modal from 'react-modal';

export default function Pokemon({ selectedPokemon, inBattleMode }: { selectedPokemon: string; inBattleMode: boolean }) {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);
  const [selectedMoves, setSelectedMoves] = useState<string[]>([]);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(selectedPokemon);
        const pokemonData = response.data;
        setPokemonDetails(pokemonData);
        console.log(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    if (selectedPokemon) {
      fetchPokemonDetails();
    }
  }, [selectedPokemon]);

  const handleMoveSelection = (moveName: string) => {
    if (selectedMoves.includes(moveName)) {
      setSelectedMoves(selectedMoves.filter((move) => move !== moveName));
    } else {
      if (selectedMoves.length < 4) {
        setSelectedMoves([...selectedMoves, moveName]);
      } else {
        // Optionally, you can display a message indicating that only 4 moves can be selected.
      }
    }
  };

  const handleModalClose = () => {
    setIsMoveModalOpen(false);
    setSelectedMoves([]);
  };

  const handleModalOk = () => {
    // Additional logic can be added here if needed
    setIsMoveModalOpen(false);
  };

  const openMoveModal = () => {
    setIsMoveModalOpen(true);
  };

  if (!pokemonDetails) {
    return null; // < !! Corey Note for Corey: Put Loading Indicator Here !! >
  }

  if (inBattleMode) {
    return (
      <Screen>
        <Image src={pokemonDetails.sprites.front_default} width={150} height={150} alt={pokemonDetails.name} className={styles.pokeImage} />
      </Screen>
    );
  }

  return (
    <div className={styles.statsContainer}>
      <div className={styles.nameRow}>
        <Image src={pokemonDetails.sprites.front_default} width={150} height={150} alt={pokemonDetails.name} className={styles.pokeImage} />
        <div className={styles.nameType}>
          <h1>{pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</h1>
          <p>{pokemonDetails.types[0].type.name.charAt(0).toUpperCase() + pokemonDetails.types[0].type.name.slice(1)}</p>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.statsRow}>
          {pokemonDetails.stats.slice(0, 3).map((stat, index) => (
            <div className={styles.stat} key={index}>
              <p>
                {stat.stat.name === 'attack' ? 'Attack' : stat.stat.name === 'defense' ? 'Defense' : stat.stat.name === 'hp' ? 'Health' : stat.stat.name.toUpperCase()}
              </p>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
        <div className={styles.statsRow}>
          {pokemonDetails.stats.slice(3).map((stat, index) => (
            <div className={styles.stat} key={index}>
              <p>
                {stat.stat.name === 'special-attack' ? 'Special ATK' : stat.stat.name === 'special-defense' ? 'Special DEF' : stat.stat.name === 'speed' ? 'Speed' : stat.stat.name.toUpperCase()}
              </p>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.movesContainer}>
        <h2>Selected Moves</h2>
        <ul>
          {selectedMoves.map((move, index) => (
            <li key={index}>{move}</li>
          ))}
        </ul>
        <button onClick={openMoveModal}>{selectedMoves.length === 4 ? 'Reselect 4 Moves' : 'Select 4 Moves'}</button>
        <Modal isOpen={isMoveModalOpen} onRequestClose={handleModalClose} contentLabel="Move Selection" style={{ content: { maxWidth: '800px', maxHeight: '600px', margin: 'auto' } }}>
          <div className={styles.movesList}>
            {pokemonDetails.moves.map((move, index) => (
              <div key={index} className={`${styles.move} ${selectedMoves.includes(move.move.name) && styles.selectedMove}`} onClick={() => handleMoveSelection(move.move.name)}>
                <p>{move.move.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.modalButtons}>
            <button disabled={selectedMoves.length !== 4} onClick={handleModalOk}>Ok</button>
            <button onClick={handleModalClose}>Cancel</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}