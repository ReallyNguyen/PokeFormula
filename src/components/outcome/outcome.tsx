import styles from './Outcome.module.css'
import Tcg from '../tcg';

export default function Outcome({outcome, func1, func2, exit, button1, button2}: BattleProps){
    return (
      <>
        {outcome === 'win' ? (
          <div>
            <button onClick={exit}>X</button>
            <h1>win</h1>
            <Tcg />
            <button onClick={func1}>{button1}</button>
            <button onClick={func2}>{button2}</button>
          </div>
        ) : outcome === 'lose' ? (
          <div>
            <button onClick={exit}>X</button>
            <h1>lose</h1>
            <button onClick={func1}>{button1}</button>
            <button onClick={func2}>{button2}</button>
          </div>
        ) : null}
      </>
      );
    }
