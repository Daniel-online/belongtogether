import Hero from "../Content/Hero"
import heroTestData from "./../../Data/heroTestData.json"
const Planos = () => {
  return (
    <div id="planos">
      <Hero
        title={"O Maior Marketing do Brasil"}
        data={heroTestData}
        hasButton={true}
        bgImage={""}
        scrollRef="navbar"
        titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-7xl h-1/3  text-yellow-500 font-bold"}

        subTitleStyle={"transition delay-200 easy-in duration-300 items-center flex flex-col content-center w-1/2 text-white font-bold"}
        textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
        spanStyle={"rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}
        //rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center
        //altere aqui o posicionamento dos items, evite usar spanStyle
        style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center"}
      //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
      />
    </div>
  )
}

export default Planos
