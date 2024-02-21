

import Label from "@/components/label";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Panel
 from "@/components/panel";
export default function Home(){

  return (
    <>
     <div className="body">
      <Header />
      <h1>PokemonFormula</h1>
      <Label title="Testing"/>
      <Panel/>
      <Footer />
    </div>
    </>
  )


}
