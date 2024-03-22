import styles from './Outcome.module.css'
import Button from '../button';
import Image from 'next/image';
import Tcg from '../tcg';

export default function Outcome({outcome, func1, func2, exit, button1, button2}: BattleProps){
    return (
      <>
        {outcome === 'win' ? (
          <div className={styles.container}>
            <button className={styles.closeButton} onClick={exit}>X</button>
            <h1 className={styles.h1}>Victory!</h1>
            <h3 className={styles.h3}>You gained a TCG card!</h3>
            <Tcg />
            <div className={styles.buttonContainer}>
                <Button type="outcome" func={func1} name={button1} link=''/>
                <Button type="outcome" func={func2} name={button2} link=''/>           
            </div>
          </div>
        ) : outcome === 'lose' ? (
          <div className={styles.container}>
            <button className={styles.closeButton} onClick={exit}>X</button>
            <h1 className={styles.h1}>Defeated!</h1>
            <h3 className={styles.h3}>Your Pokémon Fainted!</h3>
            <Image src='../../images/Lose.svg' width={150} height={300} alt={"Defeat"} />
            <div className={styles.buttonContainer}>
                <Button type="outcome" func={func1} name={button1} link=''/>
                <Button type="outcome" func={func2} name={button2} link=''/>           
            </div>
          </div>
        ) : null}
      </>
      );
    }
