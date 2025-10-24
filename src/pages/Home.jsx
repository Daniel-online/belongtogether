import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"

import Action from "../components/Buttons/Action.jsx"
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import whatsappRef from "./../Data/whatsappRef.json";

// Use proper paths - adjust based on where Home.jsx is located
import bambuterapia from "@assets/Bambuterapia.jpg";
import ventosoterapia from "@assets/Ventosoterapia.jpg";
import pedrasQuentes from "@assets/PedrasQuentes.jpg";
import depoimentos from "@assets/depoimentos/dep_text_wide.png";
import Depilacao from "@assets/depilacao.jpg";
import tantrica from "@assets/tantrica.jpg";
import nuru from "@assets/nuruMassage.jpg";
import relaxante from "@assets/Relaxante.jpg";
import secreta from "@assets/massagemSecreta.jpg";
// import notebook from "./../../src/assets/src/assets/Comercial/other/notebook.jpg"
import teamData from "./../components/Team/teamData.js";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
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
            <AboutUs
                id="sobre">

            </AboutUs>
            {/* Depoimentos Section */}
            {/* Depoimentos Section - Using img tag */}
            <Hero
                id="depoimentos"
                title=""
                data={[]}
                hasText={false}
                hasButton={false}
                bgImage={depoimentos}
                titleStyle="text-white text-4xl sm:text-6xl font-bold drop-shadow-lg"
                style="bg-black"
                scrollRef="#about"
                scrollStyle="text-white bg-red-500 hover:bg-black"
                spanStyle=""
            />



            <Scroller />
            {/* cards de apresentacao */}
            <Team
                id="tratamentos"
                data={teamData}
                title={'Nossas Massoterapias'}
                titleStyle={`bg-black capitalize text-4xl p-2 place-items-center p-8 font-extrabold text-red-600 `}
                style={"bg-black p-4 h-auto w-full flex place-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max"}
            />

            {/* Explicacao de cada Tratamento

            */}
            <SideView
                id="terapia0"
                isSectionTitle={true}
                sectionTitle={"Depilação com Máquina"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                                A depilação com máquina é um método moderno e eficiente para remoção de pelos, proporcionando resultados duradouros e uma pele suave. Utilizando tecnologia avançada, este tratamento é realizado por profissionais qualificados, garantindo conforto e segurança durante todo o processo.
                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={Depilacao}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[0].link}
            />
            <SideView
                id="terapia1"
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
                referralLink={whatsappRef[1].link}
            />

            <SideView
                id="terapia2"
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
                referralLink={whatsappRef[2].link}
            />

            <SideView
                id="terapia3"
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
                referralLink={whatsappRef[3].link}
            />
            <SideView
                id="terapia4"
                sectionTitle={"Massagem Tântrica"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`A Massagem Tântrica é uma poderosa extensão da filosofia milenar do Tantra, originária da Índia há mais de 5.000 anos, que considera o corpo humano como um templo sagrado e um veículo para a conexão profunda entre mente, corpo e espírito.

Diferente das massagens convencionais, que focam primariamente na tensão muscular, a Tântrica é uma prática terapêutica de autoconhecimento que utiliza toques sutis, conscientes e técnicas de respiração guiada.`}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={tantrica}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[4].link}
            />

            <SideView
                id="terapia5"
                isSectionTitle={true}
                sectionTitle={"Massagem Nuru"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
                    A Massagem Nuru é uma experiência sensorial única, de origem japonesa, que se destaca pelo método de deslizamento total do corpo ("corpo a corpo") utilizando um gel especial (Nuru Gel), geralmente à base de algas marinhas. Este gel é transparente, inodoro e altamente viscoso, permitindo um contato de baixíssima fricção. O objetivo principal é proporcionar um relaxamento profundo e uma intensa consciência corporal.

A Massagem Nuru oferece três benefícios centrais:

Relaxamento e Alívio de Tensão: O deslizamento contínuo e envolvente acalma a mente, alivia profundamente as tensões musculares e reduz o estresse e a ansiedade.

Estímulo Sensorial Único: A técnica intensifica a sensibilidade ao toque, proporcionando uma experiência tátil singular e expansiva que desperta os sentidos de forma incomparável.

Cuidado com a Pele: O Nuru Gel é conhecido por suas propriedades hidratantes, nutrindo a pele e deixando-a macia, suave e revitalizada após a sessão
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={nuru}
                imageStyle={"w-full h-auto rounded-r-full"}
                referralLink={whatsappRef[5].link}
            />
            <SideView
                id="terapia6"
                isSectionTitle={true}
                sectionTitle={"Massagem Relaxante"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
                    Descubra a Massagem Relaxante elevada a uma nova arte: um encontro de profundo bem-estar e despertar sensual, guiado por **mãos profissionais** e experientes.

Nossa técnica é a **soma de anos de prática e aprimoramento**, integrando o melhor das massagens clássicas com o toque sutil e consciente que evoca o erotismo e o prazer. Cada movimento é executado com **precisão e sensibilidade**, visando não apenas o alívio das tensões musculares, mas a expansão de todas as suas sensações.

Permita-se entregar a este ritual onde o **cuidado profissional** se une ao **despertar do erotismo**. É o momento ideal para desligar a mente, relaxar profundamente e redescobrir a beleza e a sensualidade do seu próprio corpo, através de um toque que é técnico, respeitoso e inesquecível.
                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={relaxante}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[6].link}

            />

            <SideView
                id="terapia7"
                isSectionTitle={true}
                sectionTitle={"Massagem Secreta"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
                    Bem-vindo ao ritual que quebra as barreiras do conhecido. A Massagem Secreta é uma experiência de acesso exclusivo, onde o toque transcende o físico para desvendar sensações que você nunca soube que existiam.

Este tratamento é uma jornada sensorial única, totalmente adaptada à sua energia. Não há protocolo fixo; há apenas a sua entrega a um caminho de prazer e mistério, guiado por um toque profundamente intuitivo e pela expertise de um terapeuta que domina técnicas raras e aprimoradas.

O objetivo é a transcendência: liberar o que está oculto e despertar um novo nível de percepção sensorial no seu corpo. Permita que o inédito aconteça. Descubra o segredo que só o seu corpo pode guardar e desvendar.
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={secreta}
                imageStyle={"w-full h-auto rounded-r-full"}
                referralLink={whatsappRef[7].link}
            />
            <div className="bg-black py-24 px-8 flex flex-col items-center justify-center text-center">
                <Action
                    id="contato"
                    title={
                        <span className="flex items-center gap-3">
                            <IoLogoWhatsapp
                                className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300 group-hover:text-red-500"
                            />
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">
                                Dúvidas? Fale Conosco pelo WhatsApp!
                            </span>
                        </span>
                    }
                    style="flex flex-col items-center justify-center gap-6"
                    buttonStyle={`
    group
    flex items-center justify-center gap-3
    bg-red-500 text-white font-extrabold tracking-wide bg-opacity-90
    px-8 sm:px-10 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl
    border border-red-700 shadow-xl
    hover:bg-white hover:text-red-600 hover:scale-105
    active:scale-95 transition-all duration-300 ease-in-out
  `}
                    href="https://wa.me/5521999462860?text=Olá! Eu não encontrei todas as informações que precisava no site e gostaria de saber mais sobre os serviços oferecidos."
                />

            </div>


            <Footer
                id={'footer'}
                data={footerData}
            />
        </div>
    )
}

export default Home