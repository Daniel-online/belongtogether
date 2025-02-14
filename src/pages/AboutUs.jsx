import Content from "../components/Content/Content"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navigation/Navbar"
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import Hero from "./../components/Content/Hero"
import aboutUsData from "./..//Data/aboutUsData.json"
import { useEffect } from "react"
import imgUrl from "./../../public/assets/Pages/yellow/thumb-about-us.jpg"
// import Cards from "../components/Content/Cards"
import teamData from "./../Data/teamData.json"
import Team from "../components/Team/Team"

const AboutUs = () => {
    useEffect(() => {
        document.title = "Sobre Nós"
    })
    return (

        <>
            <Navbar data={navbarData}></Navbar>
            <Hero
                title={""}
                data={[]}
                hasButton={false}
                bgImage={imgUrl}
                titleStyle={"text-border-lg border-white text-7xl h-1/2 text-yellow-500 font-bold"}
                subTitleStyle={"items-center flex flex-col content-center w-1/2 text-white font-bold"}
                textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                style={"bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center object-cover h-96 w-full place-content-center "}
                spanStyle={"rounded-xl bg-opacity-80  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}

            />
            <Team
                data={teamData}
                title={'Nossa Equipe'}
                titleStyle={`capitalize text-4xl p-2 place-items-center p-8 font-extrabold text-violet-600 `}
                style={"p-4 h-auto w-full flex place-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max"}
            />
            <Content
                data={aboutUsData}
                hasMedia={true}
                style={''}
                titleStyle={'font-bold text-violet-600'}
                subTitleStyle={''}
                listStyle={''}
                textStyle={'indent-3 text-justify font-medium'}
            />
            <Footer data={footerData}></Footer>
        </>
    )
}

export default AboutUs
