import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './GenerationPicker.module.css'

export default function GenerationPicker({ setSelectedGen }: GenerationPickerProps) {
    const [generations, setGenerations] = useState<IGeneration[]>([]);
  
	useEffect(() => {
		const fetchGenerations = async () => {
			try {
				const response = await axios.get('https://pokeapi.co/api/v2/generation/');
				const { results } = response.data;

				setGenerations(results);
			} catch (error) {
				console.error('Error fetching generations:', error);
			}
		};

		fetchGenerations();
	}, []);
  
	return (
		<div className={styles.generationPicker}>
			<select onChange={(e) => setSelectedGen(e.target.value)}>
				<option value="">Select Generation...</option>
				{
					generations.map((generation) => (
						<option key={generation.name} value={generation.url}>
							{generation.name}
						</option>
					))
				}
			</select>
		</div>
	);
  }