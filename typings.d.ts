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
}

interface GenerationDropdownProps {
    onSelectGeneration: (generationUrl: string) => void;
}

interface ITCG {

}