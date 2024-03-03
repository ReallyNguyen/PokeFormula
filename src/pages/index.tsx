import styles from '../styles/Home.module.css'

import TCG from '../components/tcg'

import Header from "@/components/header";
import Footer from "@/components/footer";
import Screen from "@/components/screen";
import Button from '@/components/button';


export default function Home(){

  return (
    <>
      <Header />
        <main className={styles.main}>
          <h1 className={styles.header}>PokéFormula</h1>
            <div className={styles.content}>
              <p>PokéFormula is your ultimate destination for immersive Pokémon battles and trading card collecting. Dive into a world where strategy meets fun as you build your ultimate Pokémon team.</p>
              <p>Currently supporting 1V1 battles with future plans to implement 3v3 and 6v6 battles, PokéFormula is the ultimate test of your pokétactics.</p>
              <p>Access the Pokédex or battle page to find information about any generation of Pokemon. </p>
              <p>Unlock Pokémon TCG cards as rewards for winning battles and watch your collection grow. With a big enough collection, you’ll be ready to pokéduke it out when we add our TCG functionality. (Planned for future release 2026)</p>
            </div>
            <div className={styles.screenContainer}>
              <Screen>
                <h1 className={styles.title}>Battle</h1>
              </Screen>
              <Screen>
                <h1 className={styles.title}>PokéDex</h1>
              </Screen>
            </div>
            <Button link='/battle' name='battle' />
        </main>
      <Footer />
    </>
  )

}
