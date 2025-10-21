import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"

import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"

import bambuterapia from "./../../src/assets/Bambuterapia.jpg";
import ventosoterapia from "./../../src/assets/Ventosoterapia.jpg";
import pedrasQuentes from "./../../src/assets/PedrasQuentes.jpg";

import depoimentos from "./../../src/assets/depoimentos/dep_text_wide.png"
// import notebook from "./../../src/assets/src/assets/Comercial/other/notebook.jpg"
import teamData from "./../Data/teamData.json";
import { useEffect } from "react";

import SideView from "../components/Content/SideView.jsx";
import AboutUs from "./AboutUs.jsx";
import Team from "../components/Team/Team.tsx";
import BackgroundVideo from "../components/Content/BackgroundVideo.tsx";
import Scroller from "../components/Animated/Scroller.jsx";
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
            <BackgroundVideo
            />
            {/* Apresentacao Inicial ; Possivelmente tertei que escrever um componente novo*/}

            {/* Introducao do Massagista */}
            <AboutUs>

            </AboutUs>

            <Hero
                id="Depoimentos"
                title={""}
                data={[]}

                hasButton={false}
                hasText={false}

                bgImage={depoimentos}
                scrollRef="presentation"
                scrollStyle={"text-white bg-red-500  hover:bg-black hover:text-red-500 hover:border-2 hover:border-red-500"}

                titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-5xl  text-white font-bold place-content-center left-8"}
                style={"px-6 bg-gradient-to-b from-red-500 to-red-900 items-center flex flex-col content-center  overflow-hidden place-content-center sm:h-16 md:h-32 lg:h-64"}
            //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
            />
            <Scroller />
            {/* cards de apresentacao */}
            <Team
                data={teamData}
                title={'Nossas Massoterapias'}
                titleStyle={`bg-black capitalize text-4xl p-2 place-items-center p-8 font-extrabold text-red-600 `}
                style={"bg-black p-4 h-auto w-full flex place-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max"}
            />

            {/* Explicacao de cada Tratamento */}
            <SideView
                isSectionTitle={true}
                sectionTitle={"Bambuterapia"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
                    A bambuterapia é uma técnica de massagem terapêutica que utiliza hastes de bambu de diferentes tamanhos e formas para realizar movimentos de pressão e deslizamento sobre o corpo. É uma técnica milenar chinesa, adaptada e utilizada em diversas partes do mundo, como a França, onde se tornou popular como uma alternativa para modelagem corporal e relaxamento. 
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={0}
                image={bambuterapia}
                imageStyle={"w-full h-auto rounded-r-full"}
            />

            <SideView
                isSectionTitle={true}
                sectionTitle={"Ventosoterapia"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                    Também conhecida como cupping therapy, é uma técnica de cura tradicional que utiliza ventosas para criar vácuo na pele, com o objetivo de melhorar a circulação sanguínea, aliviar dores, reduzir inflamações e promover relaxamento muscular. Ela pode ser usada para tratar uma variedade de condições, como dores nas costas, no pescoço, dores de cabeça, rigidez muscular, ansiedade e até mesmo celulite.
                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={ventosoterapia}
                imageStyle={"w-full h-auto rounded-l-full"}
            />

            <SideView
                isSectionTitle={true}
                sectionTitle={"Pedras Quentes"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
  A massagem com pedras quentes, ou "hot stone massage", oferece diversos benefícios, incluindo alívio de dores musculares, relaxamento profundo, redução de estresse e ansiedade, melhora da circulação e, em alguns casos, alívio de dores de cabeça e enxaquecas.
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={pedrasQuentes}
                imageStyle={"w-full h-auto rounded-r-full"}
            />
            <SideView
                isSectionTitle={true}
                sectionTitle={"Ventosoterapia"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                    Também conhecida como cupping therapy, é uma técnica de cura tradicional que utiliza ventosas para criar vácuo na pele, com o objetivo de melhorar a circulação sanguínea, aliviar dores, reduzir inflamações e promover relaxamento muscular. Ela pode ser usada para tratar uma variedade de condições, como dores nas costas, no pescoço, dores de cabeça, rigidez muscular, ansiedade e até mesmo celulite.
                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={ventosoterapia}
                imageStyle={"w-full h-auto rounded-l-full"}
            />

            <SideView
                isSectionTitle={true}
                sectionTitle={"Pedras Quentes"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
  A massagem com pedras quentes, ou "hot stone massage", oferece diversos benefícios, incluindo alívio de dores musculares, relaxamento profundo, redução de estresse e ansiedade, melhora da circulação e, em alguns casos, alívio de dores de cabeça e enxaquecas.
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={pedrasQuentes}
                imageStyle={"w-full h-auto rounded-r-full"}
            />
            <SideView
                isSectionTitle={true}
                sectionTitle={"Ventosoterapia"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                    Também conhecida como cupping therapy, é uma técnica de cura tradicional que utiliza ventosas para criar vácuo na pele, com o objetivo de melhorar a circulação sanguínea, aliviar dores, reduzir inflamações e promover relaxamento muscular. Ela pode ser usada para tratar uma variedade de condições, como dores nas costas, no pescoço, dores de cabeça, rigidez muscular, ansiedade e até mesmo celulite.
                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={ventosoterapia}
                imageStyle={"w-full h-auto rounded-l-full"}
            />

            <SideView
                isSectionTitle={true}
                sectionTitle={"Pedras Quentes"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
  A massagem com pedras quentes, ou "hot stone massage", oferece diversos benefícios, incluindo alívio de dores musculares, relaxamento profundo, redução de estresse e ansiedade, melhora da circulação e, em alguns casos, alívio de dores de cabeça e enxaquecas.
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={pedrasQuentes}
                imageStyle={"w-full h-auto rounded-r-full"}
            />
            <SideView
                isSectionTitle={true}
                sectionTitle={"Ventosoterapia"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                    Também conhecida como cupping therapy, é uma técnica de cura tradicional que utiliza ventosas para criar vácuo na pele, com o objetivo de melhorar a circulação sanguínea, aliviar dores, reduzir inflamações e promover relaxamento muscular. Ela pode ser usada para tratar uma variedade de condições, como dores nas costas, no pescoço, dores de cabeça, rigidez muscular, ansiedade e até mesmo celulite.
                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={ventosoterapia}
                imageStyle={"w-full h-auto rounded-l-full"}
            />

            <SideView
                isSectionTitle={true}
                sectionTitle={"Pedras Quentes"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
  A massagem com pedras quentes, ou "hot stone massage", oferece diversos benefícios, incluindo alívio de dores musculares, relaxamento profundo, redução de estresse e ansiedade, melhora da circulação e, em alguns casos, alívio de dores de cabeça e enxaquecas.
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={pedrasQuentes}
                imageStyle={"w-full h-auto rounded-r-full"}
            />

            <Footer
                id={'footer'}
                data={footerData}
            />
        </div>
    )
}

export default Home