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

import thumbHero from "./../../public/website-guilherme/Website-Guilherme.png"
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
                title={"Uma experiencia tantrica"}
                data={[]}

                hasButton={true}
                hasText={true}

                bgImage={thumbHero}
                scrollRef="presentation"
                scrollStyle={"text-white bg-red-500  hover:bg-black hover:text-red-500 hover:border-2 hover:border-red-500"}

                titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-5xl h-1/2 text-white font-bold place-content-center left-8"}
                style={"px-6 bg-gradient-to-b from-red-500 to-red-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center w-screen"}
            //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
            />
            
            <Footer
                id={'footer'}
                data={footerData}
            />
        </div>
    )
}

export default Home