import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"
import Presentation from "../components/Home/Presentation";
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"

import Beneficios from "../components/Home/Benefits.jsx";
import Plataformas from "../components/Home/Plataformas.jsx";
import Goals from "../components/Home/Goals.jsx";
import SocialMedia from "./../components/Home/SocialMedia.jsx"

import thumbHero from "../assets/Pages/purple/thumb-hero.jpg"
import notebook from "./../assets/Comercial/other/notebook.jpg"

import { useEffect } from "react";
// import 

const Home = () => {
    useEffect(() => {
        document.title = "Início | Meu Site";
      }, []);
    return (

        <div className="overflow-x-hidden">
            <Navbar
                data={navbarData}
            />
            <Hero

                id="Hero"
                title={" ACADEMIA DO EMPREENDEDOR DIGITAL"}
                data={[]}

                hasButton={true}
                hasText={true}

                bgImage={thumbHero}
                scrollRef="presentation"
                scrollStyle={""}

                titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-5xl h-1/2  text-yellow-500 font-bold"}
                // subTitleStyle={"transition delay-200 easy-in duration-300 items-center flex flex-col content-center w-1/2 text-white font-bold"}
                // textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                // // spanStyle={"rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}
                //rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center
                //altere aqui o posicionamento dos items, evite usar spanStyle
                style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center w-screen"}
            //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
            />

            <Presentation
                id={'presentation'}
            />
            <Plataformas
                style={' h-fit relative flex flex-col p-4 gap-4 bg-gradient-to-tr from-violet-500 to-violet-900 w-screen'}
                sideImage={notebook}
                imageAlt={'notebook'}
                imageStyle={'items-center border-8 border-yellow-500 h-auto lg:w-96 md:w-72 sm:w-64 rounded-full'}
                id={'plataformas'}
                scrollStyle={'flex justify-center py-4'}
                />
            <Beneficios
                id={'beneficios'}
            />
            <Goals
                id={'goals'}
            />
            <SocialMedia id={'socialmedia'} />
            
            <Footer
                id="footer"
                data={footerData}
            />
        </div>
    )
}

export default Home