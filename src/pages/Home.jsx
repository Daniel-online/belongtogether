import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"
import Presentation from "../components/Home/Presentation";
import Planos from "../components/Home/Planos";
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import heroTestData from "./../Data/heroTestData.json"
import Carousel from "../components/Content/Carousel.jsx";
import Cards from "../components/Content/Cards.jsx"
import Media from "../components/Content/Media.jsx";
import image from "../assets/Pages/purple/thumb-midia-light.jpg"
import thumbHero from "../assets/Pages/purple/thumb-hero.jpg"
const Home = () => {
    return (

        <div className="">
            <Navbar
                data={navbarData}
            />
            <Hero

                id="Hero"
                title={"O Maior Marketing do Brasil"}
                data={heroTestData}

                hasButton={true}
                hasText={true}

                bgImage={thumbHero}
                scrollRef="presentation"
                scrollStyle={""}

                titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-7xl h-1/2  text-yellow-500 font-bold"}
                // subTitleStyle={"transition delay-200 easy-in duration-300 items-center flex flex-col content-center w-1/2 text-white font-bold"}
                // textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                // // spanStyle={"rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center"}
                //rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/3 w-1/2 place-content-center
                //altere aqui o posicionamento dos items, evite usar spanStyle
                style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center"}
            //px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center
            />
            <Presentation
            />
            <Cards></Cards>
            <Media
                image={image}
            />
            <Planos />
            <Carousel></Carousel>
            <Footer
                id="footer"
                data={footerData}
            />
        </div>
    )
}

export default Home