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
import bambuterapia from "./../../public/website-guilherme/Bambuterapia.jpg";
import ventosoterapia from "./../../public/website-guilherme/Ventosoterapia.jpg";

import thumbHero from "./../../public/website-guilherme/Website-Guilherme.png"
// import notebook from "./../../public/assets/Comercial/other/notebook.jpg"

import { useEffect } from "react";
import CallToAction from "../components/Home/CallToAction.jsx";
import SideView from "../components/Content/SideView.jsx";
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

            <SideView
                isSectionTitle={true}
                sectionTitle={"Bambuterapia"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
                    A bambuterapia é uma técnica de massagem terapêutica que utiliza hastes de bambu de diferentes tamanhos e formas para realizar movimentos de pressão e deslizamento sobre o corpo. 
É uma técnica milenar chinesa, adaptada e utilizada em diversas partes do mundo, como a França, onde se tornou popular como uma alternativa para modelagem corporal e relaxamento. 
                `}
                textStyle={"text-white"}
                titleStyle={"text-red-500"}
                therapyLevel={0}
                image={bambuterapia}
                imageStyle={"w-full h-auto rounded-r-full"}
            />
            <SideView
                isSectionTitle={true}
                sectionTitle={"Ventosoterapia"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                    Também conhecida como cupping therapy, é uma técnica de cura tradicional que utiliza ventosas para criar vácuo na pele, com o objetivo de melhorar a circulação sanguínea, aliviar dores, reduzir inflamações e promover relaxamento muscular.
Ela pode ser usada para tratar uma variedade de condições, como dores nas costas, no pescoço, dores de cabeça, rigidez muscular, ansiedade e até mesmo celulite.
                    `}
                textStyle={"text-red-500"}
                titleStyle={"text-white"}
                therapyLevel={1}
                image={ventosoterapia}
                imageStyle={"w-full h-auto rounded-l-full"}
            />

            <Footer
                id={'footer'}
                data={footerData}
            />
        </div>
    )
}

export default Home