import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Screen from '@/components/screen';
import Footer from '@/components/footer';

export default function Home(){

  return (
    <>
      <div className={styles.container}>
        <h1>PokeFormula</h1>
        <Image src='/images/logo.png' width={100} height={100} alt="logo" />
        <div className={styles.content}>
          <p className={styles.p}>PokéFormula is your ultimate destination for immersive Pokémon battles and trading card collecting. Dive into a world where strategy meets fun as you build your ultimate Pokémon team. </p>
          <p className={styles.p}>Currently supporting 1V1 battles with future plans to implement 3v3 and 6v6 battles, PokéFormula is the ultimate test of  your pokétactics.</p>
          <p className={styles.p}>Access the Pokédex or battle page to find information about any generation of Pokemon. </p>
          <p className={styles.p}>Unlock Pokémon TCG cards as rewards for winning battles and watch your collection grow. With a big enough collection, you’ll be ready to pokeduke it out when we add our TCG functionality. (Planned for future release 2026)</p>
        </div>
        <div className={styles.screenContainer}>
          <Screen title='Battle' />
          <Screen title='Pokedex' />          
        </div>
      </div>
      <Footer />
    </>
  )


}
