<<<<<<< HEAD


import Label from "@/components/label";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Panel
 from "@/components/panel";
export default function Home(){

  return (
    <>
     <div className="body">
=======
import Link from "next/link";
import Label from "@/components/label";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Screen from "@/components/screen";
import Tcg from "@/components/tcg";

export default function Home(){

  return (
    <div className="body">
>>>>>>> 48ca806f865327b028ab80bd05720d85e80ee47f
      <Header />
      <Tcg />
      <h1>PokemonFormula</h1>
      <Link href='/pokemon'>Pokemon</Link>
      <Label title="Testing"/>
<<<<<<< HEAD
      <Panel/>
      <Footer />
    </div>
    </>
=======
      <Screen title='testing'/>
      <Footer />
    </div>
>>>>>>> 48ca806f865327b028ab80bd05720d85e80ee47f
  )


}
