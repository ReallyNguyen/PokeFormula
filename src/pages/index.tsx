import styles from '../styles/Home.module.css'
import Image from 'next/image';

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

            <div className={styles.section}>

              <div className={styles.intro}>
                <div className={styles.introContent}>
                  <h1>What is PokéFormula?</h1>
                  <p>PokéFormula is your ultimate destination for immersive Pokémon battles and trading card collecting. Dive into a world where strategy meets fun as you build your ultimate Pokémon team.</p>
                </div>
                <Screen>
                  <Image src={'/Images/logo.png'} width={100} height={100} alt='Logo' />
                </Screen>
              </div>

              <div className={styles.battle}>
                <div className={styles.battleContent}>
                  <h1>Battle!</h1>
                  <p>PokéFormula is your ultimate destination for immersive Pokémon battles and trading card collecting. Dive into a world where strategy meets fun as you build your ultimate Pokémon team.</p>
                  <div className={styles.button}>
                    <Button type='nav' link='/battle' name='Battle' />
                  </div>
                </div>
                <Screen>
                  <Image src={'/Images/Battle.png'} width={100} height={100} alt='Logo' />
                </Screen>
              </div>

              <div className={styles.pokedex}>
                <div className={styles.pokedexContent}>
                  <h1>PokeDex</h1>
                  <p>Access the Pokédex or battle page to find information about any generation of Pokemon.</p>
                  <div className={styles.button}>
                    <Button type='nav' link='/dex' name='Pokedex' />                
                  </div>
                </div>
                <Screen>
                  <Image src={'/Images/Dex.png'} width={100} height={100} alt='Logo' />
                </Screen>
              </div>

            </div>
        </main>
      <Footer />
    </>
  )

}
