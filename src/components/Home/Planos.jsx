import Cards from "../Content/Cards"
import VoidHero from "../Content/VoidHero"
import voidData from "./../../Data/voidData.json"

const Planos = () => {
  return (
    <div id="planos">


      <VoidHero
        title={"Nossos Planos"}
        data={voidData}
        hasButton={true}
        bgImage={""}
        scrollRef="navbar"
        titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-7xl h-1/5 text-yellow-500 font-bold"}
        style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center"}
        component={<Cards/>}
        componentStyle={"flex flex row items-center place-content-center justify-evenly"}
/>

    </div>
  )
}

export default Planos
