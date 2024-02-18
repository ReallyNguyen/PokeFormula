import Link from "next/link";
import Label from "@/components/label";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Screen from "@/components/screen";
import Tcg from "@/components/tcg";

export default function Home(){

  return (
    <div className="body">
      {/* <Header />
      <Tcg />
      <h1>PokemonFormula</h1>
      <Link href='/pokemon'>Pokemon</Link>
      <Label title="Testing"/>
      <Footer /> */}
      <Screen title='testing'/>

    </div>
  )


}
