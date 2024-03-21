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
        front_default: string;
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

interface BattleProps {
    outcome: string;
    func1: React.MouseEventHandler<HTMLButtonElement>;
    func2: React.MouseEventHandler<HTMLButtonElement>;
    exit: React.MouseEventHandler<HTMLButtonElement>;
    button1: string;
    button2: string;
}

interface IButton {
    name: string;
    link: string;
    func?: React.MouseEventHandler<HTMLButtonElement>;
    type: string;
}

interface ILabel {
    title: string;
}

interface IScreen {
    children: any;
}

interface MoveSelectionMenuProps {
    moves: string[];
    onSelectMove: (move: string) => void; 
}