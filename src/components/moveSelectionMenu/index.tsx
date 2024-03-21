interface MoveSelectionMenuProps {
  moves: string[];
  onSelectMove: (move: string) => void; 
}

export default function MoveSelectionMenu({ moves, onSelectMove } : MoveSelectionMenuProps) {
  return (
    <div>
      <h2>Choose your move:</h2>
      <ul>
        {moves.map((move, index) => (
          <li key={index} onClick={() => onSelectMove(move)}>
            {move}
          </li>
        ))}
      </ul>
    </div>
  );
};