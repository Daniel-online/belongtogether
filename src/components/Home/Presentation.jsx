import Hero from "../Content/Hero"
// import imgUrl from "./../../images/testHero.jpeg"
import heroTestData from "./../../Data/heroTestData.json"
import ScrollButton from "../Buttons/ScrollButton"

const Presentation = () => {
  return (
    <div className="flex flex-col">
      <Hero
        title={"O Maior Marketing do Brasil"}
        data={heroTestData}
        hasButton={false}
        bgImage={""}

        titleStyle={"text-border-lg border-white text-7xl h-1/3 text-yellow-500 font-bold"}

        subTitleStyle={"text-5xl items-center flex flex-col content-center w-1/2 text-white font-bold"}
        textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
         //altere aqui o posicionamento dos items, evite usar spanStyle
        style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-left flex flex-col content-center h-screen  overflow-hidden place-content-center"}
        spanStyle={"rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}

      />
      <ScrollButton className="items-center" href="#planos" />
    </div>
  )
}

export default Presentation
