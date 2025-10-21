import { useEffect } from "react"
import Hero from "./../components/Content/Hero"
import Paragraph from "../components/Content/Paragraph"
import imgUrl from "./../../src/assets/massagem.jpg"

const AboutUs = () => {
    useEffect(() => {
        document.title = "Sobre Nós"
    }, [])

    return (
        <div className="relative"> {/* Add relative positioning container */}
            <Hero
                title={"Sobre Mim"}
                data={[]}
                hasText={true}
                hasButton={true}
                bgImage={imgUrl}
                titleStyle={"text-border-lg border-white text-7xl h-full text-red-500 font-bold"}
                subTitleStyle={"items-center flex flex-col content-center w-1/2 text-white font-bold"}
                textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                style={"bg-black items-center flex flex-col content-center object-cover h-screen w-full place-content-center"}
                spanStyle={"rounded-xl text-red-500 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}
                scrollRef="about_us"
                scrollStyle={"text-white bg-red-500 hover:bg-black hover:text-red-500 hover:border-2 hover:border-red-500"}
            />
            
            {/* Paragraph positioned absolutely over Hero */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-3/4 max-w-2xl">
                <Paragraph
                    title="Quem sou eu?"
                    text="texto introdutorio sobre o massoterapeuta"
                    titleStyle="text-white text-center text-4xl font-bold mb-4"
                    textStyle="text-white text-center text-lg bg-black bg-opacity-50 p-4 rounded-lg"
                />
            </div>
        </div>
    )
}

export default AboutUs