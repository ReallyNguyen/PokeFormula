

import { useState, useEffect } from "react"
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from '../styles/Browse.module.css'
import Image from "next/image";
import axios from "axios";
import PokeInput from "@/components/input";
import CardPicker from "@/components/cardSelection";



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
                        <PokeInput/>
                        <button onClick={() => {
                                    setInputValue("xy1-5")
                                    }}>Search</button>
                        <div className={styles.Cardrow}>
                        
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        </div>
                        <div className={styles.Cardrow}>
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        <Image className={styles.Image} src={tcg.images.small} width={200} height={300} alt={tcg.name} />
                        </div>
                        </div>
                        <Footer/>
                    </div>
                )
            }
        </>
    )
}