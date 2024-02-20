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

interface IGeneration {
    name: string;
    url: string;
}

interface IPokemon {
    name: string;
    url: string;
}

interface PokemonListProps {
    selectedGeneration: string;
}

interface GenerationPickerProps {
    setSelectedGen: (url: string) => void;
}
  

interface ITCG {

}