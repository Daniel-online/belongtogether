import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"
import Presentation from "../components/Home/Presentation";
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import Plataforms from "../components/Home/Platforms.jsx";
import Benefits from "../components/Home/Benefits.jsx";
// import Plataformas from "../components/Home/Plataformas.jsx";
import Goals from "../components/Home/Goals.jsx";
// import SocialMedia from "./../components/Home/SocialMedia.jsx"

import thumbHero from "./../../public/assets/Pages/purple/thumb-hero.jpg"
// import notebook from "./../../public/assets/Comercial/other/notebook.jpg"

import { useEffect } from "react";
import CallToAction from "../components/Home/CallToAction.jsx";
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
                style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center w-screen"}
            //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
            />

            <Presentation
                id={'presentation'}
            />
            {/* <Plataformas
                style={' h-fit relative flex flex-col p-4 gap-4 bg-gradient-to-tr from-violet-500 to-violet-900 w-screen'}
                sideImage={notebook}
                imageAlt={'notebook'}
                imageStyle={'items-center border-8 border-yellow-500 h-auto lg:w-96 md:w-72 sm:w-64 rounded-full'}
                id={'plataformas'}
                scrollStyle={'flex justify-center py-4'}
                /> */}
            <Plataforms
                id={'plataformas'}
            />
            <Benefits
                id={'beneficios'}
            />
            <Goals
                id={'goals'}
            />
            {/* <SocialMedia
                id={'socialmedia'} 
            /> */}
            <CallToAction 
                id={'callToAction'}
            />
            <Footer
                id={'footer'}
                data={footerData}
            />
        </div>
    )
}

export default Home