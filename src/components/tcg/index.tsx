import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Tcg() {

    var url = `https://api.pokemontcg.io/v2/cards/xy1-1`

    const [tcg, setTcg] = useState<any>(null)

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
                        <h4>{tcg.name}</h4>
                        <Image src={tcg.images.small} width={300} height={400} alt={tcg.name} />
                    </div>
                )
            }
        </>
    )
}
