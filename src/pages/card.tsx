import { useState, useEffect } from "react"
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from '../styles/Card.module.css'
import Image from "next/image";
import axios from "axios";

export default function Tcg() {
    const [tcg, setTcg] = useState<any>(null)
    const [inputValue, setInputValue] = useState(`xy1-6`)
    var url = `https://api.pokemontcg.io/v2/cards/${inputValue}`
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data)
                setTcg(response.data.data)
            } catch (error) {
                console.error(error);
            }
        }
      
        getData();

    }, [])
    
    return(
        <>
            {
                tcg && (

                    <div>
                        <Header/>
                        <div className={styles.PokemonCard}>
                        <h4>TCG Collection</h4>
                        <div className={styles.Cardrow}>
                        
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/47.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/48.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/57.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/67.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/77.png' width={200} height={300} />
                        </div>
                        <div className={styles.Cardrow}>
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/87.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/97.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/107.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/117.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/127.png' width={200} height={300} />
                        <img className={styles.Image} src='https://images.pokemontcg.io/sv4pt5/137.png' width={200} height={300} />
                        </div>
                        </div>
                        <Footer/>
                    </div>
                )
            }
        </>
    )
}