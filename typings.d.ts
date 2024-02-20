interface IPokemon {
    stats: PokemonData[];
    types: PokemonData[];
    moves: PokemonData[];
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    };
    name: string;
}

interface IPokemonDetails {
    name: string;
    stats: { 
        base_stat: number; 
        stat: { 
            name: string; 
        },
    }[];
    types: { 
        type: { 
            name: string; 
        }, 
    }[];
    moves: { 
        move: { 
            name: string; 
        },
    }[];
    sprites: { 
        other: { 
            dream_world: { 
                front_default: string; 
            } 
        } ,
    };
  }

interface IGeneration {
    name: string;
    url: string;
}

interface IPokemon {
    name: string;
    url: string;
}

interface PokemonDetailsProps {
    pokemonUrl: string;
}

interface PokemonListProps {
    selectedGeneration: string;
}

interface PokemonSelectProps {
    selectedGeneration: string;
    onSelectPokemon: (pokemonUrl: string) => void;
}

interface GenerationPickerProps {
    setSelectedGen: (url: string) => void;
}

interface ITCG {

}